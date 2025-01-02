import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from './Button';

// Constants
import { BUTTON_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/button-secondary.scss';

const ButtonSecondary = (props) => {
    const { contextCls, isDestructive, ...rest } = props;
    const baseCls = {
        [`${BUTTON_BASE_CLS}--secondary`]: !isDestructive,
        [`${BUTTON_BASE_CLS}--secondary-destructive`]: isDestructive,
    };

    return <Button {...rest} contextCls={cx(baseCls, contextCls)} />;
};

ButtonSecondary.propTypes = {
    contextCls: PropTypes.string,
    isDestructive: PropTypes.bool,
};

export default ButtonSecondary;
