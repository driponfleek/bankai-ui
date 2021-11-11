import React from 'react';
import PropTypes from 'prop-types';
// import cx from 'classnames';
import { Button } from '@epr0t0type/bankai-ui-buttons';
import { BankaiX } from '@epr0t0type/bankai-ui-icons';

// Constants
import baseCls from '../const/cssBaseClassConst';

const renderCloseButtonIcon = () => {
    return <BankaiX contextCls={`${baseCls}__close-btn-icon`} />;
};

const CloseButton = ({ closeToast, closeBtnARIALabel }) => {
    return (
        <Button
            contextCls={`${baseCls}__close-btn`}
            aria-label={closeBtnARIALabel}
            renderIcon={renderCloseButtonIcon}
            onClick={closeToast}
        />
    );
};

CloseButton.defaultProps = {
    closeToast: () => Promise.resolve(),
};

CloseButton.propTypes = {
    closeToast: PropTypes.func,
    closeBtnARIALabel: PropTypes.string.isRequired,
};

export default CloseButton;
