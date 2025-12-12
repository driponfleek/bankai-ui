import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonSecondary from './ButtonSecondary';
import MenuButtonSecondary from './MenuButtonSecondary';
import SplitButton from './SplitButton';

// Constants
import { BUTTON_SPLIT_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/split-button.scss';

const SplitButtonSecondary = (props) => {
    const {
        contextCls,
        renderMainButton = ButtonSecondary,
        renderMenuButton = MenuButtonSecondary,
        ...rest
    } = props;
    const baseCls = `${BUTTON_SPLIT_BASE_CLS}--secondary`;

    return (
        <SplitButton
            {...rest}
            contextCls={cx(baseCls, contextCls)}
            renderMainButton={renderMainButton}
            renderMenuButton={renderMenuButton}
        />
    );
};

SplitButtonSecondary.propTypes = {
    contextCls: PropTypes.string,
    renderMainButton: PropTypes.func,
    renderMenuButton: PropTypes.func,
};

export default SplitButtonSecondary;
