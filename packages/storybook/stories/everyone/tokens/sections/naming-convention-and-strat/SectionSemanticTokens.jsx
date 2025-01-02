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

const SectionSemanticTokens = () => (
    <StorySection>
        <SectionTitle>
            {getLocale(
                'stories.everyone.designTokens.namingAndStrategy.semanticDesignTokens.title',
            )}
        </SectionTitle>
        <Paragraph>
            Semantic tokens translate core tokens or direct values into
            meaningful roles such as <strong>primary</strong>,{' '}
            <strong>success</strong>, or <strong>accessible</strong>. They
            provide a layer of abstraction for specific use cases and ensure
            consistency and reusability across components.
        </Paragraph>
        <DesignTokenDefinitionList
            term={getLocale(
                'stories.everyone.designTokens.namingAndStrategy.namingConvention.title',
            )}
            convention=""
        >
            <CodeTag>
                semantic-[category]-[role]-[state/variant]-[property]
            </CodeTag>
        </DesignTokenDefinitionList>
        <DesignTokenDefinitionList
            term={getLocale(
                'stories.everyone.designTokens.namingAndStrategy.nameAnatomyBreakdown.title',
            )}
        >
            <OmniList>
                <OmniListItem>
                    <CodeTag>semantic</CodeTag>&#58; Prefix indicating the token
                    belongs to the semantic layer.
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[category]</CodeTag>&#58; Broad category of the
                    token (e.g., <strong>color</strong>,{' '}
                    <strong>spacing</strong>, <strong>typography</strong>).
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[role]</CodeTag>&#58; Context-specific role (e.g.,{' '}
                    <strong>primary</strong>, <strong>error</strong>,{' '}
                    <strong>accessible</strong>).
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[state/variant]</CodeTag>&#58; Interaction state or
                    contextual variant (e.g., <strong>hover</strong>,{' '}
                    <strong>resting</strong>).
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[property]</CodeTag>&#58; Specific property of the
                    category (e.g., <strong>bg-color</strong>,{' '}
                    <strong>border</strong>).
                </OmniListItem>
            </OmniList>
        </DesignTokenDefinitionList>
    </StorySection>
);

export default SectionSemanticTokens;
