import { LoadingState } from '@driponfleek/bankai-ui-loading';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <LoadingState {...props} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
