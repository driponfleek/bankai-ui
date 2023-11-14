import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiCheck } from '@driponfleek/bankai-ui-icons';

const ToggleInputCheckboxIcon = (props) => {
    const { baseCls, contextCls } = props;
    const iconBaseCls = `${baseCls}__icon`;

    return <BankaiCheck className={cx(iconBaseCls, contextCls)} />;
};

ToggleInputCheckboxIcon.propTypes = {
    baseCls: PropTypes.string,
    contextCls: PropTypes.string,
};

export default ToggleInputCheckboxIcon;
