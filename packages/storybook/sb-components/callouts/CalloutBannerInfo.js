import React from 'react';
import PropTypes from 'prop-types';
import { CalloutBanner, VARIANTS } from '@epr0t0type/bankai-ui-callouts';
import { BankaiCircleInfo } from '@epr0t0type/bankai-ui-icons';
import { Heading } from '@epr0t0type/bankai-ui-typography';

const { INFO } = VARIANTS;

const CalloutBannerInfo = (props) => {
    const { contextCls, title, msg, headingLvl, children } = props;
    const calloutBannerCls = 'bankai-callout-banner';

    return (
        <CalloutBanner contextCls={contextCls} variant={INFO}>
            <div className={`${calloutBannerCls}__icon-container`}>
                <BankaiCircleInfo contextCls={`${calloutBannerCls}__icon`} />
            </div>
            <div className={`${calloutBannerCls}__text-container`}>
                {title && (
                    <div className={`${calloutBannerCls}__title-container`}>
                        <Heading
                            contextCls={`${calloutBannerCls}__title`}
                            headingLvl={headingLvl}
                        >
                            {title}
                        </Heading>
                    </div>
                )}
                {(children || msg) && (
                    <div className={`${calloutBannerCls}__msg-container`}>
                        <div
                            className={`${calloutBannerCls}__msg-container-inner`}
                        >
                            {children || msg}
                        </div>
                    </div>
                )}
            </div>
        </CalloutBanner>
    );
};

CalloutBannerInfo.defaultProps = {
    headingLvl: 3,
};

CalloutBannerInfo.propTypes = {
    contextCls: PropTypes.string,
    headingLvl: PropTypes.number,
    msg: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default CalloutBannerInfo;
