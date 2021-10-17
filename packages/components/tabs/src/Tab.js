import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Tab as ARIATab } from 'react-aria-tabpanel';

// Styles
import './styles/tab.scss';

class Tab extends PureComponent {
    static defaultProps = {
        isActive: false,
        isVertical: false,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string.isRequired,
        letterNavigationText: PropTypes.string,
        text: PropTypes.string,
        isActive: PropTypes.bool,
        isVertical: PropTypes.bool,
        renderIcon: PropTypes.func,
    };

    render() {
        const {
            contextCls,
            id,
            letterNavigationText,
            isActive,
            isVertical,
            children,
            renderIcon,
            text,
            ...rest
        } = this.props;
        const modCls = {
            [`${this.baseCls}--is-active`]: isActive,
            [`${this.baseCls}--is-vertical`]: isVertical,
        };

        return (
            <ARIATab
                {...rest}
                className={cx(this.baseCls, modCls, contextCls)}
                id={id}
                letterNavigationText={letterNavigationText}
                active={isActive}
            >
                {children || this.renderContent()}
            </ARIATab>
        );
    }

    renderContent = () => {
        const { renderIcon, text } = this.props;

        return (
            <div className={`${this.baseCls}__content`}>
                <div className={`${this.baseCls}__content-inner`}>
                    {!!renderIcon && (
                        <span className={`${this.baseCls}__icon-container`}>
                            <span
                                className={`${this.baseCls}__icon-safe-space`}
                            >
                                {renderIcon(`${this.baseCls}__icon`)}
                            </span>
                        </span>
                    )}
                    {!!text && (
                        <span className={`${this.baseCls}__text-container`}>
                            <span className={`${this.baseCls}__text`}>
                                {text}
                            </span>
                        </span>
                    )}
                </div>
            </div>
        );
    };

    baseCls = 'bankai-tab';
}

export default Tab;
