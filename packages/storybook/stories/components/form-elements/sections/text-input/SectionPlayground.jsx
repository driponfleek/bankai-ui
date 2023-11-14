import PropTypes from 'prop-types';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

import { getInputGuidePlaygroundComp } from '../../utils/inputGuideUtils';

const SectionPlayground = (props) => {
    const { compName, ...rest } = props;
    const Comp = getInputGuidePlaygroundComp(compName);

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Comp {...rest} />
            </ComponentPreview>
        </StorySection>
    );
};

SectionPlayground.propTypes = {
    compName: PropTypes.string,
};

export default SectionPlayground;
