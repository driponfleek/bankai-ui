import PropTypes from 'prop-types';
import cx from 'classnames';
import { Wrapper as ARIATabWrapper } from 'react-aria-tabpanel';

const TabsWrapper = (props) => {
    const {
        contextCls,
        activeTabId,
        shouldAllowLetterNavigation,
        onChange,
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

TabsWrapper.defaultProps = {
    onChange: () => Promise.resolve(),
};

TabsWrapper.propTypes = {
    contextCls: PropTypes.string,
    activeTabId: PropTypes.string,
    shouldAllowLetterNavigation: PropTypes.bool,
    onChange: PropTypes.func,
};

export default TabsWrapper;
