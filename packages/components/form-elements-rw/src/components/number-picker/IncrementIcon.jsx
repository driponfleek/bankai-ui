import { BankaiChevronUp } from '@driponfleek/bankai-ui-icons';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to derive the icon class
 */
const IncrementIcon = (props) => {
    const { baseCls } = props;

    return <BankaiChevronUp contextCls={`${baseCls}__increment-icon`} />;
};

export default IncrementIcon;
