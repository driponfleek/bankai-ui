import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiSpinner } from '@driponfleek/bankai-ui-icons';
import ButtonMain from './components/ButtonMain';

// Utils
import { getBtnStateModCls, getBtnExtantProps } from './utils/buttonUtils';

// Constants
import { BUTTON_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/button.scss';

const Button = (props) => {
    const {
        contextCls,
        type = 'button',
        text,
        isBusy = false,
        isDisabled = false,
        isDynamicText = false,
        data,
        onBlur = Button.onBlur,
        onClick = Button.onClick,
        onFocus = Button.onFocus,
        renderBusyIcon = BankaiSpinner,
        renderIcon,
        children,
    } = props;
    const baseCls = BUTTON_BASE_CLS;
    const btnProps = getBtnExtantProps(props);
    const modCls = {
        ...getBtnStateModCls({ isDisabled, isBusy }, baseCls),
    };
    const evtHandler = (propHandler) => (e) => {
        if (!isBusy && !isDisabled) {
            propHandler({ e, ...(data && { data }) });
        }
    };
    const handleClick = evtHandler(onClick);
    const handleBlur = evtHandler(onBlur);
    const handleFocus = evtHandler(onFocus);

    return (
        <button
            {...btnProps}
            className={cx(baseCls, modCls, contextCls)}
            // Disabling react/button-has-type due to
            // https://github.com/yannickcr/eslint-plugin-react/issues/1555
            // eslint-disable-next-line react/button-has-type
            type={type}
            onClick={handleClick}
            onBlur={handleBlur}
            onFocus={handleFocus}
        >
            <ButtonMain
                baseCls={baseCls}
                text={text}
                renderBusyIcon={renderBusyIcon}
                renderIcon={renderIcon}
                isBusy={isBusy}
                isDynamicText={isDynamicText}
            >
                {children}
            </ButtonMain>
        </button>
    );
};

Button.onBlur = () => Promise.resolve();
Button.onClick = () => Promise.resolve();
Button.onFocus = () => Promise.resolve();

Button.propTypes = {
    'aria-label': PropTypes.string,
    contextCls: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    type: PropTypes.oneOf(['button', 'submit']),
    variant: PropTypes.string,
    isDynamicText: PropTypes.bool,
    isBusy: PropTypes.bool,
    isDisabled: PropTypes.bool,
    data: PropTypes.object,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    renderBusyIcon: PropTypes.func,
    renderIcon: PropTypes.func,
};

export default Button;
