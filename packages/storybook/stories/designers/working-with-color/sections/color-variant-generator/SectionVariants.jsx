import {
    StorySection,
    ColorVariantsList,
} from '@driponfleek/bankai-lib-storybook';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) forwarded to ColorVariantsList
 * @param {Array<Object>} [props.variants] - Array of color variant objects forwarded to ColorVariantsList
 */
const SectionVariants = (props) => {
    const { contextCls, variants = [] } = props;

    return (
        <StorySection>
            <ColorVariantsList
                contextCls={contextCls}
                variants={variants}
                shouldScrollList={false}
            />
        </StorySection>
    );
};

export default SectionVariants;
