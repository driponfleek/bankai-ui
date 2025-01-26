import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import './styles/color-palette-gen-swatch-menu-op.scss';

const ColorPaletteGenSwatchMenuOp = (props) => {
    const { value } = props ?? {};
    const baseCls = genSBBaseCls('color-palette-gen-swatch-menu-op');

    return (
        <span className={baseCls}>
            <span
                className={`${baseCls}__swatch`}
                style={{ backgroundColor: value }}
            />
            <span className={`${baseCls}__value`}>{value}</span>
        </span>
    );
};

export default ColorPaletteGenSwatchMenuOp;
