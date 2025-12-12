import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiCircleQuestion } from '@driponfleek/bankai-ui-icons';

// Styles
import './styles/tooltip-icon.scss';

const TooltipIcon = (props) => {
    const { contextCls, renderIcon = BankaiCircleQuestion } = props;
    const baseCls = 'bankai-tooltip-icon';

    return renderIcon({ contextCls: cx(baseCls, contextCls) });
};

TooltipIcon.propTypes = {
    contextCls: PropTypes.string,
    renderIcon: PropTypes.func,
};

export default TooltipIcon;
