import React from 'react';
import PropTypes from 'prop-types';
import { CalloutBanner, VARIANTS } from '@epr0t0type/bankai-ui-callouts';
import { BankaiCircleInfo } from '@epr0t0type/bankai-ui-icons';

const { INFO } = VARIANTS;

const CalloutBannerInfo = (props) => {
    const { contextCls, title, msg, children } = props;
    const calloutBannerCls = 'bankai-callout-banner';

    return (
        <CalloutBanner contextCls={contextCls} variant={INFO}>
            <div className={`${calloutBannerCls}__icon-container`}>
                <BankaiCircleInfo contextCls={`${calloutBannerCls}__icon`} />
            </div>
            <div className={`${calloutBannerCls}__text-container`}>
                {title && (
                    <div className={`${calloutBannerCls}__title-container`}>
                        <p className={`${calloutBannerCls}__title`}>{title}</p>
                    </div>
                )}
                {(msg || children) && (
                    <div className={`${calloutBannerCls}__msg-container`}>
                        {!children && (
                            <p className={`${calloutBannerCls}__msg`}>{msg}</p>
                        )}
                        {children}
                    </div>
                )}
            </div>
        </CalloutBanner>
    );
};

CalloutBannerInfo.propTypes = {
    contextCls: PropTypes.string,
    title: PropTypes.string,
    msg: PropTypes.string,
};

export default CalloutBannerInfo;
