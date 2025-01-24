import PropTypes from 'prop-types';
import { BaseColorWithVariants as SBBaseColorWithVariants } from '@driponfleek/bankai-lib-storybook';

const BaseColorWithVariants = (props) => {
    const { colorData, isCard } = props;
    const { preferred, variants } = colorData ?? {};

    return (
        <SBBaseColorWithVariants
            base={preferred}
            variants={variants}
            isCard={isCard}
            shouldScrollList={false}
        />
    );
};

BaseColorWithVariants.defaultProps = {
    isCard: true,
};

BaseColorWithVariants.propTypes = {
    isCard: PropTypes.bool,
    colorData: PropTypes.shape({
        preferred: PropTypes.object,
        variants: PropTypes.array,
    }),
};

export default BaseColorWithVariants;
