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
                    'stories.foundation.color.dataVis.sequential.title',
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
                        'stories.foundation.color.dataVis.sequential.brewer.palette.blues',
                    )}
                </SectionTitle>
                {renderPalette(blues)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.bugn',
                    )}
                </SectionTitle>
                {renderPalette(bugn)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.bupu',
                    )}
                </SectionTitle>
                {renderPalette(bupu)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.gnbu',
                    )}
                </SectionTitle>
                {renderPalette(gnbu)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.greens',
                    )}
                </SectionTitle>
                {renderPalette(greens)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.greys',
                    )}
                </SectionTitle>
                {renderPalette(greys)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.oranges',
                    )}
                </SectionTitle>
                {renderPalette(oranges)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.orrd',
                    )}
                </SectionTitle>
                {renderPalette(orrd)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.pubu',
                    )}
                </SectionTitle>
                {renderPalette(pubu)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.pubugn',
                    )}
                </SectionTitle>
                {renderPalette(pubugn)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.purd',
                    )}
                </SectionTitle>
                {renderPalette(purd)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.purples',
                    )}
                </SectionTitle>
                {renderPalette(purples)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.rdpu',
                    )}
                </SectionTitle>
                {renderPalette(rdpu)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.reds',
                    )}
                </SectionTitle>
                {renderPalette(reds)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.ylgn',
                    )}
                </SectionTitle>
                {renderPalette(ylgn)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.ylgnbu',
                    )}
                </SectionTitle>
                {renderPalette(ylgnbu)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.ylorbr',
                    )}
                </SectionTitle>
                {renderPalette(ylorbr)}
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale(
                        'stories.foundation.color.dataVis.sequential.brewer.palette.ylorrd',
                    )}
                </SectionTitle>
                {renderPalette(ylorrd)}
            </StorySection>
        </StorySection>
    );
};

export default SectionSequentialColors;
