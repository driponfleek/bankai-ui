import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Constants
import VARIANTS from './const/variantsConst';

// Styles
import './styles/callout-memo.scss';

const { AFFIRMATIVE, CAUTIONARY, ERROR, INFO } = VARIANTS;

class CalloutMemo extends PureComponent {
    static propTypes = {
        contextCls: PropTypes.string,
        title: PropTypes.string,
        msg: PropTypes.string,
        variant: PropTypes.string,
        renderIcon: PropTypes.func,
    };

    render() {
        const { contextCls, renderIcon, title, msg, children } = this.props;
        const modCls = this.getModCls();

        return (
            <div className={cx(this.baseCls, modCls, contextCls)}>
                <div className={`${this.baseCls}__inner`}>
                    {!children && (
                        <Fragment>
                            {renderIcon && this.renderIcon()}
                            {(title || msg) && this.renderMain()}
                        </Fragment>
                    )}
                    {children}
                </div>
            </div>
        );
    }

    renderIcon = () => {
        const { renderIcon } = this.props;
        const iconCls = `${this.baseCls}__icon`;

        return (
            <div className={`${this.baseCls}__icon-container`}>
                {renderIcon(iconCls)}
            </div>
        );
    };

    renderMain = () => {
        const { title, msg } = this.props;

        return (
            <div className={`${this.baseCls}__text-container`}>
                {title && (
                    <div className={`${this.baseCls}__title-container`}>
                        <p className={`${this.baseCls}__title`}>{title}</p>
                    </div>
                )}
                {msg && (
                    <div className={`${this.baseCls}__msg-container`}>
                        <p className={`${this.baseCls}__msg`}>{msg}</p>
                    </div>
                )}
            </div>
        );
    };

    getModCls = () => {
        const { variant } = this.props;

        return {
            [`${this.baseCls}--affirmative`]: variant === AFFIRMATIVE,
            [`${this.baseCls}--cautionary`]: variant === CAUTIONARY,
            [`${this.baseCls}--error`]: variant === ERROR,
            [`${this.baseCls}--info`]: variant === INFO,
        };
    };

    baseCls = 'bankai-callout-memo';
}

export default CalloutMemo;
