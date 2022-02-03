import React from 'react';
import PropTypes from 'prop-types';
import { CalloutMemo, VARIANTS } from '@epr0t0type/bankai-ui-callouts';
import { BankaiCircleInfo } from '@epr0t0type/bankai-ui-icons';

const { INFO } = VARIANTS;

const CalloutMemoInfo = (props) => {
    const { contextCls, title, msg, children } = props;
    const calloutMemoCls = 'bankai-callout-memo';

    return (
        <CalloutMemo contextCls={contextCls} variant={INFO}>
            <div className={`${calloutMemoCls}__icon-container`}>
                <BankaiCircleInfo contextCls={`${calloutMemoCls}__icon`} />
            </div>
            <div className={`${calloutMemoCls}__text-container`}>
                {title && (
                    <div className={`${calloutMemoCls}__title-container`}>
                        <p className={`${calloutMemoCls}__title`}>{title}</p>
                    </div>
                )}
                {(msg || children) && (
                    <div className={`${calloutMemoCls}__msg-container`}>
                        {!children && (
                            <p className={`${calloutMemoCls}__msg`}>{msg}</p>
                        )}
                        {children}
                    </div>
                )}
            </div>
        </CalloutMemo>
    );
};

CalloutMemoInfo.propTypes = {
    contextCls: PropTypes.string,
    title: PropTypes.string,
    msg: PropTypes.string,
};

export default CalloutMemoInfo;
