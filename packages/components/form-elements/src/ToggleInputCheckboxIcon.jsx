import cx from 'classnames';
import { BankaiCheck } from '@driponfleek/bankai-ui-icons';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to derive the icon class
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the icon
 */
const ToggleInputCheckboxIcon = (props) => {
    const { baseCls, contextCls } = props;
    const iconBaseCls = `${baseCls}__icon`;

    return <BankaiCheck className={cx(iconBaseCls, contextCls)} />;
};

export default ToggleInputCheckboxIcon;
