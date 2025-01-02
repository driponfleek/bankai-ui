import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionWhyAreTokensImportant = () => (
    <StorySection>
        <SectionTitle>
            {getLocale(
                'stories.everyone.designTokens.whatAreDesignTokens.whyAreTokensImportant.title',
            )}
        </SectionTitle>
        <Paragraph>
            Design tokens are essential for creating a scalable and maintainable
            design system. They ensure&#58;
        </Paragraph>
        <OmniList isOrderedList>
            <OmniListItem>
                <strong>Consistency Across Platforms&#58;</strong> Tokens ensure
                that <abbr title="User Interface">UI</abbr> elements look and
                behave consistently across web, mobile, and other platforms.
            </OmniListItem>
            <OmniListItem>
                <strong>Efficiency in Updates&#58;</strong> Centralized tokens
                allow global updates. For example, changing a primary color
                updates the entire system automatically.
            </OmniListItem>
            <OmniListItem>
                <strong>Scalability&#58;</strong> As the design system grows,
                tokens reduce redundancy and simplify maintenance.
            </OmniListItem>
            <OmniListItem>
                <strong>Accessibility&#58;</strong> Tokens enforce standards
                like WCAG-compliant color contrasts, promoting accessible design
                practices.
            </OmniListItem>
            <OmniListItem>
                <strong>Theming Flexibility&#58;</strong> Tokens make it easy to
                create variations, such as light/dark themes or brand-specific
                styles, by updating token values.
            </OmniListItem>
        </OmniList>
    </StorySection>
);

export default SectionWhyAreTokensImportant;
