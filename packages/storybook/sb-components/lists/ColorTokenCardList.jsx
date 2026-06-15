import { Children, useMemo } from 'react';
import { ColorSwatch, genSBBaseCls } from '@driponfleek/bankai-lib-storybook';

// Styles
import './styles/color-token-card-list.scss';

/**
 * @param {Object} props
 * @param {Array<Object>} [props.listData] - Array of color swatch data objects to render as cards
 */
const ColorTokenCardList = ({ listData = [] }) => (
    <div className={genSBBaseCls('color-token-card-list')}>
        {Children.toArray(
            useMemo(
                () =>
                    listData.map((color) => <ColorSwatch {...color} isCard />),
                [listData],
            ),
        )}
    </div>
);

export default ColorTokenCardList;
