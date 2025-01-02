import PropTypes from 'prop-types';
import cx from 'classnames';

const FormLayoutFieldContainer = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-form-layout-field-container';

    return <div className={cx(baseCls, contextCls)}>{children}</div>;
};

FormLayoutFieldContainer.propTypes = {
    contextCls: PropTypes.string,
};

export default FormLayoutFieldContainer;
