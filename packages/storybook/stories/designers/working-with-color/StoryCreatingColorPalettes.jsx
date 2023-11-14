import { useState, useMemo } from 'react';
import { StorySection, genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import {
    genColorMetadata,
    generateHarmonyPalette,
    COLOR_HARMONIES,
} from '@driponfleek/bankai-lib-color-utils';
import {
    reservedStatusColorHues,
    generateStatusPalette,
} from '@driponfleek/bankai-lib-theme-utils/';
import { DynamicFormLayout } from '@driponfleek/bankai-ui-layouts';
import { getColorSwatchData } from './utils/colorVariantsGenStoryUtils';
import { STORY_SUB_TITLE } from './const/storyConst';
import SectionStatusPalette from './sections/color-palette-generator/SectionStatusPalette';
import SectionPalette from './sections/color-palette-generator/SectionPalette';
import StoryLayout from '../../../sb-components/layout/StoryLayout';
import ColorPickerField from '../../../sb-components/form-elements/ColorPickerField';

// Styles
import './styles/story-color-variants-gen.scss';

const StoryCreatingColorPalettes = () => {
    const baseCls = genSBBaseCls('color-palette-gen');
    const [baseColor, setBaseColor] = useState('#006fa3');
    const [mainColorsCount, setMainColorsCount] = useState(2);
    const [mainColorsHarmony, setMainColorsHarmony] = useState(
        COLOR_HARMONIES.ANALOGOUS,
    );
    const [supplementaryColorsCount, setSupplementaryColorsCount] = useState(4);
    const [supplementaryColorsHarmony, setSupplementaryColorsHarmony] =
        useState(COLOR_HARMONIES.SQUARE);
    const statusColors = useMemo(
        () => generateStatusPalette(baseColor),
        [baseColor],
    );
    const statusColorsArr = useMemo(
        () => [
            ...Object.entries(statusColors).map(
                (statusColor) => statusColor[1],
            ),
        ],
        [statusColors],
    );
    const mainColorsPaletteOps = useMemo(
        () => ({
            baseHex: baseColor,
            numberOfColors: mainColorsCount,
            existingColors: statusColorsArr,
            reservedHues: reservedStatusColorHues,
        }),
        [baseColor, statusColorsArr, mainColorsCount],
    );
    const mainColors = useMemo(
        () => generateHarmonyPalette(mainColorsHarmony, mainColorsPaletteOps),
        [mainColorsHarmony, mainColorsPaletteOps],
    );
    const supplementaryColorsPaletteOps = useMemo(
        () => ({
            baseHex: baseColor,
            numberOfColors: supplementaryColorsCount,
            existingColors: [...statusColorsArr, ...mainColors],
            reservedHues: reservedStatusColorHues,
        }),
        [baseColor, statusColorsArr, mainColors, supplementaryColorsCount],
    );
    const supplementaryColors = useMemo(
        () =>
            generateHarmonyPalette(
                supplementaryColorsHarmony,
                supplementaryColorsPaletteOps,
            ),
        [supplementaryColorsHarmony, supplementaryColorsPaletteOps],
    );
    const statusPalette = useMemo(
        () => ({
            Affirmative: statusColors.affirmative,
            Cautionary: statusColors.cautionary,
            Danger: statusColors.error,
        }),
        [statusColors],
    );
    const mainColorsListData = useMemo(() => {
        return mainColors.map((color) =>
            getColorSwatchData(genColorMetadata(color)),
        );
    }, [mainColors]);
    const supplementaryColorsListData = useMemo(() => {
        return supplementaryColors.map((color) =>
            getColorSwatchData(genColorMetadata(color)),
        );
    }, [supplementaryColors]);
    const statusListData = useMemo(() => {
        return Object.keys(statusPalette).map((colorName) =>
            getColorSwatchData({
                ...genColorMetadata(statusPalette[colorName]),
                tokenId: colorName,
            }),
        );
    }, [statusPalette]);

    const handleBaseColorChange = (value) => {
        setBaseColor(value);
    };

    const handleMainColorsHarmonyChange = (params) => {
        if (params?.id) {
            setMainColorsHarmony(params?.id);
        }
    };

    const handleNumberOfMainColorsChange = (params) => {
        const { newValue } = params ?? {};

        setMainColorsCount(newValue || 1);
    };

    const handleSupplementaryColorsHarmonyChange = (params) => {
        if (params?.id) {
            setSupplementaryColorsHarmony(params?.id);
        }
    };

    const handleNumberOfSupplementaryColorsChange = (params) => {
        const { newValue } = params ?? {};

        setSupplementaryColorsCount(newValue || 1);
    };

    return (
        <StoryLayout
            contextCls={baseCls}
            title="Color Palette Generator"
            subTitle={STORY_SUB_TITLE}
        >
            <StorySection>
                <DynamicFormLayout>
                    <ColorPickerField
                        color={baseColor}
                        value={baseColor}
                        onChange={handleBaseColorChange}
                        labelProps={{ content: 'Base Color' }}
                        isLeftAlignedLabel
                    />
                </DynamicFormLayout>
            </StorySection>
            <SectionPalette
                title="Main Colors"
                data={mainColorsListData}
                harmony={mainColorsHarmony}
                numberOfColors={mainColorsCount}
                onHarmonyChange={handleMainColorsHarmonyChange}
                onNumberOfColorsChange={handleNumberOfMainColorsChange}
            />
            <SectionPalette
                title="Supplementary Colors"
                data={supplementaryColorsListData}
                harmony={supplementaryColorsHarmony}
                numberOfColors={supplementaryColorsCount}
                onHarmonyChange={handleSupplementaryColorsHarmonyChange}
                onNumberOfColorsChange={handleNumberOfSupplementaryColorsChange}
            />
            <SectionStatusPalette data={statusListData} />
        </StoryLayout>
    );
};

export default StoryCreatingColorPalettes;
