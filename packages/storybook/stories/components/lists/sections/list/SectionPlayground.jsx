import { List } from '@driponfleek/bankai-ui-lists';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <List {...props} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
