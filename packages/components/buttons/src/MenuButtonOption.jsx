import cx from 'classnames';
import { MenuItem } from 'react-aria-menubutton';
import MainContent from './components/MainContent';

// Styles
import './styles/menu-button-option.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.text] - Text label for the option
 * @param {boolean} [props.isDestructive] - Whether to render the option with destructive styling
 * @param {boolean} [props.isDisabled] - Whether the option is disabled
 * @param {Function} [props.renderIcon] - Render function for the option icon
 * @param {*} [props.value] - Value passed to the selection callback when this option is chosen
 */
const MenuButtonOption = (props) => {
    const {
        contextCls,
        text,
        isDestructive,
        isDisabled,
        value,
        renderIcon,
        children,
        ...rest
    } = props;
    const baseCls = 'bankai-menu-button-option';
    const modCls = {
        [`${baseCls}--destructive`]: isDestructive,
    };

    return (
        <MenuItem
            {...rest}
            className={cx(baseCls, modCls, contextCls)}
            tag="button"
            text={text}
            value={value}
            disabled={isDisabled}
        >
            <MainContent baseCls={baseCls} text={text} renderIcon={renderIcon}>
                {children}
            </MainContent>
            {children}
        </MenuItem>
    );
};

export default MenuButtonOption;
