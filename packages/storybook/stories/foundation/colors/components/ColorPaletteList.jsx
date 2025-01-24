import { Children, useMemo } from 'react';
import { ColorSwatch, genSBBaseCls } from '@driponfleek/bankai-lib-storybook';

// Styles
import './styles/color-palette-list.scss';

const ColorPaletteList = ({ listData = [] }) => (
    <div className={genSBBaseCls('color-palette-list')}>
        {Children.toArray(
            useMemo(
                () =>
                    listData.map((color) => <ColorSwatch {...color} isCard />),
                [listData],
            ),
        )}
    </div>
);

export default ColorPaletteList;
