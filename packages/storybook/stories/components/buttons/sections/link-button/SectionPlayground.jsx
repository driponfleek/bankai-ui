import { LinkButton } from '@driponfleek/bankai-ui-buttons';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <LinkButton {...props} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
