import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import { getLocale } from '../../../../../utils/localeUtils';
import CodeBlock from '../../../../../sb-components/docblocks/CodeBlock';
import { codeStrContextClsExample } from '../../code-strings/codeStrCSSBestPractices';

const SectionContextClasses = () => {
    return (
        <StorySection>
            <SectionTitle>Context Classes</SectionTitle>
            <StorySection>
                <Paragraph>
                    Enhance the adaptability of your styles by leveraging
                    context classes within {getLocale('designSystemName')}.
                    Context classes provide a powerful way to tailor the
                    appearance of an element based on its surroundings or
                    placement in the UI. For example, you can use a context
                    class to style a button differently when it&apos;s placed
                    within a specific section, ensuring a cohesive and
                    contextual user interface&#58;
                </Paragraph>
                <CodeBlock
                    codeString={codeStrContextClsExample}
                    shouldShowCopy={false}
                />
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    When to Use Context Classes
                </SectionTitle>
                <StorySection>
                    <OmniList>
                        <OmniListItem>
                            <strong>Surrounding Environment&#58;</strong> Apply
                            context classes when you want a component to adapt
                            its style based on its immediate surroundings in the
                            UI. This allows for a more flexible and contextually
                            relevant presentation.
                        </OmniListItem>
                    </OmniList>
                </StorySection>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    Benefits of Context Classes
                </SectionTitle>
                <StorySection>
                    <OmniList>
                        <OmniListItem>
                            <strong>Enhanced Adaptability&#58;</strong> Context
                            classes enable your components to seamlessly adapt
                            to different parts of the UI, ensuring a consistent
                            yet tailored user experience.
                        </OmniListItem>
                        <OmniListItem>
                            <strong>Improved Style Scope&#58;</strong> By using
                            context classes, you enhance the style scoping of
                            your components. Each context class creates a
                            well-defined scope for styles, preventing unintended
                            clashes and providing a cleaner, more maintainable
                            codebase.
                        </OmniListItem>
                        <Paragraph>
                            Utilize context classes judiciously to create a
                            design system that not only maintains consistency
                            but also gracefully adapts to diverse UI scenarios,
                            fostering a more dynamic and user-friendly
                            interface.
                        </Paragraph>
                    </OmniList>
                </StorySection>
            </StorySection>
        </StorySection>
    );
};

export default SectionContextClasses;
