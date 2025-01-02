/* eslint-disable import/prefer-default-export */
import { genConstToDotNotationMap } from '../dataGenUtils';
import { AVATAR_TOKEN_NAMES } from '../../const/tokens/component/avatarConst';

export const genAvatarTokens = ({ sourceColors = {} }) => {
    const { background, text = {} } = sourceColors ?? {};
    const { recommendedColor = {} } = background ?? {};
    const TOKEN_NAMES = AVATAR_TOKEN_NAMES;
    const constToTokenMap = genConstToDotNotationMap(TOKEN_NAMES);

    return {
        [constToTokenMap.AVATAR_BG_COLOR]: recommendedColor.hex,
        [constToTokenMap.AVATAR_TEXT_COLOR]: text.hex,
    };
};
