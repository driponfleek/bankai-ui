import {
    StorySection,
    SectionTitle,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import {
    genCustomNeutralColors,
    massageConstToDotNotation,
} from '@driponfleek/bankai-lib-theme-utils';
import SectionWhenToUseNeutrals from './SectionWhenToUseNeutrals';
import ColorPaletteList from '../../components/ColorPaletteList';

const SectionNeutrals = () => {
    const neutralColors = genCustomNeutralColors();
    const listData = Object.keys(neutralColors).map((neutralKey) => ({
        mainContent: `Neutral ${neutralKey.replace('CORE_COLOR_NEUTRAL_', '')}`,
        color: neutralColors[neutralKey],
        metaList: [
            massageConstToDotNotation(neutralKey),
            neutralColors[neutralKey],
        ],
    }));

    return (
        <StorySection contextCls={genSBBaseCls('color-swatch-list')}>
            <SectionTitle>Neutrals</SectionTitle>
            <StorySection>
                <ColorPaletteList listData={listData} />
            </StorySection>
            <SectionWhenToUseNeutrals />
        </StorySection>
    );
};

export default SectionNeutrals;
