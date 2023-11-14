import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonPrimary from './ButtonPrimary';
import MenuButtonPrimary from './MenuButtonPrimary';
import SplitButton from './SplitButton';

// Constants
import { BUTTON_SPLIT_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/split-button.scss';

const SplitButtonPrimary = (props) => {
    const { contextCls, renderMainButton, renderMenuButton, ...rest } = props;
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

SplitButtonPrimary.defaultProps = {
    renderMainButton: (props) => <ButtonPrimary {...props} />,
    renderMenuButton: (props) => <MenuButtonPrimary {...props} />,
};

SplitButtonPrimary.propTypes = {
    contextCls: PropTypes.string,
    renderMainButton: PropTypes.func,
    renderMenuButton: PropTypes.func,
};

export default SplitButtonPrimary;
