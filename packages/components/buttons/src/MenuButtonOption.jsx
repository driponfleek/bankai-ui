import PropTypes from 'prop-types';
import cx from 'classnames';
import { MenuItem } from 'react-aria-menubutton';
import MainContent from './components/MainContent';

// Styles
import './styles/menu-button-option.scss';

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

MenuButtonOption.propTypes = {
    contextCls: PropTypes.string,
    text: PropTypes.string,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    renderIcon: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
};

export default MenuButtonOption;
