import {
    StorySection,
    // SectionTitle,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import {
    Paragraph,
    // OmniList,
    // OmniListItem,
} from '@driponfleek/bankai-ui-typography';

const SectionIntro = () => {
    return (
        <StorySection contextCls={genSBBaseCls('color-swatch-list')}>
            <Paragraph>Coming Soon.</Paragraph>
        </StorySection>
    );
};

export default SectionIntro;
