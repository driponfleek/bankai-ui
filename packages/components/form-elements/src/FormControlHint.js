import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/form-control-hint.scss';

class FormControlHint extends PureComponent {
    static defaultProps = {
        isHintARIAAtomic: false,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        hintARIALive: PropTypes.string,
        hintARIARelevant: PropTypes.string,
        hintText: PropTypes.string,
        id: PropTypes.string,
        isHintARIAAtomic: PropTypes.bool,
        renderHint: PropTypes.func,
    };

    render() {
        const { contextCls, id } = this.props;
        const ariaProps = this.getARIAExtantProps();
        const hasHint = this.getHasHint();

        return (
            <span
                {...ariaProps}
                className={cx(this.baseCls, contextCls)}
                id={id}
            >
                {hasHint && this.renderHint()}
            </span>
        );
    }

    renderHint() {
        const {
            hintARIALive,
            hintARIARelevant,
            isHintARIAAtomic,
            renderHint,
            ...rest
        } = this.props;

        return renderHint ? renderHint({ ...rest }) : this.renderDefaultHint();
    }

    renderDefaultHint() {
        const { hintText } = this.props;

        return <span className={`${this.baseCls}__text`}>{hintText}</span>;
    }

    getARIAExtantProps() {
        const { hintARIALive, hintARIARelevant, isHintARIAAtomic } = this.props;

        // https://hiddedevries.nl/en/blog/2017-04-04-how-to-make-inline-error-messages-accessible
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
        return {
            ...(isHintARIAAtomic && { 'aria-atomic': isHintARIAAtomic }),
            ...(hintARIALive && { 'aria-live': hintARIALive }),
            ...(hintARIARelevant && {
                'aria-relevant': hintARIARelevant,
            }),
        };
    }

    getHasHint() {
        const { hintText, renderHint } = this.props;

        return !!hintText || !!renderHint;
    }

    baseCls = 'bankai-form-control-hint';
}

export default FormControlHint;
