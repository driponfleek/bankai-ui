import PropTypes from 'prop-types';
import {
    FormLayout,
    FormLayoutSection,
    DynamicFormRow,
} from '@driponfleek/bankai-ui-layouts';
import { StorySection } from '@driponfleek/bankai-lib-storybook';
import ColorPickerField from '../../components/ColorPickerField';
import ToggleSwitchField from '../../components/ToggleSwitchField';

const SectionForm = (props) => {
    const {
        baseCls,
        sourceColor,
        shouldShowMaxVariants,
        onColorChange,
        onToggleChange,
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

SectionForm.defaultProps = {
    shouldShowMaxVariants: true,
    onColorChange: () => Promise.resolve(),
    onToggleChange: () => Promise.resolve(),
};

SectionForm.propTypes = {
    baseCls: PropTypes.string,
    sourceColor: PropTypes.string,
    shouldShowMaxVariants: PropTypes.bool,
    onColorChange: PropTypes.func,
    onToggleChange: PropTypes.func,
};

export default SectionForm;
