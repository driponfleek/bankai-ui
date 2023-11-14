import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { getLocale } from '../../../../../utils/localeUtils';

const SectionWhyLCHMoreControlOverSaturation = () => (
    <OmniListItem>
        <strong>
            {getLocale(
                'stories.designers.workingWithColor.creatingColorVariants.sectionTitles.whyLCH.moreControlOverSaturation',
            )}
        </strong>
        <Paragraph>
            LCH allows us to control Chroma (saturation) independently of
            Lightness&#58;
        </Paragraph>
        <OmniList>
            <OmniListItem>
                <strong>For Lighter Colors&#58;</strong> We gently reduce Chroma
                to keep colors soft and vibrant without neon-like results.
            </OmniListItem>
            <OmniListItem>
                <strong>For Darker Colors&#58;</strong> We reduce Chroma more
                aggressively to avoid oversaturation and ensure neutrality.
            </OmniListItem>
        </OmniList>
        <Paragraph>
            In HSL, increasing Lightness often washes out the color entirely.
            LCH avoids this issue.
        </Paragraph>
    </OmniListItem>
);

export default SectionWhyLCHMoreControlOverSaturation;
