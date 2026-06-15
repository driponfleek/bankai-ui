import {
    FormLayout,
    FormLayoutSection,
    DynamicFormRow,
} from '@driponfleek/bankai-ui-layouts';
import { StorySection } from '@driponfleek/bankai-lib-storybook';
import ColorPickerField from '../../../../../sb-components/form-elements/ColorPickerField';
import ToggleSwitchField from '../../../../../sb-components/form-elements/ToggleSwitchField';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base BEM class applied to the settings form row container
 * @param {string} [props.sourceColor] - Current source color value for the color picker
 * @param {boolean} [props.shouldShowMaxVariants] - Whether the "Show Max Variants?" toggle is checked
 * @param {Function} [props.onColorChange] - Called when the color picker value changes
 * @param {Function} [props.onToggleChange] - Called when the toggle switch value changes
 */
const SectionForm = (props) => {
    const {
        baseCls,
        sourceColor,
        shouldShowMaxVariants = true,
        onColorChange = SectionForm.onColorChange,
        onToggleChange = SectionForm.onToggleChange,
    } = props;

    return (
        <StorySection>
            <FormLayout>
                <FormLayoutSection>
                    <DynamicFormRow
                        contextCls={`${baseCls}__settings-container`}
                    >
                        <ColorPickerField
                            value={sourceColor}
                            color={sourceColor}
                            labelProps={{ content: 'Source Color' }}
                            onChange={onColorChange}
                            isLeftAlignedLabel
                        />
                        <ToggleSwitchField
                            isChecked={shouldShowMaxVariants}
                            labelProps={{ content: 'Show Max Variants?' }}
                            onChange={onToggleChange}
                        />
                    </DynamicFormRow>
                </FormLayoutSection>
            </FormLayout>
        </StorySection>
    );
};

SectionForm.onColorChange = () => Promise.resolve();
SectionForm.onToggleChange = () => Promise.resolve();

export default SectionForm;
