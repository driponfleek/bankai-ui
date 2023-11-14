import {
    OmniList,
    OmniListItem,
    Paragraph,
} from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionBridgeTheGap = () => (
    <StorySection>
        <SectionTitle>
            {getLocale(
                'stories.everyone.designTokens.whatAreDesignTokens.bridgeTheGap.title',
            )}
        </SectionTitle>
        <Paragraph>
            Tokens create a shared language, ensuring alignment between design
            tools and code. Designers use tokens to build consistent mockups,
            while developers implement them in code. This integration&#58;
        </Paragraph>
        <OmniList>
            <OmniListItem>
                Ensures fidelity between design and code.
            </OmniListItem>
            <OmniListItem>Simplifies collaboration across teams.</OmniListItem>
            <OmniListItem>
                Reduces handoff errors and inconsistencies.
            </OmniListItem>
        </OmniList>
    </StorySection>
);

export default SectionBridgeTheGap;
