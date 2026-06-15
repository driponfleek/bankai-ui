import cx from 'classnames';
import { Tab as ARIATab } from 'react-aria-tabpanel';

// Styles
import './styles/tab.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} props.id - Unique identifier for the tab, used to associate it with its panel
 * @param {string} [props.letterNavigationText] - Text used for keyboard letter navigation
 * @param {string} [props.text] - Display text for the tab
 * @param {boolean} [props.isActive] - Whether this tab is currently active
 * @param {boolean} [props.isVertical] - Whether the tab is rendered in a vertical tabs layout
 * @param {Function} [props.renderIcon] - Custom render function for the tab icon
 */
const Tab = (props) => {
    const {
        contextCls,
        id,
        letterNavigationText,
        isActive = false,
        isVertical = false,
        children,
        renderIcon,
        text,
        ...rest
    } = props;
    const baseCls = 'bankai-tab';
    const modCls = {
        [`${baseCls}--is-active`]: isActive,
        [`${baseCls}--is-vertical`]: isVertical,
    };

    return (
        <ARIATab
            {...rest}
            className={cx(baseCls, modCls, contextCls)}
            id={id}
            letterNavigationText={letterNavigationText}
            active={isActive}
        >
            {!children && (
                <div className={`${baseCls}__content`}>
                    <div className={`${baseCls}__content-inner`}>
                        {!!renderIcon && (
                            <span className={`${baseCls}__icon-container`}>
                                <span className={`${baseCls}__icon-safe-space`}>
                                    {renderIcon({
                                        contextCls: `${baseCls}__icon`,
                                    })}
                                </span>
                            </span>
                        )}
                        {!!text && (
                            <span className={`${baseCls}__text-container`}>
                                <span className={`${baseCls}__text`}>
                                    {text}
                                </span>
                            </span>
                        )}
                    </div>
                </div>
            )}
            {children}
        </ARIATab>
    );
};

export default Tab;
