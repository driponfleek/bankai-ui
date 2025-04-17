import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import ColorTokenTileList from '../../../../../sb-components/lists/ColorTokenTileList';
import DataVisPaletteListItem from '../../components/DataVisPaletteListItem';
import { getLocale } from '../../../../../utils/localeUtils';

// Utils
import { getDivergingTokenVals } from '../../utils/dataVisStoryUtils';

const SectionDivergingColors = () => {
    const { brbg, piyg, prgn, puor, rdbu, rdylbu } = getDivergingTokenVals();
    const renderPalette = (data) => (
        <ColorTokenTileList
            data={data}
            renderListItem={DataVisPaletteListItem}
        />
    );

    return (
        <StorySection>
            <SectionTitle>
                {getLocale('stories.foundation.color.dataVis.diverging.title')}
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    Diverging palettes are ideal for data that centers around a
                    meaningful midpoint—like zero, average, or a baseline—where
                    values can go above or below that point. They use
                    contrasting colors at each end with a neutral or lighter
                    tone in the middle, making it easy to spot positive vs.
                    negative trends or deviations from a norm.
                </Paragraph>
                <Paragraph>
                    Use diverging palettes when you want to&#58;
                </Paragraph>
                <OmniList>
                    <OmniListItem>
                        Show change, difference, or deviation (e.g., gain vs.
                        loss).
                    </OmniListItem>
                    <OmniListItem>
                        Emphasize values moving in two directions from a center
                        point.
                    </OmniListItem>
                    <OmniListItem>
                        Help users quickly identify which side of the midpoint a
                        value falls on.
                    </OmniListItem>
                </OmniList>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.diverging.brewer.palette.brbg',
                    )}
                </SectionTitle>
                {renderPalette(brbg)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.diverging.brewer.palette.piyg',
                    )}
                </SectionTitle>
                {renderPalette(piyg)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    PRGn &#40;Purple to Green&#41;
                </SectionTitle>
                {renderPalette(prgn)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.diverging.brewer.palette.puor',
                    )}
                </SectionTitle>
                {renderPalette(puor)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.diverging.brewer.palette.rdbu',
                    )}
                </SectionTitle>
                {renderPalette(rdbu)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.diverging.brewer.palette.rdylbu',
                    )}
                </SectionTitle>
                {renderPalette(rdylbu)}
            </StorySection>
        </StorySection>
    );
};

export default SectionDivergingColors;
