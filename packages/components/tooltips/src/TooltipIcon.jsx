import cx from 'classnames';
import { BankaiCircleQuestion } from '@driponfleek/bankai-ui-icons';

// Styles
import './styles/tooltip-icon.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the icon
 * @param {Function} [props.renderIcon] - Custom render function for the icon; defaults to a question circle icon
 */
const TooltipIcon = (props) => {
    const { contextCls, renderIcon = BankaiCircleQuestion } = props;
    const baseCls = 'bankai-tooltip-icon';

    return renderIcon({ contextCls: cx(baseCls, contextCls) });
};

export default TooltipIcon;
