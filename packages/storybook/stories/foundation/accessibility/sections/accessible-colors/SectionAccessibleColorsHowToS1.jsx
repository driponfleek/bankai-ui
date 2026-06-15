import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import BaseColorWithVariants from '../../components/BaseColorWithVariants';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

/**
 * @param {Object} props
 * @param {Object} [props.preferredColorAndVariants] - Color data with the preferred base color and generated variants
 * @param {Object} [props.preferredColorAndVariants.preferred] - The preferred base color object
 * @param {Array} [props.preferredColorAndVariants.variants] - Array of color variant objects
 */
const SectionAccessibleColorsHowToS1 = (props) => {
    const { preferredColorAndVariants } = props;

    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                {getLocale(
                    'stories.foundation.accessibility.accessibleColorPalettes.sectionTitles.step1',
                )}
            </SectionTitle>
            <StorySection>
                <Paragraph>To generate text color variants:</Paragraph>
                <OmniList>
                    <OmniListItem>
                        We convert the preferred color hex value to HSL &#40;
                        <strong>H</strong>ue, <strong>S</strong>aturation,{' '}
                        <strong>L</strong>ightness&#41;
                    </OmniListItem>
                    <OmniListItem>
                        We then derive variants of the preferred Text color by
                        modifying its lightness in increments of 5%, starting at
                        95% all the way down to 5%. &#40;We omit 100% because
                        that always results in White, and 0% because it always
                        results in Black&#41;
                    </OmniListItem>
                    <OmniListItem>
                        Finally we remove any duplicates of the preferred Text
                        color found in the variants.
                    </OmniListItem>
                </OmniList>
                <BaseColorWithVariants colorData={preferredColorAndVariants} />
            </StorySection>
        </StorySection>
    );
};

export default SectionAccessibleColorsHowToS1;
