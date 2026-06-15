import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

import { getInputGuidePlaygroundComp } from '../../utils/inputGuideUtils';

/**
 * @param {Object} props
 * @param {string} [props.compName] - Component name key used to resolve the playground component
 */
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

export default SectionPlayground;
