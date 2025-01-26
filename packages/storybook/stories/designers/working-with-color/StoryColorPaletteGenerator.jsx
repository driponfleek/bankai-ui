import { useMemo, useReducer } from 'react';
import { reducer } from '@driponfleek/bankai-lib-helper-utils';
import { IFLFormFieldComposer } from '@driponfleek/bankai-ui-form-elements';
import {
    Dropdown,
    NumberPicker,
} from '@driponfleek/bankai-ui-form-elements-rw';
import { StorySection, genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import {
    genColorMetadata,
    genHarmonyColors,
} from '@driponfleek/bankai-lib-color-utils';
import { generateStatusPalette } from '@driponfleek/bankai-lib-theme-utils';
import { DynamicFormRow } from '@driponfleek/bankai-ui-layouts';
// import { v4 as uuidv4 } from 'uuid';
import { getColorSwatchData } from './utils/colorVariantsGenStoryUtils';
import {
    getColorPaletteListData,
    getShouldShowNumberOfColors,
    getShouldShowOffset,
    harmonyDropdownOps,
    initialState,
} from './utils/colorPaletteGenStoryUtils';
import { STORY_SUB_TITLE } from './const/storyConst';
import SectionStatusPalette from './sections/color-palette-generator/SectionStatusPalette';
import SectionPalette from './sections/color-palette-generator/SectionPalette';
import SectionPaletteChoices from './sections/color-palette-generator/SectionPaletteChoices';
import StoryLayout from '../../../sb-components/layout/StoryLayout';
import ColorPickerField from '../../../sb-components/form-elements/ColorPickerField';

// Styles
import './styles/story-color-palette-gen.scss';

const DropdownInput = IFLFormFieldComposer(Dropdown);
const NumberPickerInput = IFLFormFieldComposer(NumberPicker);

const StoryColorPaletteGenerator = () => {
    const baseCls = genSBBaseCls('color-palette-gen');
    const [fieldValues, dispatch] = useReducer(reducer, initialState);
    const { baseColor, harmony, numberOfColors, offset } = fieldValues;
    const shouldShowNumberOfColors = getShouldShowNumberOfColors(harmony);
    const shouldShowOffset = getShouldShowOffset(harmony);
    // TODO: Need to add Brewer stuff for data vis.
    // When doing Brewer need to hide palette choices
    const harmonyColors = useMemo(
        () =>
            genHarmonyColors(harmony, {
                baseHex: baseColor,
                numberOfColors,
                offset,
            }),
        [harmony, baseColor, numberOfColors, offset],
    );
    const harmonyListData = useMemo(
        () => getColorPaletteListData(harmonyColors),
        [harmonyColors],
    );
    const statusColors = useMemo(
        () => generateStatusPalette(baseColor),
        [baseColor],
    );
    // TODO: Add neutral seed color by reducing chroma so that base color slightly is present in the gray
    const statusPalette = useMemo(
        () => ({
            Affirmative: statusColors.affirmative,
            Cautionary: statusColors.cautionary,
            Danger: statusColors.error,
            Info: statusColors.info,
        }),
        [statusColors],
    );
    // TODO: Move to utility file
    const statusListData = useMemo(() => {
        return Object.keys(statusPalette).map((colorName) =>
            getColorSwatchData({
                ...genColorMetadata(statusPalette[colorName]),
                tokenId: colorName,
            }),
        );
    }, [statusPalette]);

    const handleBaseColorChange = (value) => {
        dispatch({ baseColor: value });
    };

    const handleHarmonyChange = (params) => {
        if (params?.id) {
            dispatch({ harmony: params?.id });
        }
    };

    const handleNumberOfColorsChange = (params) => {
        const { newValue } = params ?? {};
        dispatch({ numberOfColors: newValue });
    };
    const handleOffsetChange = (params) => {
        const { newValue } = params ?? {};
        dispatch({ offset: newValue });
    };

    return (
        <StoryLayout
            contextCls={baseCls}
            title="Color Palette Generator"
            subTitle={STORY_SUB_TITLE}
        >
            <div className={`${baseCls}__form-and-results-container`}>
                <StorySection contextCls={`${baseCls}__form-container`}>
                    <DynamicFormRow>
                        <ColorPickerField
                            color={baseColor}
                            value={baseColor}
                            labelProps={{ content: 'Base Color' }}
                            onChange={handleBaseColorChange}
                            isLeftAlignedLabel
                        />
                    </DynamicFormRow>
                    <DynamicFormRow>
                        <DropdownInput
                            dataKey="id"
                            textField="text"
                            data={harmonyDropdownOps}
                            value={harmony}
                            labelProps={{ content: 'Color Harmony' }}
                            onChange={handleHarmonyChange}
                            isLeftAlignedLabel
                        />
                    </DynamicFormRow>
                    {shouldShowNumberOfColors && (
                        <DynamicFormRow>
                            <NumberPickerInput
                                labelProps={{ content: 'Number of Colors' }}
                                value={numberOfColors}
                                onChange={handleNumberOfColorsChange}
                                min={2}
                                max={99}
                                isLeftAlignedLabel
                            />
                        </DynamicFormRow>
                    )}
                    {shouldShowOffset && (
                        <DynamicFormRow>
                            <NumberPickerInput
                                labelProps={{ content: 'Offset' }}
                                value={offset}
                                onChange={handleOffsetChange}
                                min={10}
                                max={150}
                                isLeftAlignedLabel
                            />
                        </DynamicFormRow>
                    )}
                </StorySection>
                <SectionPalette listData={harmonyListData} />
                <SectionStatusPalette data={statusListData} />
            </div>
            <SectionPaletteChoices
                contextCls={`${baseCls}__palette-choices`}
                colors={[baseColor, ...harmonyColors]}
                statusColors={statusColors}
            />
        </StoryLayout>
    );
};

export default StoryColorPaletteGenerator;
