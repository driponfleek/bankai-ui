import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { getLocale } from '../../../../../utils/localeUtils';

const SectionWhyLCHHowHumansSeeColor = () => (
    <OmniListItem>
        <strong>
            {getLocale(
                'stories.designers.workingWithColor.creatingColorVariants.sectionTitles.whyLCH.alignsWithHowHumansSeeColor',
            )}
        </strong>
        <Paragraph>
            LCH stands for Lightness, Chroma, and Hue, and it&apos;s designed to
            match the way the human eye perceives color.
        </Paragraph>
        <OmniList>
            <OmniListItem>
                Adjusting Lightness in LCH produces smooth, natural changes that
                feel balanced across different colors.
            </OmniListItem>
            <OmniListItem>
                Colors remain harmonious and visually consistent when lightened
                or darkened.
            </OmniListItem>
        </OmniList>
        <Paragraph>In Other Methods (e.g., HSL)&#58;</Paragraph>
        <OmniList>
            <OmniListItem>
                Lightening a color can result in washed-out or overly vibrant
                tones.
            </OmniListItem>
            <OmniListItem>
                Darkening colors like yellow can shift them to green or brown.
            </OmniListItem>
        </OmniList>
        <Paragraph>
            LCH Solves This by preserving the natural identity of the color.
        </Paragraph>
    </OmniListItem>
);

export default SectionWhyLCHHowHumansSeeColor;
