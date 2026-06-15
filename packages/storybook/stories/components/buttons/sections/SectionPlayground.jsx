import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

/**
 * @param {Object} props
 * @param {string} [props.variant] - Button variant name used to resolve the playground component
 * @param {Function} [props.getPlaygroundComp] - Function that receives a variant name and returns a button component
 */
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

export default SectionPlayground;
