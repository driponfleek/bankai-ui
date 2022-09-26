import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Heading } from '@epr0t0type/bankai-ui-typography';
// Constants
import VARIANTS from './const/variantsConst';

// Styles
import './styles/callout-banner.scss';

const { AFFIRMATIVE, CAUTIONARY, ERROR, INFO } = VARIANTS;

class CalloutBanner extends PureComponent {
    static defaultProps = {
        headingLvl: 3,
    };

    static propTypes = {
        contextCls: PropTypes.string,
        variant: PropTypes.string,
        msg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        headingLvl: PropTypes.number,
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
        const { variant, title } = this.props;

        return {
            [`${this.baseCls}--affirmative`]: variant === AFFIRMATIVE,
            [`${this.baseCls}--cautionary`]: variant === CAUTIONARY,
            [`${this.baseCls}--error`]: variant === ERROR,
            [`${this.baseCls}--has-title`]: !!title,
            [`${this.baseCls}--info`]: variant === INFO,
        };
    };

    baseCls = 'bankai-callout-banner';
}

export default CalloutBanner;
