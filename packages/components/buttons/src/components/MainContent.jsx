import cx from 'classnames';
import ButtonIcon from './ButtonIcon';
import ButtonText from './ButtonText';

/**
 * @param {Object} props
 * @param {string} props.baseCls - Base CSS class name used to construct BEM modifier and element classes
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string|React.ReactElement} [props.text] - Text label for the button
 * @param {Function} [props.renderIcon] - Render function for the button icon
 */
const MainContent = (props) => {
    const { baseCls, contextCls, text, renderIcon, children } = props;

    return (
        <span className={cx(`${baseCls}__content-container`, contextCls)}>
            {!children && (
                <>
                    {!!renderIcon && (
                        <ButtonIcon baseCls={baseCls} renderIcon={renderIcon} />
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

export default MainContent;
