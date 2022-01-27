import getCSSModifiersUtil from '../utils/getCSSModifiersUtil';
import { VARIANTS, BADGE_CSS_MODIFIERS } from '../const/variantsConst';

const { DANGER, INFO, AFFIRMATIVE, CAUTIONARY } = VARIANTS;
const baseCls = 'badge';

describe('getCSSModifiersUtil', () => {
    it('should return object with only the danger modifier true when passed the DANGER variant', () => {
        const expected = {
            [`${baseCls}${BADGE_CSS_MODIFIERS[DANGER]}`]: true,
            [`${baseCls}${BADGE_CSS_MODIFIERS[INFO]}`]: false,
            [`${baseCls}${BADGE_CSS_MODIFIERS[AFFIRMATIVE]}`]: false,
            [`${baseCls}${BADGE_CSS_MODIFIERS[CAUTIONARY]}`]: false,
        };
        const result = getCSSModifiersUtil(baseCls, DANGER);

        expect(result).toEqual(expected);
    });

    it('should return object with only the info modifier true when passed the INFO variant', () => {
        const expected = {
            [`${baseCls}${BADGE_CSS_MODIFIERS[DANGER]}`]: false,
            [`${baseCls}${BADGE_CSS_MODIFIERS[INFO]}`]: true,
            [`${baseCls}${BADGE_CSS_MODIFIERS[AFFIRMATIVE]}`]: false,
            [`${baseCls}${BADGE_CSS_MODIFIERS[CAUTIONARY]}`]: false,
        };
        const result = getCSSModifiersUtil(baseCls, INFO);

        expect(result).toEqual(expected);
    });

    it('should return object with only the affirmative modifier true when passed the AFFIRMATIVE variant', () => {
        const expected = {
            [`${baseCls}${BADGE_CSS_MODIFIERS[DANGER]}`]: false,
            [`${baseCls}${BADGE_CSS_MODIFIERS[INFO]}`]: false,
            [`${baseCls}${BADGE_CSS_MODIFIERS[AFFIRMATIVE]}`]: true,
            [`${baseCls}${BADGE_CSS_MODIFIERS[CAUTIONARY]}`]: false,
        };
        const result = getCSSModifiersUtil(baseCls, AFFIRMATIVE);

        expect(result).toEqual(expected);
    });

    it('should return object with only the cautionary modifier true when passed the CAUTIONARY variant', () => {
        const expected = {
            [`${baseCls}${BADGE_CSS_MODIFIERS[DANGER]}`]: false,
            [`${baseCls}${BADGE_CSS_MODIFIERS[INFO]}`]: false,
            [`${baseCls}${BADGE_CSS_MODIFIERS[AFFIRMATIVE]}`]: false,
            [`${baseCls}${BADGE_CSS_MODIFIERS[CAUTIONARY]}`]: true,
        };
        const result = getCSSModifiersUtil(baseCls, CAUTIONARY);

        expect(result).toEqual(expected);
    });

    // it('should ', () => {});
});
