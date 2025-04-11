import { Children, useMemo } from 'react';
import { ColorSwatch, genSBBaseCls } from '@driponfleek/bankai-lib-storybook';

// Styles
import './styles/color-token-card-list.scss';

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
