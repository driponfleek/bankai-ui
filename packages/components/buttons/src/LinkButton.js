import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonIcon from './components/ButtonIcon';
import ButtonText from './components/ButtonText';

// Styles
import './styles/link-button.scss';

class LinkButton extends PureComponent {
    static defaultProps = {
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        text: PropTypes.string,
        data: PropTypes.object,
        onClick: PropTypes.func,
        renderIcon: PropTypes.func,
    };

    render() {
        const { contextCls, children } = this.props;
        const props = this.getExtantProps();

        return (
            <button
                {...props}
                className={cx(this.baseCls, contextCls)}
                type="button"
                onClick={this.handleClick}
            >
                <span className={`${this.baseCls}__content-container`}>
                    {!children && this.renderMain()}
                    {children}
                </span>
            </button>
        );
    }

    renderMain = () => {
        const { text, renderIcon } = this.props;

        return (
            <Fragment>
                {!!renderIcon && this.renderIcon()}
                {!!text && this.renderText()}
            </Fragment>
        );
    };

    renderIcon = () => {
        const { renderIcon } = this.props;

        return <ButtonIcon baseCls={this.baseCls} renderIcon={renderIcon} />;
    };

    renderText = () => {
        const { text } = this.props;

        return <ButtonText baseCls={this.baseCls}>{text}</ButtonText>;
    };

    handleClick = (e) => {
        const { onClick, data } = this.props;

        onClick({ e, ...(data && { data }) });
    };

    getExtantProps = () => {
        const {
            contextCls,
            text,
            data,
            onClick,
            renderIcon,
            children,
            ...rest
        } = this.props;
        const props = { ...rest };
        delete props.disabled;

        // To enforce button text being properly written and
        // prevent scenario where text and aria label exist,
        // delete the aria-label prop if props.text is present
        if (text) {
            delete props['aria-label'];
        }

        return props;
    };

    baseCls = 'bankai-link-button';
}

export default LinkButton;
