import PropTypes from 'prop-types';
import { Heading } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    const { headingLvl } = props;

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Heading {...props}>
                    Heading Text &#40;Level {headingLvl}&#41;
                </Heading>
            </ComponentPreview>
        </StorySection>
    );
};

SectionPlayground.propTypes = {
    headingLvl: PropTypes.number,
};

export default SectionPlayground;
