import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/form-layout.scss';

const FormLayout = (props) => {
    const { contextCls, shouldPadContent, children } = props;
    const baseCls = 'bankai-form-layout';
    const modCls = {
        [`${baseCls}--pad-content`]: shouldPadContent,
    };

    return <div className={cx(baseCls, modCls, contextCls)}>{children}</div>;
};

FormLayout.defaultProps = {
    shouldPadContent: true,
};

FormLayout.propTypes = {
    contextCls: PropTypes.string,
    shouldPadContent: PropTypes.bool,
};

export default FormLayout;
