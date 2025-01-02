import { Avatar } from '@driponfleek/bankai-ui-avatars';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Avatar {...props}>DY</Avatar>
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
