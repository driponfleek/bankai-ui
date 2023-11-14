import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiCheck } from '@driponfleek/bankai-ui-icons';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/icon-list-item.scss';

const IconListItem = (props) => {
    const { hasCopiedToClipboard, contextCls, locale, name, Icon, onClick } =
        props;
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

IconListItem.defaultProps = {
    hasCopiedToClipboard: false,
    locale: {},
    onClick: () => Promise.resolve(),
};

IconListItem.propTypes = {
    contextCls: PropTypes.string,
    name: PropTypes.string,
    hasCopiedToClipboard: PropTypes.bool,
    Icon: PropTypes.func,
    locale: PropTypes.shape({
        copyText: PropTypes.string,
        copiedText: PropTypes.string,
    }),
    onClick: PropTypes.func,
};

export default IconListItem;
