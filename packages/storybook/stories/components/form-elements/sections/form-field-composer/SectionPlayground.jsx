import PropTypes from 'prop-types';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

import { getFFCGuidePlaygroundComp } from '../../utils/ffcGuideUtils';

const SectionPlayground = (props) => {
    const { variant } = props;
    const Comp = getFFCGuidePlaygroundComp(variant);

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Comp {...props} />
            </ComponentPreview>
        </StorySection>
    );
};

SectionPlayground.propTypes = {
    variant: PropTypes.string,
};

export default SectionPlayground;
