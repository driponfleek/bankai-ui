# @driponfleek/bankai-ui-toasters
Toaster components for your UIs.

## Getting Started

### Prerequisites
Check the `peerDependencies` section of the `package.json` and ensure that they are available somewhere in your project before using these components.

```
"peerDependencies": {
    "@driponfleek/bankai-lib-style-utils": "^0.1.0",
    "@driponfleek/bankai-lib-theme-utils": "^0.1.0",
    "classnames": "^2.3.1",
    "prop-types": "^15.7.2",
    "react": "18",
    "react-dom": "18",
    ...
},
```

## Installing
```
npm i @driponfleek/bankai-ui-toasters
```

## Usage

### Toaster
For the full list of component props, examples, guidance on usage and more please reference the the [Bankai UI documentation](https://bankai-ui.com/).

```
import { 
    Toaster,
    ToastContainer,
    TOASTER_VARIANTS,
    TOASTER_POSITIONS,
} from '@driponfleek/bankai-ui-toasters';
```

### Toaster Utilities
For more information please reference the the [Bankai UI documentation](https://bankai-ui.com/).

```
import {
    clearWaitingQueue,
    dismissToasters,
    finishToast,
    isToasterActive,
} from '@driponfleek/bankai-ui-toasters';
```

## Built With
* [React](https://github.com/facebook/react)
* [SASS](https://github.com/sass/sass)
* [react-toastify](https://github.com/fkhadra/react-toastify)

## License
[MIT](../../../LICENSE)
