import PropTypes from 'prop-types';
import {
    ColorPickerInput,
    FormFieldComposer,
    IFTALFormFieldComposer,
    ToggleSwitch,
    FORM_FIELD_COMP_VARIANTS,
} from '@driponfleek/bankai-ui-form-elements';
import {
    FormLayout,
    FormLayoutSection,
    DynamicFormRow,
} from '@driponfleek/bankai-ui-layouts';
import { StorySection } from '@driponfleek/bankai-lib-storybook';

const ComposedCPI = IFTALFormFieldComposer(ColorPickerInput);
const ComposedToggle = FormFieldComposer(ToggleSwitch);
const { TOGGLE } = FORM_FIELD_COMP_VARIANTS;

const SectionCVGForm = (props) => {
    const {
        baseCls,
        sourceColor,
        shouldShowMaxVariants,
        onColorChange,
        onToggleChange,
    } = props;
    const handleColorChange = (colorVal) => {
        const formattedVal = (colorVal ?? '').toLowerCase();

        onColorChange(formattedVal);
    };

    return (
        <StorySection>
            <FormLayout>
                <FormLayoutSection>
                    <DynamicFormRow
                        contextCls={`${baseCls}__settings-container`}
                    >
                        <ComposedCPI
                            value={sourceColor}
                            color={sourceColor}
                            labelProps={{ content: 'Source Color' }}
                            onChange={handleColorChange}
                        />
                        <ComposedToggle
                            isChecked={shouldShowMaxVariants}
                            labelProps={{ content: 'Show Max Variants?' }}
                            variant={TOGGLE}
                            onChange={onToggleChange}
                        />
                    </DynamicFormRow>
                </FormLayoutSection>
            </FormLayout>
        </StorySection>
    );
};

SectionCVGForm.defaultProps = {
    shouldShowMaxVariants: true,
    onColorChange: () => Promise.resolve(),
    onToggleChange: () => Promise.resolve(),
};

SectionCVGForm.propTypes = {
    baseCls: PropTypes.string,
    sourceColor: PropTypes.string,
    shouldShowMaxVariants: PropTypes.bool,
    onColorChange: PropTypes.func,
    onToggleChange: PropTypes.func,
};

export default SectionCVGForm;
