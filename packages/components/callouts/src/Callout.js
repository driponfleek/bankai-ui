import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
    BankaiCheck,
    BankaiCircleInfo,
    BankaiTriangleAlert,
} from '@epr0t0type/bankai-ui-icons';
import { Heading } from '@epr0t0type/bankai-ui-typography';

// Constants
import VARIANTS from './const/variantsConst';

// Styles
import './styles/callout.scss';

const { AFFIRMATIVE, CAUTIONARY, ERROR, INFO } = VARIANTS;

class Callout extends PureComponent {
    static defaultProps = {
        headingLvl: 2,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        msg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        variant: PropTypes.string,
        headingLvl: PropTypes.number,
        renderIcon: PropTypes.func,
    };

    render() {
        const { contextCls, renderIcon, variant, title, msg, children } =
            this.props;
        const shouldRenderIcon = !!renderIcon || !!variant;
        const modCls = this.getModCls();

        return (
            <div className={cx(this.baseCls, modCls, contextCls)}>
                <div className={`${this.baseCls}__inner`}>
                    {!children && (
                        <Fragment>
                            {shouldRenderIcon && this.renderIcon()}
                            {(title || msg) && this.renderMessaging()}
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
                {renderIcon
                    ? renderIcon(iconCls)
                    : this.renderStatusIcon(iconCls)}
            </div>
        );
    };

    renderStatusIcon = (iconCls) => {
        const { variant } = this.props;
        let Icon;

        switch (variant) {
            case VARIANTS.AFFIRMATIVE:
                Icon = BankaiCheck;
                break;
            case VARIANTS.INFO:
                Icon = BankaiCircleInfo;
                break;

            default:
                Icon = BankaiTriangleAlert;
                break;
        }

        return <Icon contextCls={iconCls} />;
    };

    renderMessaging = () => {
        const { title, msg, headingLvl } = this.props;

        return (
            <div className={`${this.baseCls}__text-container`}>
                {title && (
                    <div className={`${this.baseCls}__title-container`}>
                        <Heading
                            contextCls={`${this.baseCls}__title`}
                            headingLvl={headingLvl}
                        >
                            {title}
                        </Heading>
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

    baseCls = 'bankai-callout';
}

export default Callout;
