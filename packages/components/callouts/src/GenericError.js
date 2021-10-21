import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiTriangleAlert } from '@epr0t0type/bankai-ui-icons';
import Callout from './Callout';

import './styles/generic-error.scss';

const renderErrorIcon = (iconCls) => (
    <BankaiTriangleAlert contextCls={iconCls} />
);

const GenericError = (props) => {
    const { contextCls, renderIcon } = props;
    const baseCls = 'bankai-generic-error';

    return (
        <Callout
            {...props}
            renderIcon={renderIcon || renderErrorIcon}
            contextCls={cx(baseCls, contextCls)}
        />
    );
};

GenericError.propTypes = {
    contextCls: PropTypes.string,
    title: PropTypes.string,
    msg: PropTypes.string,
    renderIcon: PropTypes.func,
};

export default GenericError;
