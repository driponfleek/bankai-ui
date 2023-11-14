import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Hyperlink {...props}>Link Text</Hyperlink>
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
