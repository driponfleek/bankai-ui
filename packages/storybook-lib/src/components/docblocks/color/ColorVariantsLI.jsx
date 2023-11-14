import PropTypes from 'prop-types';
import ColorSwatch from './ColorSwatch';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';

const ColorVariantsLI = (props) => {
    const baseCls = genSBBaseCls('color-variants-list__item');
    const { item } = props;

    return (
        <li className={baseCls}>
            <ColorSwatch {...item} />
        </li>
    );
};

ColorVariantsLI.propTypes = {
    item: PropTypes.object,
};

export default ColorVariantsLI;
