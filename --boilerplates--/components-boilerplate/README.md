# Bankai Component Boilerplate
Use this as the starting boilerplate for new components.

> **NOTE:** Make a copy of this boilerplate and make changes in your copy. Do not modify the contents of the boilerplate directly.

> **NOTE:** Make sure to remove `private: true` from the `package.json` so your package can be published.

## README Template
Below we've provided a starter template for component README files.

---

# @epr0t0type/bankai-ui-package-name
Bankai components for your UIs.

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
    "react-dom": "18"
    ...
},
```

## Installing
```
npm i @epr0t0type/bankai-ui-package-name
```

## Usage

### ComponentA
For the full list of component props, examples, guidance on usage and more please reference the the [Bankai UI documentation](https://bankai-ui.com/).

```
import { ComponentA } from '@epr0t0type/bankai-ui-package-name';
```

### ComponentB
For the full list of component props, examples, guidance on usage and more please reference the the [Bankai UI documentation](https://bankai-ui.com/).

```
import { ComponentB } from '@epr0t0type/bankai-ui-package-name';
```

## Built With
* [React](https://github.com/facebook/react)
* [SASS](https://github.com/sass/sass)
* [third-party-dependency](https://github.com/author/link-to-third-party-dependency)

## License
[MIT](../../../LICENSE)
