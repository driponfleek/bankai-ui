import { Badge } from '@driponfleek/bankai-ui-badges';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Badge {...props}>10</Badge>
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
