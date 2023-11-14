import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import {
    OmniList,
    OmniListItem,
    Paragraph,
} from '@driponfleek/bankai-ui-typography';

const SectionWhenToUse = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>When to Use Icons</SectionTitle>
            <StorySection>
                <Paragraph>
                    Icons are valuable for conveying information quickly and
                    enhancing the visual appeal of your user interface. Consider
                    using icons when&#58;
                </Paragraph>
                <OmniList>
                    <OmniListItem>
                        <strong>Enhancing Readability&#58;</strong> Icons can
                        aid in breaking up text, making it more scannable and
                        enhancing overall readability and reducing the
                        user&apos;s cognitive load.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Visual Hierarchy&#58;</strong> Icons can help
                        establish a visual hierarchy, drawing attention to
                        important actions or information.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Conveying Actions&#58;</strong> Use icons to
                        represent common actions, such as &quot;Save,&quot;
                        &quot;Delete,&quot; or &quot;Search.&quot;
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionWhenToUse;
