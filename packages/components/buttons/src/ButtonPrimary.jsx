import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from './Button';

// Constants
import { BUTTON_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/button-primary.scss';
import './styles/button-primary-destructive.scss';

const ButtonPrimary = (props) => {
    const { contextCls, isDestructive, ...rest } = props;
    const baseCls = {
        [`${BUTTON_BASE_CLS}--primary`]: !isDestructive,
        [`${BUTTON_BASE_CLS}--primary-destructive`]: isDestructive,
    };

    return <Button {...rest} contextCls={cx(baseCls, contextCls)} />;
};

ButtonPrimary.propTypes = {
    contextCls: PropTypes.string,
    isDestructive: PropTypes.bool,
};

export default ButtonPrimary;
