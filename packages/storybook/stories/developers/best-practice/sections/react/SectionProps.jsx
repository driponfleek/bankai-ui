import { LinkButton } from '@driponfleek/bankai-ui-buttons';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import {
    CodeTag,
    SectionTitle,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';
import { linkTo } from '@storybook/addon-links';

const SectionProps = () => {
    return (
        <StorySection>
            <SectionTitle>Props</SectionTitle>
            <StorySection>
                <OmniList>
                    <OmniListItem>
                        Include a <CodeTag>contextCls</CodeTag> prop in every
                        component to allow assigning CSS classes based on the
                        component&apos;s context. This prop provides the
                        flexibility to adjust styles for a component in
                        different contexts, ensuring a consistent yet adaptable
                        visual presentation.
                    </OmniListItem>
                    <OmniListItem>
                        Group props of similar data types together in the
                        defaultProps&#47;propTypes lists and sort them
                        alphabetically within each group. Organizing props by
                        type streamlines the development process, making it
                        easier to locate specific prop types and maintain
                        consistency across components.
                    </OmniListItem>
                    <OmniListItem>
                        Place props that are functions &#40;e.g., event
                        handlers, render props&#41; at the end of the
                        defaultProps&#47;propTypes list. This ordering aligns
                        with the component&apos;s behavior.
                    </OmniListItem>
                    <OmniListItem>
                        Provide default prop values for event handler props to
                        prevent potential crashes when calling the handler if a
                        developer forgets to provide a value for it.
                    </OmniListItem>
                </OmniList>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    Prop Naming Conventions
                </SectionTitle>
                <OmniList>
                    <OmniListItem>
                        Event handler props should always be prefixed with{' '}
                        <CodeTag>on</CodeTag>, such as{' '}
                        <CodeTag>onClick</CodeTag>, <CodeTag>onChange</CodeTag>.
                    </OmniListItem>
                    <OmniListItem>
                        Render props should always start with the{' '}
                        <CodeTag>render</CodeTag> prefix, for example,{' '}
                        <CodeTag>renderContent</CodeTag>,{' '}
                        <CodeTag>renderItem</CodeTag>.
                    </OmniListItem>
                    <OmniListItem>
                        Boolean props should follow the same naming convention
                        established for booleans in the{' '}
                        <LinkButton
                            text="JavaScript Best Practices page"
                            onClick={linkTo(
                                'Developers/Best Practices',
                                'JavaScript Best Practices',
                            )}
                        />
                        .
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionProps;
