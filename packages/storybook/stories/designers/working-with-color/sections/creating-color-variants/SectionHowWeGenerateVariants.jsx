import {
    OmniList,
    OmniListItem,
    Paragraph,
} from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import { getLocale } from '../../../../../utils/localeUtils';

const SectionHowWeGenerateVariants = () => (
    <StorySection>
        <SectionTitle>
            {getLocale(
                'stories.designers.workingWithColor.creatingColorVariants.sectionTitles.howWeGenerateColorVariants',
            )}
        </SectionTitle>
        <Paragraph>
            Now that you understand why we use LCH, here&apos;s how we generate
            variants&#58;
        </Paragraph>
        <OmniList>
            <OmniListItem>
                <strong>Start with Your Base Color&#58;</strong> This is the
                color you choose as your starting point.
            </OmniListItem>
            <OmniListItem>
                <strong>Adjust Lightness&#58;</strong> We create lighter and
                darker variants by adjusting the Lightness value.
            </OmniListItem>
            <OmniListItem>
                <strong>Refine Chroma &#40;a.k.a. Saturation&#41;&#58;</strong>{' '}
                For lighter variants, we gently reduce Chroma to keep the color
                vibrant but not overwhelming. For darker variants, we reduce
                Chroma more aggressively to maintain neutral, usable tones.
            </OmniListItem>
            <OmniListItem>
                <strong>Stabilize Hue&#58;</strong> For tricky colors like
                yellows and blue-grays, we make minor Hue adjustments to prevent
                unwanted shifts.
            </OmniListItem>
        </OmniList>
    </StorySection>
);

export default SectionHowWeGenerateVariants;
