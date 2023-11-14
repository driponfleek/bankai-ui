import PropTypes from 'prop-types';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getBadgeStoryPlaygroundComp } from '../utils/badgeStoryUtils';

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

SectionPlayground.propTypes = {
    variant: PropTypes.string,
};

export default SectionPlayground;
