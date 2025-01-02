import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    SectionTitle,
    CodeTag,
    BannerInfo,
} from '@driponfleek/bankai-lib-storybook';
import { getLocale } from '../../../../../utils/localeUtils';

const SectionModifierClasses = () => {
    const bannerMsg = (
        <>
            Ensure your modifier classes follow the BEM syntax &#40;
            <CodeTag>block__element--modifier</CodeTag>&#41; to maintain clarity
            and consistency in your stylesheets. Use modifier classes
            thoughtfully to create a versatile and expressive design system.
        </>
    );

    return (
        <StorySection>
            <SectionTitle>Modifier Classes</SectionTitle>
            <StorySection>
                <Paragraph>
                    Modifier classes in {getLocale('designSystemName')} offer a
                    powerful way to specify styles for different variants of a
                    component or for its various states. Consider using modifier
                    classes when you need to alter the appearance or behavior of
                    a component based on specific conditions. Here are some
                    examples&#58;
                </Paragraph>
                <OmniList>
                    <OmniListItem>
                        <strong>Variant Styles&#58;</strong>
                        <OmniList>
                            <OmniListItem>
                                <CodeTag>bankai-button--primary&#58;</CodeTag>{' '}
                                Styles for the primary variant of a button.
                            </OmniListItem>
                            <OmniListItem>
                                <CodeTag>bankai-card--featured&#58;</CodeTag>{' '}
                                Styles for a featured variant of a card
                                component.
                            </OmniListItem>
                        </OmniList>
                    </OmniListItem>
                    <OmniListItem>
                        <strong>State Styles&#58;</strong>
                        <OmniList>
                            <OmniListItem>
                                <CodeTag>bankai-input--error&#58;</CodeTag>{' '}
                                Styles for an input component in an error state.
                            </OmniListItem>
                            <OmniListItem>
                                <CodeTag>bankai-checkbox--checked&#58;</CodeTag>{' '}
                                Styles for a checkbox component when it&apos;s
                                checked.
                            </OmniListItem>
                        </OmniList>
                    </OmniListItem>
                </OmniList>
                <BannerInfo msg={bannerMsg} />
            </StorySection>
        </StorySection>
    );
};

export default SectionModifierClasses;
