import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonIcon from './ButtonIcon';
import ButtonText from './ButtonText';

// Utils
import { getShouldRenderBtnIcon } from '../utils/buttonUtils';

const ButtonMain = (props) => {
    const {
        baseCls,
        contextCls,
        text,
        renderBusyIcon,
        renderIcon,
        isBusy,
        isDynamicText,
        children,
    } = props;
    const shouldRenderBtnIcon = getShouldRenderBtnIcon(props);
    const ariaProps = { ...(isDynamicText && { 'aria-live': 'polite' }) };

    return (
        <span
            {...ariaProps}
            className={cx(`${baseCls}__content-container`, contextCls)}
        >
            {!children && (
                <>
                    {shouldRenderBtnIcon && (
                        <ButtonIcon baseCls={baseCls} renderIcon={renderIcon} />
                    )}
                    {isBusy && (
                        <ButtonIcon
                            baseCls={baseCls}
                            renderIcon={renderBusyIcon}
                        />
                    )}
                    {!!text && (
                        <ButtonText baseCls={baseCls}>{text}</ButtonText>
                    )}
                </>
            )}
            {children}
        </span>
    );
};

ButtonMain.defaultProps = {
    isBusy: false,
    isDynamicText: false,
};

ButtonMain.propTypes = {
    baseCls: PropTypes.string.isRequired,
    contextCls: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    isBusy: PropTypes.bool,
    isDynamicText: PropTypes.bool,
    renderBusyIcon: PropTypes.func,
    renderIcon: PropTypes.func,
};

export default ButtonMain;
