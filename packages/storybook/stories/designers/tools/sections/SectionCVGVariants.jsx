import PropTypes from 'prop-types';
import {
    StorySection,
    ColorVariantsList,
} from '@driponfleek/bankai-lib-storybook';

const SectionCVGVariants = (props) => {
    const { contextCls, variants } = props;

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

SectionCVGVariants.defaultProps = {
    variants: [],
};

SectionCVGVariants.propTypes = {
    contextCls: PropTypes.string,
    variants: PropTypes.arrayOf(
        PropTypes.shape({
            mainContent: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element,
            ]),
            metaList: PropTypes.arrayOf(
                PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
            ),
            hasAlpha: PropTypes.bool,
        }),
    ),
};

export default SectionCVGVariants;
