import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiCaretDown } from '@driponfleek/bankai-ui-icons';
import Button from './Button';
import MenuButton from './MenuButton';
import { getSplitBtnSanatizedProps } from './utils/buttonUtils';

// Constants
import { BUTTON_SPLIT_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/split-button.scss';

const SplitButton = (props) => {
    const {
        contextCls,
        isDisabled,
        onMainClick,
        onMenuSelection,
        renderMainButton,
        renderMenuButton,
        renderMenuButtonIcon,
        menuOptions,
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

SplitButton.defaultProps = {
    isDisabled: false,
    menuOptions: [],
    mainButtonProps: {},
    menuButtonProps: {},
    onMainClick: () => Promise.resolve(),
    onMenuSelection: () => Promise.resolve(),
    renderMainButton: (props) => <Button {...props} />,
    renderMenuButton: (props) => <MenuButton {...props} />,
    renderMenuButtonIcon: BankaiCaretDown,
};

SplitButton.propTypes = {
    contextCls: PropTypes.string,
    isDisabled: PropTypes.bool,
    menuOptions: PropTypes.array,
    mainButtonProps: PropTypes.shape({
        isDisabled: PropTypes.bool,
        onClick: PropTypes.func,
    }),
    menuButtonProps: PropTypes.shape({
        'aria-label': PropTypes.string.isRequired,
        isDisabled: PropTypes.bool,
    }),
    onMainClick: PropTypes.func,
    onMenuSelection: PropTypes.func,
    renderMainButton: PropTypes.func,
    renderMenuButton: PropTypes.func,
    renderMenuButtonIcon: PropTypes.func,
};

export default SplitButton;
