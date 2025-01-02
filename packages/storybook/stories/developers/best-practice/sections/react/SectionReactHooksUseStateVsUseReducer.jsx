import {
    OmniList,
    OmniListItem,
    Paragraph,
} from '@driponfleek/bankai-ui-typography';
import {
    CodeTag,
    SectionTitle,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';

const SectionReactHooksUseStateVsUseReducer = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                &quot;useState&quot; <abbr title="versus">vs.</abbr>{' '}
                &quot;useReducer&quot;
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    When working with React, managing component state is a
                    fundamental aspect of building dynamic user interfaces.
                    React provides two primary hooks,{' '}
                    <CodeTag>useState</CodeTag> and{' '}
                    <CodeTag>useReducer</CodeTag>, for handling state in
                    functional components. Understanding when to use each hook
                    is crucial for effective state management and is key to
                    writing clean, maintainable React components.
                </Paragraph>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={4}>
                    When to Use &quot;useState&quot;
                </SectionTitle>
                <OmniList>
                    <OmniListItem>
                        Ideal for managing simple state variables.
                    </OmniListItem>
                    <OmniListItem>
                        Suitable for components with small state requirements.
                    </OmniListItem>
                    <OmniListItem>
                        Suitable for independent pieces of state or when
                        updating one state variable doesn&apos;t affect others.
                    </OmniListItem>
                </OmniList>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={4}>
                    When to Use &quot;useReducer&quot;
                </SectionTitle>
                <OmniList>
                    <OmniListItem>
                        Beneficial when managing more complex state logic that
                        involves multiple values and intricate state
                        transitions.
                    </OmniListItem>
                    <OmniListItem>
                        Best suited for components that require more advanced
                        state management.
                    </OmniListItem>
                    <OmniListItem>
                        Suitable for independent pieces of state or when
                        updating one state variable doesn&apos;t affect others.
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionReactHooksUseStateVsUseReducer;
