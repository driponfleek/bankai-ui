import PropTypes from 'prop-types';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import BaseColorWithVariants from '../../components/BaseColorWithVariants';

// Const
import { TEXT_CONTRAST_RATIO } from '../../const/guideConst';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionAccessibleColorsHowToS2 = (props) => {
    const { colorData, variantsSanitized } = props;
    const { preferred } = colorData;

    // console.log('variantsSanitized: ', variantsSanitized);

    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                {getLocale(
                    'stories.foundation.accessibility.accessibleColorPalettes.sectionTitles.step2',
                )}
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    Next we evaulate the contrast ratio of all variants against
                    the background color&#58;
                </Paragraph>
                <BaseColorWithVariants colorData={colorData} />
                <Paragraph>
                    Then we reduce the number of variants to a reliable set of
                    accessible options by removing any that do not meet the{' '}
                    <strong>{TEXT_CONTRAST_RATIO}</strong> accessibility
                    requirement&#58;
                </Paragraph>
                <BaseColorWithVariants
                    colorData={{
                        preferred,
                        variants: variantsSanitized,
                    }}
                />
            </StorySection>
        </StorySection>
    );
};

SectionAccessibleColorsHowToS2.propTypes = {
    colorData: PropTypes.shape({
        preferred: PropTypes.object,
        variants: PropTypes.array,
    }),
    variantsSanitized: PropTypes.array,
};

export default SectionAccessibleColorsHowToS2;
