import ColorSwatch from './ColorSwatch';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

/**
 * @param {Object} props
 * @param {Object} [props.item] - Color swatch data object spread into ColorSwatch
 */
const ColorVariantsLI = (props) => {
    const baseCls = genSBBaseCls('color-variants-list__item');
    const { item } = props;

    return (
        <li className={baseCls}>
            <ColorSwatch {...item} />
        </li>
    );
};

export default ColorVariantsLI;
