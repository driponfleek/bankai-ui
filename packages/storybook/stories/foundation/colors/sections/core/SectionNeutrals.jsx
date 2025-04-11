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
import ColorTokenCardList from '../../../../../sb-components/lists/ColorTokenCardList';

const SectionNeutrals = () => {
    const neutralColors = genCustomNeutralColors();
    const listData = Object.keys(neutralColors).map((neutralKey) => ({
        mainContent: `Neutral ${neutralKey.replace('core.color.neutral.', '')}`,
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
                <ColorTokenCardList listData={listData} />
            </StorySection>
            <SectionWhenToUseNeutrals />
        </StorySection>
    );
};

export default SectionNeutrals;
