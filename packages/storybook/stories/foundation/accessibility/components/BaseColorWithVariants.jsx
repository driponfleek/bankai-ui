import { BaseColorWithVariants as SBBaseColorWithVariants } from '@driponfleek/bankai-lib-storybook';

/**
 * @param {Object} props
 * @param {boolean} [props.isCard] - Whether to render swatches in card style
 * @param {Object} [props.colorData] - Color data object containing preferred color and variants
 * @param {Object} [props.colorData.preferred] - The preferred base color object
 * @param {Array} [props.colorData.variants] - Array of color variant objects
 */
const BaseColorWithVariants = (props) => {
    const { colorData, isCard = true } = props;
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

export default BaseColorWithVariants;
