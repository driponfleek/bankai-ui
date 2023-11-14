import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionDesignTokenLifecycle = () => (
    <StorySection>
        <SectionTitle>
            {getLocale(
                'stories.everyone.designTokens.whatAreDesignTokens.designTokenLifecycle.title',
            )}
        </SectionTitle>
        <OmniList isOrderedList>
            <OmniListItem>
                <strong>Creation&#58;</strong> Designers define tokens in the
                design tool or hand off specifications.
            </OmniListItem>
            <OmniListItem>
                <strong>Implementation&#58;</strong> Developers map tokens to
                styles in code, ensuring 1:1 visual alignment.
            </OmniListItem>
            <OmniListItem>
                <strong>Maintenance&#58;</strong> Tokens are updated centrally,
                propagating changes across designs and the codebase.
            </OmniListItem>
            <OmniListItem>
                <strong>Usage&#58;</strong> Tokens are referenced by designers
                and developers, ensuring a consistent user experience.
            </OmniListItem>
        </OmniList>
    </StorySection>
);

export default SectionDesignTokenLifecycle;
