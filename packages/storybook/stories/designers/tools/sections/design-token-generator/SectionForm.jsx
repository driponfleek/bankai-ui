import PropTypes from 'prop-types';
import {
    FormLayout,
    FormLayoutSection,
    DynamicFormRow,
} from '@driponfleek/bankai-ui-layouts';
import { StorySection, StickySection } from '@driponfleek/bankai-lib-storybook';
import ToggleSwitchField from '../../components/ToggleSwitchField';
import DesignTokenColorPicker from '../../components/design-token-gen/DesignTokenColorPicker';
import { FIELD_IDS } from '../../const/designTokenGenConst';

const {
    CORE_COLOR_NEUTRAL_SEED,
    SEMANTIC_COLOR_ACCENT,
    SEMANTIC_COLOR_AFFIRMATIVE,
    SEMANTIC_COLOR_CAUTIONARY,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_INFO,
    SEMANTIC_COLOR_PRIMARY,
    SEMANTIC_COLOR_SECONDARY,
} = FIELD_IDS;

const SectionForm = (props) => {
    const { baseCls, fieldValues, onChange, onDarkModeChange } = props;
    const { isDarkMode = false } = fieldValues;
    const pickerCommonProps = {
        fieldValues,
        onChange,
    };

    return (
        <StorySection>
            <StickySection
                contextCls={`${baseCls}__form-container`}
                scrollingContainerCSSClass={baseCls}
            >
                <FormLayout>
                    <FormLayoutSection>
                        <DynamicFormRow
                            contextCls={`${baseCls}__settings-container`}
                        >
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={CORE_COLOR_NEUTRAL_SEED}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={SEMANTIC_COLOR_ACCENT}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={SEMANTIC_COLOR_AFFIRMATIVE}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={SEMANTIC_COLOR_CAUTIONARY}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={SEMANTIC_COLOR_ERROR}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={SEMANTIC_COLOR_INFO}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={SEMANTIC_COLOR_PRIMARY}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={SEMANTIC_COLOR_SECONDARY}
                            />
                            <ToggleSwitchField
                                labelProps={{ content: 'Is Dark Mode?' }}
                                isChecked={isDarkMode}
                                onChange={onDarkModeChange}
                                fieldId="isDarkMode"
                            />
                        </DynamicFormRow>
                    </FormLayoutSection>
                </FormLayout>
            </StickySection>
        </StorySection>
    );
};

SectionForm.defaultProps = {
    fieldValues: {},
    onChange: () => Promise.resolve(),
    onDarkModeChange: () => Promise.resolve(),
};

SectionForm.propTypes = {
    baseCls: PropTypes.string,
    fieldValues: PropTypes.shape({
        CORE_COLOR_NEUTRAL_SEED: PropTypes.string,
        SEMANTIC_COLOR_ACCENT: PropTypes.string,
        SEMANTIC_COLOR_AFFIRMATIVE: PropTypes.string,
        SEMANTIC_COLOR_CAUTIONARY: PropTypes.string,
        SEMANTIC_COLOR_ERROR: PropTypes.string,
        SEMANTIC_COLOR_INFO: PropTypes.string,
        SEMANTIC_COLOR_PRIMARY: PropTypes.string,
        SEMANTIC_COLOR_SECONDARY: PropTypes.string,
        isDarkMode: PropTypes.bool,
    }),
    onChange: PropTypes.func,
    onDarkModeChange: PropTypes.func,
};

export default SectionForm;
