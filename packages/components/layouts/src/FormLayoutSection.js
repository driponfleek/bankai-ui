import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/form-layout-section.scss';

const FormLayoutSection = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-form-layout-section';

    return (
        <div className={cx(baseCls, contextCls)}>
            <div className={`${baseCls}__content-container`}>{children}</div>
        </div>
    );
};

FormLayoutSection.propTypes = {
    contextCls: PropTypes.string,
};

export default FormLayoutSection;
