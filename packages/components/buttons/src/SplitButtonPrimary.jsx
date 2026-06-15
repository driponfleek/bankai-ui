import cx from 'classnames';
import ButtonPrimary from './ButtonPrimary';
import MenuButtonPrimary from './MenuButtonPrimary';
import SplitButton from './SplitButton';

// Constants
import { BUTTON_SPLIT_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/split-button.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {Function} [props.renderMainButton] - Custom render function for the main button
 * @param {Function} [props.renderMenuButton] - Custom render function for the menu button
 */
const SplitButtonPrimary = (props) => {
    const {
        contextCls,
        renderMainButton = ButtonPrimary,
        renderMenuButton = MenuButtonPrimary,
        ...rest
    } = props;
    const baseCls = `${BUTTON_SPLIT_BASE_CLS}--primary`;

    return (
        <SplitButton
            {...rest}
            contextCls={cx(baseCls, contextCls)}
            renderMainButton={renderMainButton}
            renderMenuButton={renderMenuButton}
        />
    );
};

export default SplitButtonPrimary;
