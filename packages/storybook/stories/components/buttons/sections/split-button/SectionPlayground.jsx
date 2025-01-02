import PropTypes from 'prop-types';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getSplitBtnStoryPlaygroundComp } from '../../utils/storyUtils';

const SectionPlayground = (props) => {
    const { variant, ...rest } = props;
    const Button = getSplitBtnStoryPlaygroundComp(variant);

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Button {...rest} />
            </ComponentPreview>
        </StorySection>
    );
};

SectionPlayground.propTypes = {
    variant: PropTypes.string,
};

export default SectionPlayground;
