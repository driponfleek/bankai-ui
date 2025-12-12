import PropTypes from 'prop-types';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    const {
        variant,
        getPlaygroundComp = SectionPlayground.getPlaygroundComp,
        ...rest
    } = props;
    const Button = getPlaygroundComp(variant);

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Button {...rest} />
            </ComponentPreview>
        </StorySection>
    );
};

SectionPlayground.getPlaygroundComp = () => Promise.resolve();

SectionPlayground.propTypes = {
    variant: PropTypes.string,
    getPlaygroundComp: PropTypes.func,
};

export default SectionPlayground;
