import cx from 'classnames';
import { BankaiCaretDown } from '@driponfleek/bankai-ui-icons';
import Button from './Button';
import MenuButton from './MenuButton';
import { getSplitBtnSanatizedProps } from './utils/buttonUtils';

// Constants
import { BUTTON_SPLIT_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/split-button.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {boolean} [props.isDisabled] - Whether the split button is disabled
 * @param {Array} [props.menuOptions] - Array of option data objects rendered in the menu
 * @param {Object} [props.mainButtonProps] - Props forwarded to the main button
 * @param {Object} [props.menuButtonProps] - Props forwarded to the menu button; must include a required `aria-label` string
 * @param {Function} [props.onMainClick] - Callback fired when the main button is clicked
 * @param {Function} [props.onMenuSelection] - Callback fired when a menu option is selected
 * @param {Function} [props.renderMainButton] - Custom render function for the main button
 * @param {Function} [props.renderMenuButton] - Custom render function for the menu button
 * @param {Function} [props.renderMenuButtonIcon] - Custom render function for the menu button's dropdown icon
 */
const SplitButton = (props) => {
    const {
        contextCls,
        isDisabled = false,
        menuOptions = [],
        onMainClick = SplitButton.onMainClick,
        onMenuSelection = SplitButton.onMenuSelection,
        renderMainButton = Button,
        renderMenuButton = MenuButton,
        renderMenuButtonIcon = BankaiCaretDown,
    } = props;
    const baseCls = BUTTON_SPLIT_BASE_CLS;
    const modCls = {
        [`${baseCls}--disabled`]: isDisabled,
    };
    const { mainButtonProps, menuButtonProps } = getSplitBtnSanatizedProps(
        props,
        baseCls,
    );

    return (
        <div className={cx(baseCls, modCls, contextCls)}>
            <div className={`${baseCls}__inner`}>
                <div className={`${baseCls}__main-btn-container`}>
                    {renderMainButton({
                        ...mainButtonProps,
                        onClick: onMainClick,
                    })}
                </div>
                <div className={`${baseCls}__menu-btn-container`}>
                    {renderMenuButton({
                        ...menuButtonProps,
                        menuOptions,
                        onSelection: onMenuSelection,
                        renderIcon: renderMenuButtonIcon,
                    })}
                </div>
            </div>
        </div>
    );
};

SplitButton.onMainClick = () => Promise.resolve();
SplitButton.onMenuSelection = () => Promise.resolve();

export default SplitButton;
