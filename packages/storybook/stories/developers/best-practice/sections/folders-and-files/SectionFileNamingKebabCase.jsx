import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';

const SectionFileNamingKebabCase = () => (
    <StorySection>
        <SectionTitle headingLvl={3}>Kebab Case</SectionTitle>
        <StorySection>
            <Paragraph>
                <strong>Use kebab case for &#58;</strong>
            </Paragraph>
            <OmniList>
                <OmniListItem>
                    <abbr title="internationalization">i18n</abbr> files
                </OmniListItem>
                <OmniListItem>Media files</OmniListItem>
                <OmniListItem>SASS&#47;CSS files</OmniListItem>
            </OmniList>
        </StorySection>
    </StorySection>
);

export default SectionFileNamingKebabCase;
