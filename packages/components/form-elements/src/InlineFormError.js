import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/inline-form-error.scss';

class InlineFormError extends PureComponent {
    static defaultProps = {
        isErrorPolite: false,
        isErrorAtomic: true,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        errorARIARelevant: PropTypes.string,
        errorText: PropTypes.string,
        errorIconCls: PropTypes.string,
        id: PropTypes.string,
        isErrorPolite: PropTypes.bool,
        isErrorAtomic: PropTypes.bool,
        renderCustomError: PropTypes.func,
    };

    render() {
        const { contextCls, id } = this.props;
        const hasError = this.getHasError();
        const ariaProps = this.getARIAProps();

        return (
            <span
                {...ariaProps}
                id={id}
                className={cx(this.baseCls, contextCls)}
            >
                {hasError && this.renderError()}
            </span>
        );
    }

    renderError() {
        const { renderCustomError } = this.props;

        return renderCustomError
            ? this.renderCustomError()
            : this.renderDefaultError();
    }

    renderDefaultError() {
        const { errorIconCls, errorText } = this.props;

        return (
            <Fragment>
                {errorIconCls && (
                    <span className={`${this.baseCls}__icon ${errorIconCls}`} />
                )}{' '}
                <span className={`${this.baseCls}__text`}>{errorText}</span>
            </Fragment>
        );
    }

    renderCustomError() {
        const {
            isErrorPolite,
            isErrorAtomic,
            errorARIARelevant,
            renderCustomError,
            ...rest
        } = this.props;

        return renderCustomError({ ...rest });
    }

    getARIAProps() {
        const { isErrorPolite, isErrorAtomic, errorARIARelevant } = this.props;
        const ariaLive = isErrorPolite ? 'polite' : 'assertive';

        // https://hiddedevries.nl/en/blog/2017-04-04-how-to-make-inline-error-messages-accessible
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
        return {
            ...(isErrorAtomic && { 'aria-atomic': isErrorAtomic }),
            'aria-live': ariaLive,
            ...(errorARIARelevant && {
                'aria-relevant': errorARIARelevant,
            }),
            ...(!errorARIARelevant &&
                !isErrorPolite && {
                    'aria-relevant': 'additions removals',
                }),
        };
    }

    getHasError() {
        const { errorText, renderCustomError } = this.props;

        return !!errorText || !!renderCustomError;
    }

    baseCls = 'bankai-inline-form-error';
}

export default InlineFormError;
