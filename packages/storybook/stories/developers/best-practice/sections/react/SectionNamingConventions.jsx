import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import {
    CodeTag,
    SectionTitle,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';

const SectionNamingConventions = () => {
    return (
        <StorySection>
            <SectionTitle>Component Naming Conventions</SectionTitle>
            <OmniList>
                <OmniListItem>
                    Component names should use <strong>pascal case</strong>{' '}
                    convention.
                </OmniListItem>
                <OmniListItem>
                    Choose descriptive names for your components. A well-named
                    component makes the code more readable and helps other
                    developers understand its purpose.
                </OmniListItem>
                <OmniListItem>
                    When creating Higher-Order Components, consider using the{' '}
                    <CodeTag>Composer</CodeTag> suffix to indicate their
                    purpose.
                </OmniListItem>
                <OmniListItem>
                    Component file names should match the name of the component
                    they export.
                </OmniListItem>
            </OmniList>
        </StorySection>
    );
};

export default SectionNamingConventions;
