import PropTypes from 'prop-types';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getIcon, getCalloutStoryPlaygroundComp } from '../../utils/storyUtils';

const SectionPlayground = (props) => {
    const { variant, ...rest } = props;
    const Callout = getCalloutStoryPlaygroundComp(variant);
    const Icon = getIcon(variant);
    const renderIcon = (iconProps) => <Icon {...iconProps} />;
    const compProps = {
        ...rest,
        renderIcon,
    };

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Callout {...compProps} />
            </ComponentPreview>
        </StorySection>
    );
};

SectionPlayground.propTypes = {
    variant: PropTypes.string,
};

export default SectionPlayground;
