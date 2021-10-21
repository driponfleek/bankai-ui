import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Heading } from '@epr0t0type/bankai-ui-typography';

// Styles
import './styles/callout.scss';

class Callout extends PureComponent {
    static propTypes = {
        contextCls: PropTypes.string,
        title: PropTypes.string,
        msg: PropTypes.string,
        renderIcon: PropTypes.func,
    };

    render() {
        const { contextCls, renderIcon, title, msg, children } = this.props;

        return (
            <div className={cx(this.baseCls, contextCls)}>
                <div className={`${this.baseCls}__inner`}>
                    {!children && (
                        <Fragment>
                            {renderIcon && this.renderIcon()}
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
                {renderIcon(iconCls)}
            </div>
        );
    };

    renderMessaging = () => {
        const { title, msg } = this.props;

        return (
            <div className={`${this.baseCls}__text-container`}>
                {title && (
                    <div className={`${this.baseCls}__title-container`}>
                        <Heading contextCls={`${this.baseCls}__title`}>
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

    baseCls = 'bankai-callout';
}

export default Callout;
