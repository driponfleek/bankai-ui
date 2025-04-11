import { List } from '@driponfleek/bankai-ui-lists';
import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';

// Styles
import './styles/color-token-tile-list.scss';

const ColorTokenTileList = (props) => {
    const baseCls = genSBBaseCls('color-token-palette-list');

    return <List {...props} contextCls={baseCls} />;
};

export default ColorTokenTileList;
