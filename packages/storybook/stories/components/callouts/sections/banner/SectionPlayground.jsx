import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getIcon, getBannerStoryPlaygroundComp } from '../../utils/storyUtils';

/**
 * @param {Object} props
 * @param {string} [props.variant] - Banner variant name used to resolve the playground component
 */
const SectionPlayground = (props) => {
    const { variant, ...rest } = props;
    const Banner = getBannerStoryPlaygroundComp(variant);
    const Icon = getIcon(variant);
    const renderIcon = (iconProps) => <Icon {...iconProps} />;
    const compProps = {
        ...rest,
        renderIcon,
    };

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Banner {...compProps} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
