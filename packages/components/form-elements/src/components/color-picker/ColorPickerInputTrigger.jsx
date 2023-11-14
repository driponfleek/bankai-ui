import PropTypes from 'prop-types';
import ColorPickerInputTriggerContent from './ColorPickerInputTriggerContent';

import { getColorPickerInputTriggerExtantProps } from '../../utils/colorPickerUtils';

const ColorPickerInputTrigger = (props) => {
    const { baseCls, isReadOnly, renderTriggerContent } = props;
    const triggerProps = getColorPickerInputTriggerExtantProps(props);
    const Trigger = isReadOnly ? 'span' : 'button';

    return (
        <Trigger {...triggerProps} className={`${baseCls}__trigger`}>
            {renderTriggerContent(props)}
        </Trigger>
    );
};

ColorPickerInputTrigger.defaultProps = {
    isDisabled: false,
    isReadOnly: false,
    onClick: () => Promise.resolve(),
    renderTriggerContent: ColorPickerInputTriggerContent,
};

ColorPickerInputTrigger.propTypes = {
    baseCls: PropTypes.string,
    isDisabled: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    triggerProps: PropTypes.shape({
        'aria-label': PropTypes.string,
    }),
    onClick: PropTypes.func,
    renderTriggerContent: PropTypes.func,
};

export default ColorPickerInputTrigger;
