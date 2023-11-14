import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/form-layout.scss';

const FormLayout = (props) => {
    const { contextCls, children } = props;
    const baseCls = 'bankai-form-layout';

    return <div className={cx(baseCls, contextCls)}>{children}</div>;
};

FormLayout.propTypes = {
    contextCls: PropTypes.string,
};

export default FormLayout;
