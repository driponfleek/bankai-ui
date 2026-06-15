import { BankaiX } from '@driponfleek/bankai-ui-icons';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to derive the icon class
 */
const ClearTagIcon = (props) => {
    const { baseCls } = props;

    return <BankaiX contextCls={`${baseCls}__clear-tag-icon`} />;
};

export default ClearTagIcon;
