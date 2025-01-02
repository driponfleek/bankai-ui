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

const SectionComponentTokens = () => (
    <StorySection>
        <SectionTitle>
            {getLocale(
                'stories.everyone.designTokens.namingAndStrategy.componentDesignTokens.title',
            )}
        </SectionTitle>
        <Paragraph>
            Component tokens define styles scoped to specific UI components
            (e.g., buttons, modals). They inherit values from semantic tokens
            and are tailored for precise use cases.
        </Paragraph>
        <DesignTokenDefinitionList
            term={getLocale(
                'stories.everyone.designTokens.namingAndStrategy.namingConvention.title',
            )}
        >
            <CodeTag>[component]-[role]-[variant]-[state]-[property]</CodeTag>
        </DesignTokenDefinitionList>
        <DesignTokenDefinitionList
            term={getLocale(
                'stories.everyone.designTokens.namingAndStrategy.nameAnatomyBreakdown.title',
            )}
        >
            <OmniList>
                <OmniListItem>
                    <CodeTag>[component]</CodeTag>&#58; The component&apos;s
                    name (e.g., <strong>button</strong>, <strong>card</strong>,{' '}
                    <strong>modal</strong>)
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[role]</CodeTag>&#58; High-level purpose of the
                    component role (e.g., <strong>primary</strong>,{' '}
                    <strong>secondary</strong>).
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[variant]</CodeTag>&#58; Style variations within
                    the role (e.g., <strong>destructive</strong>,{' '}
                    <strong>outline</strong>).
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[state]</CodeTag>&#58; Interaction state of the
                    component (e.g., <strong>resting</strong>,{' '}
                    <strong>hover</strong>, <strong>focus</strong>).
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[property]</CodeTag>&#58; Specific property
                    affected (e.g., <strong>bg-color</strong>,{' '}
                    <strong>border</strong>, <strong>font</strong>).
                </OmniListItem>
            </OmniList>
        </DesignTokenDefinitionList>
    </StorySection>
);

export default SectionComponentTokens;
