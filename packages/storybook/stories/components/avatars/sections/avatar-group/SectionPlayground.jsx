import { AvatarGroup } from '@driponfleek/bankai-ui-avatars';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <AvatarGroup {...props} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
