import { genConstToDotNotationMap } from '../dataGenUtils';
import {
    DND_TOKEN_DEFAULTS,
    DND_TOKEN_NAMES,
} from '../../const/tokens/component/dndConst';

const dndConstToTokenMap = genConstToDotNotationMap(DND_TOKEN_NAMES);

export const genDNDTokens = (presets = {}) => {
    const {
        [dndConstToTokenMap.DND_DROPZONE_BORDER_RADIUS]:
            borderRadii = DND_TOKEN_DEFAULTS.DND_DROPZONE_BORDER_RADIUS,
    } = presets;

    return {
        [dndConstToTokenMap.DND_DROPZONE_BORDER_RADIUS]: borderRadii,
    };
};

export const genDNDDropzoneTokens = ({
    sourceColors = {},
    isDenied = false,
}) => {
    const { background = {}, text = {}, border = {} } = sourceColors ?? {};
    const formattedVariant = isDenied ? `DENIED_` : '';

    return {
        [dndConstToTokenMap[`DND_DROPZONE_${formattedVariant}BG_COLOR`]]:
            background.hex,
        [dndConstToTokenMap[`DND_DROPZONE_${formattedVariant}BORDER_COLOR`]]:
            border.hex,
        [dndConstToTokenMap[`DND_DROPZONE_${formattedVariant}TEXT_COLOR`]]:
            text.hex,
    };
};
