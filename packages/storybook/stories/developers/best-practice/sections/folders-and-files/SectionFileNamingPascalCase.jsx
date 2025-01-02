import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import {
    CodeTag,
    SectionTitle,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';

const SectionFileNamingPascalCase = () => (
    <StorySection>
        <SectionTitle headingLvl={3}>Pascal Case</SectionTitle>
        <StorySection>
            <Paragraph>
                <strong>Use pascal case for &#58;</strong>
            </Paragraph>
            <OmniList>
                <OmniListItem>Files that represent Classes</OmniListItem>
                <OmniListItem>
                    React components
                    <OmniList>
                        <OmniListItem>
                            <abbr title="Higher-Order Components">HOCs</abbr>{' '}
                            should also have the <CodeTag>Composer</CodeTag>{' '}
                            suffix. For example,{' '}
                            <CodeTag>IFLFormFieldComposer.jsx</CodeTag>
                        </OmniListItem>
                    </OmniList>
                </OmniListItem>
            </OmniList>
        </StorySection>
    </StorySection>
);

export default SectionFileNamingPascalCase;
