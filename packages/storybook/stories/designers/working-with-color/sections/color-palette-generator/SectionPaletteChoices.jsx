import { useReducer } from 'react';
import { reducer } from '@driponfleek/bankai-lib-helper-utils';
import {
    FormFieldComposer,
    Fieldset,
    Checkbox,
    FORM_FIELD_COMP_VARIANTS,
} from '@driponfleek/bankai-ui-form-elements';
import {
    FormLayout,
    FormLayoutSection,
    DynamicFormRow,
} from '@driponfleek/bankai-ui-layouts';
import { SEMANTIC_COLOR_TOKEN_NAMES } from '@driponfleek/bankai-lib-theme-utils';
import {
    StorySection,
    SectionTitle,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import { initialPaletteState } from '../../utils/colorPaletteGenStoryUtils';
import ColorPaletteGenSwatch from '../../components/ColorPaletteGenSwatch';

// Styles
import './styles/section-palette-choices.scss';

const { INLINE_RIGHT } = FORM_FIELD_COMP_VARIANTS;
const CheckboxInput = FormFieldComposer(Checkbox);
const {
    SEMANTIC_COLOR_ACCENT_PRIMARY,
    SEMANTIC_COLOR_ACCENT_SECONDARY,
    SEMANTIC_COLOR_ACCENT_TERTIARY,
    SEMANTIC_COLOR_AFFIRMATIVE,
    SEMANTIC_COLOR_BRAND,
    SEMANTIC_COLOR_CANVAS_BRAND,
    SEMANTIC_COLOR_CAUTIONARY,
    SEMANTIC_COLOR_DESTRUCTIVE,
    SEMANTIC_COLOR_ERROR,
    SEMANTIC_COLOR_INFO,
    SEMANTIC_COLOR_PRIMARY,
    SEMANTIC_COLOR_SECONDARY,
} = SEMANTIC_COLOR_TOKEN_NAMES;

const SectionPaletteChoices = (props) => {
    const { colors = [], statusColors = [] } = props;
    const baseCls = genSBBaseCls('color-palette-gen-choices');
    const [fieldValues, dispatch] = useReducer(reducer, initialPaletteState);
    const { isPrimarySameAsBrand, isDestructiveSameAsError } = fieldValues;

    // TODO: Need a download button for grabbing these once picked to upload to
    // the design token generator
    const handleIsPrimarySameAsBrandChange = () => {
        const newVal = !isPrimarySameAsBrand;
        const updates = { isPrimarySameAsBrand: newVal };

        if (newVal) {
            updates[SEMANTIC_COLOR_PRIMARY] = fieldValues[SEMANTIC_COLOR_BRAND];
        }

        dispatch(updates);
    };

    const handleDestructiveSameAsErrorChange = () => {
        const newVal = !isDestructiveSameAsError;
        const updates = { isDestructiveSameAsError: newVal };

        if (newVal) {
            updates[SEMANTIC_COLOR_DESTRUCTIVE] =
                fieldValues[SEMANTIC_COLOR_ERROR];
        }

        dispatch(updates);
    };

    const handleChange = (params) => {
        const { token, value } = params;
        const updates = { [token]: value };

        if (token === SEMANTIC_COLOR_BRAND && isPrimarySameAsBrand) {
            updates[SEMANTIC_COLOR_PRIMARY] = value;
        }

        if (token === SEMANTIC_COLOR_ERROR && isDestructiveSameAsError) {
            updates[SEMANTIC_COLOR_DESTRUCTIVE] = value;
        }

        dispatch(updates);
    };

    return (
        <StorySection contextCls={baseCls}>
            <SectionTitle>Palette Choices</SectionTitle>
            <FormLayout>
                <FormLayoutSection>
                    <DynamicFormRow>
                        <CheckboxInput
                            labelProps={{ content: 'Primary Is Same As Brand' }}
                            isChecked={isPrimarySameAsBrand}
                            onChange={handleIsPrimarySameAsBrandChange}
                            variant={INLINE_RIGHT}
                        />
                        <CheckboxInput
                            labelProps={{
                                content: 'Destructive Is Same As Error',
                            }}
                            isChecked={isDestructiveSameAsError}
                            onChange={handleDestructiveSameAsErrorChange}
                            variant={INLINE_RIGHT}
                        />
                    </DynamicFormRow>
                </FormLayoutSection>
                <FormLayoutSection>
                    <Fieldset legend="Main">
                        <DynamicFormRow>
                            <ColorPaletteGenSwatch
                                token={SEMANTIC_COLOR_BRAND}
                                options={colors}
                                onChange={handleChange}
                                color={fieldValues[SEMANTIC_COLOR_BRAND]}
                            />
                            <ColorPaletteGenSwatch
                                token={SEMANTIC_COLOR_PRIMARY}
                                options={colors}
                                onChange={handleChange}
                                color={fieldValues[SEMANTIC_COLOR_PRIMARY]}
                                isDisabled={isPrimarySameAsBrand}
                            />
                            <ColorPaletteGenSwatch
                                token={SEMANTIC_COLOR_SECONDARY}
                                options={colors}
                                onChange={handleChange}
                                color={fieldValues[SEMANTIC_COLOR_SECONDARY]}
                            />
                        </DynamicFormRow>
                    </Fieldset>
                </FormLayoutSection>
                <FormLayoutSection>
                    <Fieldset legend="Accents and Canvas (Brand)">
                        <DynamicFormRow>
                            <ColorPaletteGenSwatch
                                token={SEMANTIC_COLOR_ACCENT_PRIMARY}
                                options={colors}
                                onChange={handleChange}
                                color={
                                    fieldValues[SEMANTIC_COLOR_ACCENT_PRIMARY]
                                }
                            />
                            <ColorPaletteGenSwatch
                                token={SEMANTIC_COLOR_ACCENT_SECONDARY}
                                options={colors}
                                onChange={handleChange}
                                color={
                                    fieldValues[SEMANTIC_COLOR_ACCENT_SECONDARY]
                                }
                            />
                            <ColorPaletteGenSwatch
                                token={SEMANTIC_COLOR_ACCENT_TERTIARY}
                                options={colors}
                                onChange={handleChange}
                                color={
                                    fieldValues[SEMANTIC_COLOR_ACCENT_TERTIARY]
                                }
                            />
                            <ColorPaletteGenSwatch
                                token={SEMANTIC_COLOR_CANVAS_BRAND}
                                options={colors}
                                onChange={handleChange}
                                color={fieldValues[SEMANTIC_COLOR_CANVAS_BRAND]}
                            />
                        </DynamicFormRow>
                    </Fieldset>
                </FormLayoutSection>
                <FormLayoutSection>
                    <Fieldset legend="Status and Informative">
                        <DynamicFormRow>
                            <ColorPaletteGenSwatch
                                token={SEMANTIC_COLOR_AFFIRMATIVE}
                                options={[statusColors.affirmative]}
                                onChange={handleChange}
                                color={fieldValues[SEMANTIC_COLOR_AFFIRMATIVE]}
                            />
                            <ColorPaletteGenSwatch
                                token={SEMANTIC_COLOR_CAUTIONARY}
                                options={[statusColors.cautionary]}
                                onChange={handleChange}
                                color={fieldValues[SEMANTIC_COLOR_CAUTIONARY]}
                            />
                            <ColorPaletteGenSwatch
                                token={SEMANTIC_COLOR_ERROR}
                                options={[statusColors.error]}
                                onChange={handleChange}
                                color={fieldValues[SEMANTIC_COLOR_ERROR]}
                            />
                            <ColorPaletteGenSwatch
                                token={SEMANTIC_COLOR_DESTRUCTIVE}
                                options={[statusColors.error, ...colors]}
                                onChange={handleChange}
                                color={fieldValues[SEMANTIC_COLOR_DESTRUCTIVE]}
                                isDisabled={isDestructiveSameAsError}
                            />
                            <ColorPaletteGenSwatch
                                token={SEMANTIC_COLOR_INFO}
                                options={[statusColors.info, ...colors]}
                                onChange={handleChange}
                                color={fieldValues[SEMANTIC_COLOR_INFO]}
                            />
                        </DynamicFormRow>
                    </Fieldset>
                </FormLayoutSection>
            </FormLayout>
        </StorySection>
    );
};

export default SectionPaletteChoices;
