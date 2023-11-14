import PropTypes from 'prop-types';
import cx from 'classnames';
import { Tab as ARIATab } from 'react-aria-tabpanel';

// Styles
import './styles/tab.scss';

const Tab = (props) => {
    const {
        contextCls,
        id,
        letterNavigationText,
        isActive,
        isVertical,
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

Tab.defaultProps = {
    isActive: false,
    isVertical: false,
};

Tab.propTypes = {
    contextCls: PropTypes.string,
    id: PropTypes.string.isRequired,
    letterNavigationText: PropTypes.string,
    text: PropTypes.string,
    isActive: PropTypes.bool,
    isVertical: PropTypes.bool,
    renderIcon: PropTypes.func,
};

export default Tab;
