import {
    StorySection,
    SectionTitle,
    CodeTag,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';

const SectionWhenToUseNeutrals = () => {
    return (
        <StorySection contextCls={genSBBaseCls('color-swatch-list')}>
            <SectionTitle headingLvl={3}>When to Use Neutrals</SectionTitle>
            <Paragraph>Neutrals are suitable for&#58;</Paragraph>
            <OmniList>
                <OmniListItem>Text</OmniListItem>
                <OmniListItem>Backgrounds</OmniListItem>
                <OmniListItem>Borders and Dividers</OmniListItem>
                <OmniListItem>Disabled Elements</OmniListItem>
            </OmniList>
            <Paragraph>
                <strong>Never use Neutral Color design tokens directly.</strong>{' '}
                When you need a neutral color, consider these as the available
                options. For example, instead of using{' '}
                <CodeTag>core.color.neutral.100</CodeTag> as a page background,
                use it as the seed value for a semantic design token such as{' '}
                <CodeTag>semantic.color.canvas</CodeTag> and use the semantic
                design token instead.
            </Paragraph>
        </StorySection>
    );
};

export default SectionWhenToUseNeutrals;
