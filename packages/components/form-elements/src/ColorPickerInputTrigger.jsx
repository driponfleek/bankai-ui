import ColorPickerInputTriggerContent from './ColorPickerInputTriggerContent';

import { getColorPickerInputTriggerExtantProps } from './utils/colorPickerUtils';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name passed from the parent component
 * @param {boolean} [props.isDisabled] - Whether the trigger is disabled
 * @param {boolean} [props.isReadOnly] - Whether to render as a non-interactive span instead of a button
 * @param {Object} [props.triggerProps] - Additional props for the trigger element (supports `aria-label`)
 * @param {Function} [props.onClick] - Click handler for the trigger button
 * @param {Function} [props.renderTriggerContent] - Custom render function for the trigger content
 */
const ColorPickerInputTrigger = (props) => {
    const {
        baseCls,
        isReadOnly,
        renderTriggerContent = ColorPickerInputTriggerContent,
    } = props;
    const triggerProps = getColorPickerInputTriggerExtantProps(props);
    const Trigger = isReadOnly ? 'span' : 'button';

    return (
        <Trigger {...triggerProps} className={`${baseCls}__trigger`}>
            {renderTriggerContent(props)}
        </Trigger>
    );
};

export default ColorPickerInputTrigger;
