import PropTypes from 'prop-types';
import { Checkbox, Radio } from '@driponfleek/bankai-ui-form-elements';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    const { isRadio, ...rest } = props;
    const Comp = isRadio ? Radio : Checkbox;

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Comp {...rest} />
            </ComponentPreview>
        </StorySection>
    );
};

SectionPlayground.defaultProps = {
    isRadio: false,
};

SectionPlayground.propTypes = {
    isRadio: PropTypes.bool,
};

export default SectionPlayground;
