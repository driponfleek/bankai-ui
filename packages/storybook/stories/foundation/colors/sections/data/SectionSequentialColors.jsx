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
import { getSequentialTokenVals } from '../../utils/dataVisStoryUtils';

const SectionSequentialColors = () => {
    const {
        blues,
        bugn,
        bupu,
        gnbu,
        greens,
        greys,
        oranges,
        orrd,
        pubu,
        pubugn,
        purd,
        purples,
        rdpu,
        reds,
        ylgn,
        ylgnbu,
        ylorbr,
        ylorrd,
    } = getSequentialTokenVals();
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
                    'stories.foundation.color.dataVis.brewerCategory.sequential.title',
                )}
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    Sequential palettes are meant for ordered data that
                    progresses from low to high. These palettes typically vary
                    in lightness, sometimes hue, to create a smooth gradient.
                    Lighter shades represent lower values; darker or more
                    intense shades represent higher values.
                </Paragraph>
                <Paragraph>
                    Use sequential palettes when you want to&#58;
                </Paragraph>
                <OmniList>
                    <OmniListItem>
                        Show magnitude or quantity (e.g., counts, percentages).
                    </OmniListItem>
                    <OmniListItem>
                        Highlight progression, intensity, or density.
                    </OmniListItem>
                    <OmniListItem>
                        Visualize values along a continuous scale.
                    </OmniListItem>
                </OmniList>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.blues',
                    )}
                </SectionTitle>
                {renderPalette(blues)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.bugn',
                    )}
                </SectionTitle>
                {renderPalette(bugn)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.bupu',
                    )}
                </SectionTitle>
                {renderPalette(bupu)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.gnbu',
                    )}
                </SectionTitle>
                {renderPalette(gnbu)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.greens',
                    )}
                </SectionTitle>
                {renderPalette(greens)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.greys',
                    )}
                </SectionTitle>
                {renderPalette(greys)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.oranges',
                    )}
                </SectionTitle>
                {renderPalette(oranges)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.orrd',
                    )}
                </SectionTitle>
                {renderPalette(orrd)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.pubu',
                    )}
                </SectionTitle>
                {renderPalette(pubu)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.pubugn',
                    )}
                </SectionTitle>
                {renderPalette(pubugn)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.purd',
                    )}
                </SectionTitle>
                {renderPalette(purd)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.purples',
                    )}
                </SectionTitle>
                {renderPalette(purples)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.rdpu',
                    )}
                </SectionTitle>
                {renderPalette(rdpu)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.reds',
                    )}
                </SectionTitle>
                {renderPalette(reds)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.ylgn',
                    )}
                </SectionTitle>
                {renderPalette(ylgn)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.ylgnbu',
                    )}
                </SectionTitle>
                {renderPalette(ylgnbu)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.ylorbr',
                    )}
                </SectionTitle>
                {renderPalette(ylorbr)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.brewerCategory.sequential.palette.ylorrd',
                    )}
                </SectionTitle>
                {renderPalette(ylorrd)}
            </StorySection>
        </StorySection>
    );
};

export default SectionSequentialColors;
