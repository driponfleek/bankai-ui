import PropTypes from 'prop-types';
import { Button, VARIANTS } from '@driponfleek/bankai-ui-buttons';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const { PRIMARY } = VARIANTS;

const SectionPlayground = (props) => {
    const { onClick, onClose, ...rest } = props;

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Button
                    variant={PRIMARY}
                    text="Click to Show Toaster"
                    onClick={onClick}
                    data={{ ...rest, onClose }}
                />
            </ComponentPreview>
        </StorySection>
    );
};

SectionPlayground.propTypes = {
    onClick: PropTypes.func,
    onClose: PropTypes.func,
};

export default SectionPlayground;
