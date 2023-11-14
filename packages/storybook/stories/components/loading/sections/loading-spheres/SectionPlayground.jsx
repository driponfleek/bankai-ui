import { LoadingSpheres } from '@driponfleek/bankai-ui-loading';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <LoadingSpheres {...props} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
