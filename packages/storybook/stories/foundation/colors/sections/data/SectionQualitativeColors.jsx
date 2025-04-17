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
import { getQualitativeTokenVals } from '../../utils/dataVisStoryUtils';

const SectionQualitativeColors = () => {
    const { dark2, paired, set2 } = getQualitativeTokenVals();
    const renderPalette = (data) => (
        <ColorTokenTileList
            data={data}
            renderListItem={DataVisPaletteListItem}
        />
    );

    return (
        <StorySection>
            <SectionTitle>
                {getLocale(
                    'stories.foundation.color.dataVis.qualitative.title',
                )}
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    Qualitative palettes are designed for categorical data—where
                    colors represent distinct groups or labels without any
                    inherent order or progression. Each color is visually
                    distinct but carries equal weight, making these palettes
                    great for comparisons where no single item should stand out
                    more than another.
                </Paragraph>
                <Paragraph>
                    Use qualitative palettes when you want to&#58;
                </Paragraph>
                <OmniList>
                    <OmniListItem>
                        Represent categories, groups, or segments.
                    </OmniListItem>
                    <OmniListItem>
                        Show labels like departments, user types, or regions.
                    </OmniListItem>
                    <OmniListItem>
                        Avoid implying hierarchy or value with color.
                    </OmniListItem>
                </OmniList>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.qualitative.brewer.palette.dark2',
                    )}
                </SectionTitle>
                {renderPalette(dark2)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.qualitative.brewer.palette.paired',
                    )}
                </SectionTitle>
                {renderPalette(paired)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.qualitative.brewer.palette.set2',
                    )}
                </SectionTitle>
                {renderPalette(set2)}
            </StorySection>
        </StorySection>
    );
};

export default SectionQualitativeColors;
