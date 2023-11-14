import PropTypes from 'prop-types';
import { BaseColorWithVariants as SBBaseColorWithVariants } from '@driponfleek/bankai-lib-storybook';

const BaseColorWithVariants = (props) => {
    const { colorData, isFancy } = props;
    const { preferred, variants } = colorData ?? {};

    return (
        <SBBaseColorWithVariants
            base={preferred}
            variants={variants}
            isFancy={isFancy}
            shouldScrollList={false}
        />
    );
};

BaseColorWithVariants.defaultProps = {
    isFancy: true,
};

BaseColorWithVariants.propTypes = {
    isFancy: PropTypes.bool,
    colorData: PropTypes.shape({
        preferred: PropTypes.object,
        variants: PropTypes.array,
    }),
};

export default BaseColorWithVariants;
