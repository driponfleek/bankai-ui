import PropTypes from 'prop-types';
import cx from 'classnames';

const FormLayoutActionsContainer = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-form-layout-actions-container';

    return <div className={cx(baseCls, contextCls)}>{children}</div>;
};

FormLayoutActionsContainer.propTypes = {
    contextCls: PropTypes.string,
};

export default FormLayoutActionsContainer;
