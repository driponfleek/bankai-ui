import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { getLocale } from '../../../../../utils/localeUtils';

const SectionWhyLCHHandlesTrickyColorsBetter = () => (
    <OmniListItem>
        <strong>
            {getLocale(
                'stories.designers.workingWithColor.creatingColorVariants.sectionTitles.whyLCH.handlesTrickyColorsBetter',
            )}
        </strong>
        <Paragraph>
            Certain colors&mdash;like yellows and blue-grays&mdash;can be hard
            to work with in other color spaces.
        </Paragraph>
        <OmniList>
            <OmniListItem>
                <strong>Yellows&#58;</strong> Darkening yellow in HSL often
                shifts it toward green or brown. In LCH, the Chroma and Hue
                adjustments keep it warm and golden.
            </OmniListItem>
            <OmniListItem>
                <strong>Blue-Grays&#58;</strong> Darkening blue-gray in HSL can
                oversaturate it into a vivid blue. In LCH, we carefully reduce
                Chroma to maintain neutrality.
            </OmniListItem>
        </OmniList>
        <Paragraph>
            Whether you&apos;re working with light pastels or dark neutrals, LCH
            generates colors that feel natural and stay true to their base tone.
        </Paragraph>
    </OmniListItem>
);

export default SectionWhyLCHHandlesTrickyColorsBetter;
