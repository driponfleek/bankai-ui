import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/form-label-subtext.scss';

const FormLabelSubtext = (props) => {
    const { contextCls, subtext, ...rest } = props;
    const baseCls = 'bankai-form-label-subtext';

    return (
        <p {...rest} className={cx(baseCls, contextCls)}>
            {subtext}
        </p>
    );
};

FormLabelSubtext.propTypes = {
    contextCls: PropTypes.string,
    subtext: PropTypes.string,
};

export default FormLabelSubtext;
