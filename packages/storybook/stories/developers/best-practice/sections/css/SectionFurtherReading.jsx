import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

const SectionFurtherReading = () => {
    return (
        <StorySection>
            <SectionTitle>Further Reading</SectionTitle>
            <StorySection>
                <OmniList>
                    <OmniListItem>
                        <strong>BEM Methodology&#58;</strong> Learn more about
                        the BEM (Block, Element, Modifier) naming convention and
                        its advantages in creating scalable and maintainable
                        CSS.{' '}
                        <Hyperlink
                            href="http://getbem.com/"
                            shouldOpenInNewWindow
                        >
                            BEM Documentation
                        </Hyperlink>
                    </OmniListItem>
                    <OmniListItem>
                        <strong>CSS Variables and Fallbacks&#58;</strong> Dive
                        into the usage of CSS Variables and the importance of
                        providing fallback values.{' '}
                        <Hyperlink
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
                            shouldOpenInNewWindow
                        >
                            MDN Web Docs - CSS Variables
                        </Hyperlink>
                    </OmniListItem>
                    <OmniListItem>
                        <strong>SASS Mixins and Variables&#58;</strong> Explore
                        the benefits of using SASS mixins and variables for a
                        more modular and efficient stylesheet.{' '}
                        <Hyperlink
                            href="https://sass-lang.com/documentation"
                            shouldOpenInNewWindow
                        >
                            SASS Documentation
                        </Hyperlink>
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Rem vs Px&#58;</strong> Understand the
                        considerations between using rem and px units for
                        spacing and sizing in your CSS.{' '}
                        <Hyperlink
                            href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#Relative_units"
                            shouldOpenInNewWindow
                        >
                            MDN Web Docs - Use relative units
                        </Hyperlink>
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Kebab-Case&#58;</strong> Understand the
                        importance of kebab-case in naming classes and IDs for a
                        consistent and readable coding style.{' '}
                        <Hyperlink
                            href="https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case"
                            shouldOpenInNewWindow
                        >
                            MDN Web Docs - Kebab Case
                        </Hyperlink>
                    </OmniListItem>
                    <OmniListItem>
                        <strong>
                            Understanding Success Criterion 1.4.4 &#40;Resize
                            Text&#41;&#58;
                        </strong>{' '}
                        Gain insights into the accessibility guideline regarding
                        text resizing and its impact on users.{' '}
                        <Hyperlink
                            href="https://www.w3.org/WAI/WCAG21/quickref/#resize-text"
                            shouldOpenInNewWindow
                        >
                            Understanding SC 1.4.4 - W3C
                        </Hyperlink>
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionFurtherReading;
