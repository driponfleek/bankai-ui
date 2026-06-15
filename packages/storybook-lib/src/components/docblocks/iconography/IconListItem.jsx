import cx from 'classnames';
import { BankaiCheck } from '@driponfleek/bankai-ui-icons';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/icon-list-item.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.name] - Icon name displayed as the button label
 * @param {boolean} [props.hasCopiedToClipboard] - Shows a checkmark icon and the copiedText label when true
 * @param {Function} [props.Icon] - Icon component to render
 * @param {Object} [props.locale] - Localization strings
 * @param {Function} [props.onClick] - Callback invoked with the icon name when the button is clicked
 */
const IconListItem = (props) => {
    const {
        hasCopiedToClipboard = false,
        contextCls,
        locale = {},
        name,
        Icon,
        onClick = IconListItem.onClick,
    } = props;
    const { copyText, copiedText } = locale;
    const baseCls = genSBBaseCls('icons-list__item');
    const modCls = {
        [`${baseCls}--copied`]: hasCopiedToClipboard,
    };
    const IconComp = hasCopiedToClipboard ? BankaiCheck : Icon;
    const text = hasCopiedToClipboard ? copiedText : name;
    const handleClick = () => {
        onClick(name);
    };

    return (
        <button
            className={cx(baseCls, modCls, contextCls)}
            type="button"
            title={copyText}
            onClick={handleClick}
        >
            <span className={`${baseCls}-inner`}>
                <span className={`${baseCls}-icon-container`}>
                    <span className={`${baseCls}-icon-safe-area`}>
                        <span className={`${baseCls}-icon`}>
                            <IconComp />
                        </span>
                    </span>
                </span>
                <span className={`${baseCls}-text-container`}>
                    <span className={`${baseCls}-text`}>{text}</span>
                </span>
            </span>
        </button>
    );
};

IconListItem.onClick = () => Promise.resolve();

export default IconListItem;
