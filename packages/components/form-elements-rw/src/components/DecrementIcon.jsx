import { BankaiChevronDown } from '@driponfleek/bankai-ui-icons';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to derive the icon class
 */
const DecrementIcon = (props) => {
    const { baseCls } = props;

    return <BankaiChevronDown contextCls={`${baseCls}__decrement-icon`} />;
};

export default DecrementIcon;
