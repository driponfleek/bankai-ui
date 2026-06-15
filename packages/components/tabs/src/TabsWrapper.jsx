import cx from 'classnames';
import { Wrapper as ARIATabWrapper } from 'react-aria-tabpanel';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.activeTabId] - ID of the currently active tab
 * @param {boolean} [props.shouldAllowLetterNavigation] - Whether to enable keyboard letter navigation between tabs
 * @param {Function} [props.onChange] - Callback fired when the active tab changes
 */
const TabsWrapper = (props) => {
    const {
        contextCls,
        activeTabId,
        shouldAllowLetterNavigation,
        onChange = TabsWrapper.onChange,
        children,
        ...rest
    } = props;
    const baseCls = 'bankai-tabs-wrapper';

    return (
        <ARIATabWrapper
            {...rest}
            className={cx(baseCls, contextCls)}
            activeTabId={activeTabId}
            letterNavigation={shouldAllowLetterNavigation}
            onChange={onChange}
        >
            {children}
        </ARIATabWrapper>
    );
};

TabsWrapper.onChange = () => Promise.resolve();

export default TabsWrapper;
