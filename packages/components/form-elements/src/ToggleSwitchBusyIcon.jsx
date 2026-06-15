import cx from 'classnames';
import { BankaiSpinner } from '@driponfleek/bankai-ui-icons';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the spinner icon
 */
const ToggleSwitchBusyIcon = (props) => {
    const { contextCls } = props;

    return <BankaiSpinner contextCls={cx(contextCls)} />;
};

export default ToggleSwitchBusyIcon;
