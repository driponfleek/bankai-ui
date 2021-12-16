import { VARIANTS } from '../../const/variantsConst';
import { getBtnModCls } from '../buttonUtils';

const baseCls = 'bankai-button';
const { PRIMARY, PRIMARY_DESTRUCTIVE, SECONDARY, SECONDARY_DESTRUCTIVE } =
    VARIANTS;

describe('getBtnModCls', () => {
    it('should set the primary modifier class when the variant is VARIANTS.PRIMARY', () => {
        const expected = {
            [`${baseCls}--primary`]: true,
            [`${baseCls}--secondary`]: false,
            [`${baseCls}--primary-destructive`]: false,
            [`${baseCls}--secondary-destructive`]: false,
        };
        const result = getBtnModCls(PRIMARY, baseCls);

        expect(result).toEqual(expected);
    });

    it('should set the secondary modifier class when the variant is VARIANTS.SECONDARY', () => {
        const expected = {
            [`${baseCls}--primary`]: false,
            [`${baseCls}--secondary`]: true,
            [`${baseCls}--primary-destructive`]: false,
            [`${baseCls}--secondary-destructive`]: false,
        };
        const result = getBtnModCls(SECONDARY, baseCls);

        expect(result).toEqual(expected);
    });

    it('should set the primary-destructive modifier class when the variant is VARIANTS.PRIMARY_DESTRUCTIVE', () => {
        const expected = {
            [`${baseCls}--primary`]: false,
            [`${baseCls}--secondary`]: false,
            [`${baseCls}--primary-destructive`]: true,
            [`${baseCls}--secondary-destructive`]: false,
        };
        const result = getBtnModCls(PRIMARY_DESTRUCTIVE, baseCls);

        expect(result).toEqual(expected);
    });

    it('should set the secondary-destructive modifier class when the variant is VARIANTS.SECONDARY_DESTRUCTIVE', () => {
        const expected = {
            [`${baseCls}--primary`]: false,
            [`${baseCls}--secondary`]: false,
            [`${baseCls}--primary-destructive`]: false,
            [`${baseCls}--secondary-destructive`]: true,
        };
        const result = getBtnModCls(SECONDARY_DESTRUCTIVE, baseCls);

        expect(result).toEqual(expected);
    });

    // it('should ', () => {});
});
