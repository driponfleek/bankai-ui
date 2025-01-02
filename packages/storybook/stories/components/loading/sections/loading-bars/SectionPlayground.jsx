import { LoadingBars } from '@driponfleek/bankai-ui-loading';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <LoadingBars {...props} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
