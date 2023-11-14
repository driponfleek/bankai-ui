import PropTypes from 'prop-types';
import cx from 'classnames';
import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    SectionTitle,
    ColorSwatch,
} from '@driponfleek/bankai-lib-storybook';

// Const
import { getStep3Data } from '../../utils/guideUtils';
import { TEXT_COLOR_NAME } from '../../const/guideConst';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionAccessibleColorsHowToS3 = (props) => {
    const { baseCls, colorData, bgColor } = props;
    const { preferred } = colorData ?? {};
    const preferredClone = {
        ...preferred,
        metaList: [
            ...preferred.metaList,
            <>
                Perceived Brightness -{' '}
                <strong>{preferred.isDark ? 'Dark' : 'Light'}</strong>
            </>,
            `Contrast Ratio - ${preferred.contrast}:1 ${bgColor.color}`,
        ],
    };
    const {
        lighterVariantsLightnesses,
        darkerVariantsLightnesses,
        shouldPickFromLighterVariantsB1,
        shouldPickFromLighterVariantsB2,
        shouldPickFromDarkerVariantsB1,
        shouldPickFromDarkerVariantsB2,
    } = getStep3Data(colorData);

    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                {getLocale(
                    'stories.foundation.accessibility.accessibleColorPalettes.sectionTitles.step3',
                )}
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    Our goal is to get as close to the original preferred Text
                    color as possible with an accessible altnerative. To do that
                    we start with determing the original preferred text
                    color&apos;s{' '}
                    <Hyperlink
                        href="https://www.w3.org/TR/AERT/#color-contrast"
                        shouldOpenInNewWindow
                    >
                        perceived brightness
                    </Hyperlink>
                    &#58;
                </Paragraph>
                <div className={`${baseCls}__bg-and-text-colors-container`}>
                    <ColorSwatch
                        mainContent={TEXT_COLOR_NAME}
                        color={preferredClone.color}
                        metaList={preferredClone.metaList}
                        isFancy
                    />
                </div>
                <Paragraph>
                    We&apos;ll also break up the variants into two groups&#58;
                </Paragraph>
                <OmniList>
                    <OmniListItem>
                        Variants that are <strong>lighter</strong> than our
                        original preferred Text color &#40;
                        <em>{lighterVariantsLightnesses}</em>&#41;
                    </OmniListItem>
                    <OmniListItem>
                        Variants that are <strong>darker</strong> than our
                        original preferred Text color &#40;
                        <em>{darkerVariantsLightnesses}</em>&#41;
                    </OmniListItem>
                </OmniList>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={4}>
                    {getLocale(
                        'stories.foundation.accessibility.accessibleColorPalettes.sectionTitles.step3WhenToPickFromLighterVariants',
                    )}
                </SectionTitle>
                <StorySection>
                    <Paragraph>
                        Whenever we pick from the lighter variant options we
                        will <strong>always choose the darkest variant</strong>{' '}
                        available to get as close to the original preferred Text
                        color as possible. We pick from the ligther variant
                        options when the following conditions are met&#58;
                    </Paragraph>
                    <OmniList>
                        <OmniListItem>
                            The original preferred Text color is perceived as
                            light AND there are lighter variants to choose from
                            &#40;
                            <strong
                                className={cx({
                                    [`${baseCls}--negative`]:
                                        !shouldPickFromLighterVariantsB1,
                                    [`${baseCls}--positive`]:
                                        shouldPickFromLighterVariantsB1,
                                })}
                            >
                                {`${shouldPickFromLighterVariantsB1}`.toUpperCase()}
                            </strong>
                            &#41; <em>OR...</em>
                        </OmniListItem>
                        <OmniListItem>
                            The original preferred Text color is perceived as
                            dark, there are no darker variants AND there are
                            only lighter variants to choose from &#40;
                            <strong
                                className={cx({
                                    [`${baseCls}--negative`]:
                                        !shouldPickFromLighterVariantsB2,
                                    [`${baseCls}--positive`]:
                                        shouldPickFromLighterVariantsB2,
                                })}
                            >
                                {`${shouldPickFromLighterVariantsB2}`.toUpperCase()}
                            </strong>
                            &#41;
                        </OmniListItem>
                    </OmniList>
                </StorySection>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={4}>
                    {getLocale(
                        'stories.foundation.accessibility.accessibleColorPalettes.sectionTitles.step3WhenToPickFromDarkerVariants',
                    )}
                </SectionTitle>
                <StorySection>
                    <Paragraph>
                        Whenever we pick from the darker variant options we will{' '}
                        <strong>always choose the lightest variant</strong>{' '}
                        available to get as close to the original preferred Text
                        color as possible. We pick from the darker variant
                        options when the following conditions are met&#58;
                    </Paragraph>
                    <OmniList>
                        <OmniListItem>
                            The original preferred Text color is perceived as
                            dark AND there are darker variants to choose from
                            &#40;
                            <strong
                                className={cx({
                                    [`${baseCls}--negative`]:
                                        !shouldPickFromDarkerVariantsB1,
                                    [`${baseCls}--positive`]:
                                        shouldPickFromDarkerVariantsB1,
                                })}
                            >
                                {`${shouldPickFromDarkerVariantsB1}`.toUpperCase()}
                            </strong>
                            &#41; <em>OR...</em>
                        </OmniListItem>
                        <OmniListItem>
                            The original preferred Text color is perceived as
                            light, there are no lighter variants AND there are
                            only darker variants to choose from &#40;
                            <strong
                                className={cx({
                                    [`${baseCls}--negative`]:
                                        !shouldPickFromDarkerVariantsB2,
                                    [`${baseCls}--positive`]:
                                        shouldPickFromDarkerVariantsB2,
                                })}
                            >
                                {`${shouldPickFromDarkerVariantsB2}`.toUpperCase()}
                            </strong>
                            &#41;
                        </OmniListItem>
                    </OmniList>
                </StorySection>
            </StorySection>
        </StorySection>
    );
};

SectionAccessibleColorsHowToS3.propTypes = {
    baseCls: PropTypes.string,
    bgColor: PropTypes.object,
    colorData: PropTypes.shape({
        preferred: PropTypes.object,
        variants: PropTypes.array,
    }),
};

export default SectionAccessibleColorsHowToS3;
