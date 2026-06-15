import cx from 'classnames';
import ButtonIcon from './ButtonIcon';
import ButtonText from './ButtonText';

// Utils
import { getShouldRenderBtnIcon } from '../utils/buttonUtils';

/**
 * @param {Object} props
 * @param {string} props.baseCls - Base CSS class name used to construct BEM modifier and element classes
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string|React.ReactElement} [props.text] - Text label for the button
 * @param {boolean} [props.isBusy] - Whether the button is in a busy/loading state
 * @param {boolean} [props.isDynamicText] - Whether to announce text changes to screen readers via aria-live
 * @param {Function} [props.renderBusyIcon] - Render function for the busy/loading state icon
 * @param {Function} [props.renderIcon] - Render function for the button icon
 */
const ButtonMain = (props) => {
    const {
        baseCls,
        contextCls,
        text,
        renderBusyIcon,
        renderIcon,
        isBusy = false,
        isDynamicText = false,
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

export default ButtonMain;
