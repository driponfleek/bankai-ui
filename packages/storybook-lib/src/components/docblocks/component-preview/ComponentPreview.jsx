import cx from 'classnames';
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/component-preview.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {boolean} [props.shouldCheckA11Y] - Applies a modifier class for a11y checking
 * @param {boolean} [props.hasLightBg] - Applies a light background modifier class
 */
const ComponentPreview = (props) => {
    const {
        contextCls,
        children,
        shouldCheckA11Y = false,
        hasLightBg = false,
        ...rest
    } = props;
    const baseCls = genSBBaseCls('component-preview');
    const modCls = {
        [`${baseCls}--check-a11y`]: shouldCheckA11Y,
        [`${baseCls}--light-bg`]: hasLightBg,
    };

    return (
        <div {...rest} className={cx(baseCls, modCls, contextCls)}>
            {children}
        </div>
    );
};

export default ComponentPreview;
