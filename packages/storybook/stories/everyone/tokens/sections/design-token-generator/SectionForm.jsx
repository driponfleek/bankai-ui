import {
    FormLayout,
    FormLayoutSection,
    DynamicFormRow,
} from '@driponfleek/bankai-ui-layouts';
import { StorySection, StickySection } from '@driponfleek/bankai-lib-storybook';
import ToggleSwitchField from '../../../../../sb-components/form-elements/ToggleSwitchField';
import DesignTokenColorPicker from '../../components/design-token-gen/DesignTokenColorPicker';
import { FIELD_IDS } from '../../const/designTokenGenConst';

const {
    CORE_COLOR_NEUTRAL_SEED,
    SEMANTIC_COLOR_ACCENT_PRIMARY,
    SEMANTIC_COLOR_ACCENT_SECONDARY,
    SEMANTIC_COLOR_ACCENT_TERTIARY,
    SEMANTIC_COLOR_AFFIRMATIVE,
    SEMANTIC_COLOR_BRAND,
    SEMANTIC_COLOR_CAUTIONARY,
    SEMANTIC_COLOR_CANVAS_BRAND,
    SEMANTIC_COLOR_DESTRUCTIVE,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_INFO,
    SEMANTIC_COLOR_PRIMARY,
    SEMANTIC_COLOR_SECONDARY,
} = FIELD_IDS;

/**
 * Props for SectionForm.
 * @typedef {Object} SectionFormProps
 * @property {string} baseCls - The base CSS class.
 * @property {Object} fieldValues - Object containing various field values.
 * @property {string} fieldValues.CORE_COLOR_NEUTRAL_SEED - Seed color for neutral core color generation.
 * @property {string} fieldValues.SEMANTIC_COLOR_ACCENT_PRIMARY - Desired accent color.
 * @property {string} fieldValues.SEMANTIC_COLOR_AFFIRMATIVE - Desired .
 * @property {string} fieldValues.SEMANTIC_COLOR_CAUTIONARY - Desired .
 * @property {string} fieldValues.SEMANTIC_COLOR_ERROR - Desired .
 * @property {string} fieldValues.SEMANTIC_COLOR_INFO - Desired .
 * @property {string} fieldValues.SEMANTIC_COLOR_PRIMARY - Desired .
 * @property {string} fieldValues.SEMANTIC_COLOR_SECONDARY - Desired .
 * @property {boolean} fieldValues.isDarkMode - Indicates if tokens should be generated for dark mode.
 * @property {boolean} fieldValues.shouldAutoCorrectForA11y - Indicates if tokens colors should be auto-corrected to be a11y compliant.
 * @property {function} onChange - Callback function triggered when color inputs change.
 * @property {function} onDarkModeChange - Callback function triggered when dark mode toggle switch changes.
 * @property {function} onAutoCorrectForA11yChange - Callback function triggered when auto-correct for a11y toggle switch changes.
 */

/**
 * SectionForm component
 * @param {SectionFormProps} props
 */
const SectionForm = (props) => {
    const {
        baseCls,
        fieldValues = {},
        onChange = () => Promise.resolve(),
        // onAPCAChange = () => Promise.resolve(),
        onAutoCorrectForA11yChange = () => Promise.resolve(),
        onDarkModeChange = () => Promise.resolve(),
    } = props;
    const {
        isDarkMode = false,
        shouldAutoCorrectForA11y = true,
        // shouldUseMinimumAPCATextCompliance = true,
    } = fieldValues;
    const pickerCommonProps = {
        fieldValues,
        onChange,
        isLeftAlignedLabel: true,
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
                                fieldId={SEMANTIC_COLOR_BRAND}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={SEMANTIC_COLOR_PRIMARY}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={SEMANTIC_COLOR_SECONDARY}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={SEMANTIC_COLOR_CANVAS_BRAND}
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
                                fieldId={SEMANTIC_COLOR_DESTRUCTIVE}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={SEMANTIC_COLOR_ACCENT_PRIMARY}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={SEMANTIC_COLOR_ACCENT_SECONDARY}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={SEMANTIC_COLOR_ACCENT_TERTIARY}
                            />
                            <DesignTokenColorPicker
                                {...pickerCommonProps}
                                fieldId={CORE_COLOR_NEUTRAL_SEED}
                            />
                            <ToggleSwitchField
                                labelProps={{
                                    content: 'Generate For Dark Mode',
                                }}
                                isChecked={isDarkMode}
                                onChange={onDarkModeChange}
                                fieldId="isDarkMode"
                            />
                            <ToggleSwitchField
                                labelProps={{
                                    content: 'Auto-Correct For Accessibility',
                                }}
                                isChecked={shouldAutoCorrectForA11y}
                                onChange={onAutoCorrectForA11yChange}
                                fieldId="shouldAutoCorrectForA11y"
                            />
                            {/* <ToggleSwitchField
                                labelProps={{
                                    content:
                                        'Use Minimum APCA Contrast For Text',
                                }}
                                isChecked={shouldUseMinimumAPCATextCompliance}
                                onChange={onAPCAChange}
                                fieldId="shouldUseMinimumAPCATextCompliance"
                            /> */}
                        </DynamicFormRow>
                    </FormLayoutSection>
                </FormLayout>
            </StickySection>
        </StorySection>
    );
};

export default SectionForm;
