import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getBadgeStoryPlaygroundComp } from '../utils/badgeStoryUtils';

/**
 * @param {Object} props
 * @param {string} [props.variant] - Badge variant name used to resolve the playground component
 */
const SectionPlayground = (props) => {
    const { variant, ...rest } = props;
    const Badge = getBadgeStoryPlaygroundComp(variant);

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Badge {...rest}>10</Badge>
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
