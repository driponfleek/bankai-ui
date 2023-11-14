import PropTypes from 'prop-types';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getGuidePlaygroundComp } from '../utils/guideUtils';

const SectionPlayground = (props) => {
    const { compName, ...rest } = props;
    const Button = getGuidePlaygroundComp(compName);

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Button {...rest} />
            </ComponentPreview>
        </StorySection>
    );
};

SectionPlayground.propTypes = {
    compName: PropTypes.string,
};

export default SectionPlayground;
