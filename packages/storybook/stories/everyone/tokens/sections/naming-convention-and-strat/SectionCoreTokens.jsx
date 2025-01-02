import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    SectionTitle,
    CodeTag,
} from '@driponfleek/bankai-lib-storybook';
import DesignTokenDefinitionList from '../../components/DesignTokenDefinitionList';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionCoreTokens = () => (
    <StorySection>
        <SectionTitle>
            {getLocale(
                'stories.everyone.designTokens.namingAndStrategy.coreDesignTokens.title',
            )}
        </SectionTitle>
        <Paragraph>
            Core tokens represent raw, neutral, and unopinionated values. They
            act as the atomic building blocks of the design system and are never
            used directly in the UI.
        </Paragraph>
        <DesignTokenDefinitionList
            term={getLocale(
                'stories.everyone.designTokens.namingAndStrategy.namingConvention.title',
            )}
        >
            <CodeTag>core-[category]-[property]-[value/level]</CodeTag>
        </DesignTokenDefinitionList>
        <DesignTokenDefinitionList
            term={getLocale(
                'stories.everyone.designTokens.namingAndStrategy.nameAnatomyBreakdown.title',
            )}
        >
            <OmniList>
                <OmniListItem>
                    <CodeTag>core</CodeTag>&#58; Prefix indicating the token
                    belongs to the core level.
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[category]</CodeTag>&#58; Broad category of the
                    token (e.g., <strong>color</strong>,{' '}
                    <strong>spacing</strong>, <strong>typography</strong>).
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[property]</CodeTag>&#58; Specific property of the
                    category (e.g., <strong>neutral</strong>,{' '}
                    <strong>size</strong>, <strong>radius</strong>).
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[value/level]</CodeTag>&#58; Value or scale level
                    (e.g., <strong>100</strong>, <strong>16</strong>,{' '}
                    <strong>4</strong>).
                </OmniListItem>
            </OmniList>
        </DesignTokenDefinitionList>
    </StorySection>
);

export default SectionCoreTokens;
