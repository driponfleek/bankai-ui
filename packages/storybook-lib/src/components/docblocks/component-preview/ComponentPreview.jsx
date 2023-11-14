import PropTypes from 'prop-types';
import cx from 'classnames';
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

// Styles
import './styles/component-preview.scss';

const ComponentPreview = (props) => {
    const { contextCls, children, shouldCheckA11Y, hasLightBg, ...rest } =
        props;
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

ComponentPreview.defaultProps = {
    shouldCheckA11Y: false,
    hasLightBg: false,
};

ComponentPreview.propTypes = {
    contextCls: PropTypes.string,
    shouldCheckA11Y: PropTypes.bool,
    hasLightBg: PropTypes.bool,
};

export default ComponentPreview;
