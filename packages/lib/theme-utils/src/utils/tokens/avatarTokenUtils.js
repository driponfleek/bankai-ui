/* eslint-disable import/prefer-default-export */
import { genConstToDotNotationMap } from '../dataGenUtils';
import { getTextColor } from '../helperUtils';
import { AVATAR_TOKEN_NAMES } from '../../const/tokens/component/avatarConst';

export const genAvatarTokens = (sourceColor) => {
    const { recommendedColor = {} } = sourceColor ?? {};
    const TOKEN_NAMES = AVATAR_TOKEN_NAMES;
    const constToTokenMap = genConstToDotNotationMap(TOKEN_NAMES);

    return {
        [constToTokenMap.AVATAR_BG_COLOR]: recommendedColor.hex,
        [constToTokenMap.AVATAR_TEXT_COLOR]: getTextColor(recommendedColor.hex),
    };
};
