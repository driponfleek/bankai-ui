import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <OmniList {...props}>
                    <OmniListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin id tincidunt justo.
                    </OmniListItem>
                    <OmniListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin id tincidunt justo.
                    </OmniListItem>
                    <OmniListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin id tincidunt justo.
                    </OmniListItem>
                    <OmniListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin id tincidunt justo.
                    </OmniListItem>
                </OmniList>
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
