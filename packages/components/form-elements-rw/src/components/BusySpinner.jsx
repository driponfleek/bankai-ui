import { BankaiSpinner } from '@driponfleek/bankai-ui-icons';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to derive the spinner icon class
 */
const BusySpinner = (props) => {
    const { baseCls } = props;

    return <BankaiSpinner contextCls={`${baseCls}__busy-icon`} />;
};

export default BusySpinner;
