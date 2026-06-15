import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getIcon, getCalloutStoryPlaygroundComp } from '../../utils/storyUtils';

/**
 * @param {Object} props
 * @param {string} [props.variant] - Callout variant name used to resolve the playground component
 */
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

export default SectionPlayground;
