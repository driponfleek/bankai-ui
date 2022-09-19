# @epr0t0type/bankai-ui-form-elements-rw
Form Element components for your UIs.

## Getting Started

### Prerequisites
Check the `peerDependencies` section of the `package.json` and ensure that they are available somewhere in your project before using these components.

```
"peerDependencies": {
    "@epr0t0type/bankai-lib-style-utils": "^0.0.0",
    "@epr0t0type/bankai-lib-theme-utils": "^0.0.0",
    "classnames": "^2.3.1",
    "prop-types": "^15.7.2",
    "react": "18",
    "react-dom": "18",
    ...
},
```

## Installing
```
npm i @epr0t0type/bankai-ui-form-elements-rw
```

## Usage

### Combobox
For the full list of component props, examples, guidance on usage and more please reference the the [Bankai UI documentation](https://bankai-ui.com/?path=/docs/components-form-elements--combobox-story).

```
import { Combobox } from '@epr0t0type/bankai-ui-form-elements-rw';
```

### DatePicker
For the full list of component props, examples, guidance on usage and more please reference the the [Bankai UI documentation](https://bankai-ui.com/?path=/story/components-form-elements--date-picker-story).

```
import {
    DatePicker,
    dateLocalizer,
    defaultDateFormats,
    defaultDateLocales,
} from '@epr0t0type/bankai-ui-form-elements-rw';
```

### Dropdown
For the full list of component props, examples, guidance on usage and more please reference the the [Bankai UI documentation](https://bankai-ui.com/?path=/story/components-form-elements--dropdown-story).

```
import { Dropdown } from '@epr0t0type/bankai-ui-form-elements-rw';
```

### Multiselect
For the full list of component props, examples, guidance on usage and more please reference the the [Bankai UI documentation](https://bankai-ui.com/?path=/story/components-form-elements--multiselect-story).

```
import { Multiselect, MultiselectItem } from '@epr0t0type/bankai-ui-form-elements-rw';
```

### NumberPicker
For the full list of component props, examples, guidance on usage and more please reference the the [Bankai UI documentation](https://bankai-ui.com/?path=/story/components-form-elements--number-picker-story).

```
import {
    NumberPicker,
    numberLocalizer,
    defaultNumberFormats,
} from '@epr0t0type/bankai-ui-form-elements-rw';
```

### Utilities

#### Localization
```
import { Localization } from '@epr0t0type/bankai-ui-form-elements-rw';
```


## Built With
* [React](https://github.com/facebook/react)
* [SASS](https://github.com/sass/sass)
* [react-widgets](https://github.com/jquense/react-widgets)

## License
[MIT](../../../LICENSE)
