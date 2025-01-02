import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { getLocale } from '../../../../../utils/localeUtils';

const SectionWhyLCHMakesAccessibilityEasier = () => (
    <OmniListItem>
        <strong>
            {getLocale(
                'stories.designers.workingWithColor.creatingColorVariants.sectionTitles.whyLCH.makesAccessibilityEasier',
            )}
        </strong>
        <Paragraph>
            One of the key benefits of LCH is that it simplifies accessibility
            and contrast considerations.
        </Paragraph>
        <OmniList>
            <OmniListItem>
                <strong>Same Lightness = Same Contrast&#58;</strong> In LCH, two
                colors with the same Lightness value will typically have the
                same contrast ratio against elements on them, regardless of
                their Hue.
            </OmniListItem>
            <OmniListItem>
                This is not true in HSL, where two colors might have the same
                Lightness but wildly different perceived contrasts.
            </OmniListItem>
        </OmniList>
        <Paragraph>
            With LCH, it&apos;s easier to generate accessible variants because
            you can confidently adjust Lightness and know it will produce
            predictable results.
        </Paragraph>
    </OmniListItem>
);

export default SectionWhyLCHMakesAccessibilityEasier;
