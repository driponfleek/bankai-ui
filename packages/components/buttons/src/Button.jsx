import cx from 'classnames';
import { BankaiSpinner } from '@driponfleek/bankai-ui-icons';
import ButtonMain from './components/ButtonMain';

// Utils
import { getBtnStateModCls, getBtnExtantProps } from './utils/buttonUtils';

// Constants
import { BUTTON_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/button.scss';

/**
 * @param {Object} props
 * @param {string} [props['aria-label']] - Accessible label for the button when visible text is absent
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string|React.ReactElement} [props.text] - Text label for the button
 * @param {'button'|'submit'} [props.type] - HTML button type attribute
 * @param {string} [props.variant] - Visual variant identifier
 * @param {boolean} [props.isDynamicText] - Whether to announce text changes to screen readers via aria-live
 * @param {boolean} [props.isBusy] - Whether the button is in a busy/loading state
 * @param {boolean} [props.isDisabled] - Whether the button is disabled
 * @param {Object} [props.data] - Arbitrary data passed to event handler callbacks
 * @param {Function} [props.onClick] - Callback fired on button click
 * @param {Function} [props.onBlur] - Callback fired on button blur
 * @param {Function} [props.onFocus] - Callback fired on button focus
 * @param {Function} [props.renderBusyIcon] - Render function for the busy/loading icon
 * @param {Function} [props.renderIcon] - Render function for the button icon
 */
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

export default Button;
