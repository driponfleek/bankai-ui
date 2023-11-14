# @driponfleek/bankai-lib-color-utils
Utilities for dealing with color.

## Installing
```
npm i @driponfleek/bankai-lib-color-utils
```

## Usage

### Color Data Utils
```
import {
    genColorSeedData,
    getColorLightness,
    getNewColorByChangingLightness,
    getColorVariantsSeedData,
    getColorCorrelations,
    getPreferredColorAndVariantsCorrelations,
    genColorsData,
} from '@driponfleek/bankai-lib-color-utils';
```

### Color Format Conversion Utils
```
import {
    convertColorToHSL,
    convertColorToHex,
    convertColorToRGB,
} from '@driponfleek/bankai-lib-color-utils';
```

### Evaluation Utils
```
import {
    isValidHexColor,
    fixHexMissingHash,
    getColorContrast,
    getReadableContrastRatio,
    getIsA11yReadable,
    getIsA11yForUI,
    getControlVsOptionsA11yEvals,
    getDarkerColor,
} from '@driponfleek/bankai-lib-color-utils';
```

### Recommendation Utils
```
import { getRecommendedColor } from '@driponfleek/bankai-lib-color-utils';
```

### tinycolor2
The `tinycolor2` library is also exported for your convenience if you should need something beyond what is provided here.

```
import { tinycolor2 } from '@driponfleek/bankai-lib-color-utils';
```

## Built With
* [tinycolor2](https://github.com/bgrins/TinyColor)

## License
[MIT](../../../LICENSE)
