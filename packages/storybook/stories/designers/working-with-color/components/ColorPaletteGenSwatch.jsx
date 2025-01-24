import { ColorSwatch, genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { IFLFormFieldComposer } from '@driponfleek/bankai-ui-form-elements';
import { Dropdown } from '@driponfleek/bankai-ui-form-elements-rw';
import ColorPaletteGenSwatchMenuOp from './ColorPaletteGenSwatchMenuOp';
import { convertScreamingSnakeToTitleCase } from '../utils/colorPaletteGenStoryUtils';

// Styles
import './styles/color-palette-gen-swatch.scss';

const DropdownInput = IFLFormFieldComposer(Dropdown);

const ColorPaletteGenSwatch = (props) => {
    const {
        color,
        token = '',
        isDisabled = false,
        options = [],
        onChange = () => Promise.resolve(),
    } = props;
    const baseCls = genSBBaseCls('color-palette-gen-swatch');
    const labelText = convertScreamingSnakeToTitleCase(
        token.replace('SEMANTIC_COLOR_', ''),
    );

    const handleChange = (value) => {
        onChange({ token, value });
    };

    return (
        <ColorSwatch contextCls={baseCls} color={color} isCard>
            <DropdownInput
                labelProps={{ content: labelText }}
                data={options}
                value={color}
                isDisabled={isDisabled}
                renderListItem={ColorPaletteGenSwatchMenuOp}
                onChange={handleChange}
            />
        </ColorSwatch>
    );
};

export default ColorPaletteGenSwatch;
