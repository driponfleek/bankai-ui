# @epr0t0type/bankai-lib-color-utils
Utilities for dealing with color.

## Installing
```
npm i @epr0t0type/bankai-lib-color-utils
```

## Usage

### Color Data Utils
```
import {
    getColorSeedData,
    getColorLightness,
    getNewColorByChangingLightness,
    getColorVariantsSeedData,
    getColorCorrelationsData,
    getColorAndVariantCorrelationsData,
    genColorsData,
} from '@epr0t0type/bankai-lib-color-utils';
```

### Color Format Conversion Utils
```
import {
    convertColorToHSL,
    convertColorToHex,
    convertColorToRGB,
} from '@epr0t0type/bankai-lib-color-utils';
```

### Evaluation Utils
```
import {
    isValidHexColor,
    fixHexMissingHash,
    getColorContrastRatio,
    getUserFriendlyRatio,
    getIsReadable,
    getIsValidNonTextContrast,
    evaluateColorCompatibilities,
    getDarkerColor,
} from '@epr0t0type/bankai-lib-color-utils';
```

### Recommendation Utils
```
import { getRecommendedColor } from '@epr0t0type/bankai-lib-color-utils';
```

### tinycolor2
The `tinycolor2` library is also exported for your convenience if you should need something beyond what is provided here.

```
import { tinycolor2 } from '@epr0t0type/bankai-lib-color-utils';
```

## Built With
* [tinycolor2](https://github.com/bgrins/TinyColor)

## License
[MIT](../../../LICENSE)
