import cx from 'classnames';
import Button from './Button';

// Constants
import { BUTTON_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/button-primary.scss';
import './styles/button-primary-destructive.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {boolean} [props.isDestructive] - Whether to render the destructive variant of the button
 */
const ButtonPrimary = (props) => {
    const { contextCls, isDestructive, ...rest } = props;
    const baseCls = {
        [`${BUTTON_BASE_CLS}--primary`]: !isDestructive,
        [`${BUTTON_BASE_CLS}--primary-destructive`]: isDestructive,
    };

    return <Button {...rest} contextCls={cx(baseCls, contextCls)} />;
};

export default ButtonPrimary;
