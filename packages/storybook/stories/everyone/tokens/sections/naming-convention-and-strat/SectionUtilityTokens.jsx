import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    SectionTitle,
    CodeTag,
    BannerInfo,
} from '@driponfleek/bankai-lib-storybook';
import DesignTokenDefinitionList from '../../components/DesignTokenDefinitionList';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionUtilityTokens = () => (
    <StorySection>
        <SectionTitle>
            {getLocale(
                'stories.everyone.designTokens.namingAndStrategy.utilityDesignTokens.title',
            )}
        </SectionTitle>
        <Paragraph>
            Utility tokens represent{' '}
            <strong>
                specialized, domain-specific values that are used directly in
                the product interface
            </strong>{' '}
            but do not carry semantic meaning. They are designed for situations
            where abstraction isn&apos;t helpful — when a value serves a
            specific functional or visual purpose that should remain explicit
            and consistent.
        </Paragraph>
        <Paragraph>
            This layer is ideal for structured systems such as{' '}
            <strong>data visualizations</strong>, <strong>map overlays</strong>,
            or any context where a repeatable set of values is needed but not
            intended to map to brand or UX semantics.
        </Paragraph>
        <BannerInfo
            title="Note"
            msg="Utility tokens are scoped and descriptive. They are not general-purpose design values, and they should not be abstracted or aliased unless there's a clear use case for semantic mapping."
        />
        <DesignTokenDefinitionList
            term={getLocale(
                'stories.everyone.designTokens.namingAndStrategy.namingConvention.title',
            )}
            convention=""
        >
            <CodeTag>
                utility-[category]-[context]-[type]-[name]-[variant]
            </CodeTag>
        </DesignTokenDefinitionList>
        <DesignTokenDefinitionList
            term={getLocale(
                'stories.everyone.designTokens.namingAndStrategy.nameAnatomyBreakdown.title',
            )}
        >
            <OmniList>
                <OmniListItem>
                    <CodeTag>utility</CodeTag>&#58; Prefix indicating the token
                    belongs to the utility layer.
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[category]</CodeTag>&#58; The token category (e.g.,{' '}
                    <strong>color</strong>, <strong>size</strong>,{' '}
                    <strong>opacity</strong>).
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[context]</CodeTag>&#58; The applied domain or
                    usage domain <strong>data</strong>, <strong>map</strong>).
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[type]</CodeTag>&#58; <strong>(Optional)</strong>{' '}
                    Subcategory or organizational group (e.g.,{' '}
                    <strong>qualitative</strong>, <strong>scale</strong>,{' '}
                    <strong>legend</strong>, <strong>density</strong>).
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[name]</CodeTag>&#58; Identifier, label, or set
                    name (e.g., <strong>set2</strong>, <strong>xs</strong>,{' '}
                    <strong>dense</strong>, <strong>blues</strong>).
                </OmniListItem>
                <OmniListItem>
                    <CodeTag>[variant]</CodeTag>&#58;{' '}
                    <strong>(Optional)</strong> The unique identifier for the
                    value — this can be a numeric index for ordered sets or a
                    descriptive name for discrete or categorical values.
                </OmniListItem>
            </OmniList>
        </DesignTokenDefinitionList>
    </StorySection>
);

export default SectionUtilityTokens;
