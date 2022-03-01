# Unit Test Utilities for React Apps
Unit testing libraries and helper utilities.

## Getting Started

### Prerequisites
Check the `peerDependencies` section of the `package.json` and ensure that they are available somewhere in your project before using these components.

```
"peerDependencies": {
    "react": "16 - 17",
    "react-dom": "16 - 17",
    ...
},
```

## Installing
```
yarn add @epr0t0type/bankai-lib-react-unit-test-utils
```

**Note:** You'll need to set up a `.npmrc` file with the appropriate Authentication Token in order to install private Github Packages.

## Helpers
### getDefaultProps
Used to grab the default props from a React component.

```
import { getDefaultProps } from '@epr0t0type/bankai-lib-react-unit-test-utils';

const defaultProps = getDefaultProps(MyComponent);
```

## Mocking
### userAgentMocks
Used for mocking different user agents in unit tests. Helpful when you need to write unit tests for mobile scenarios (ex: iPhone, Android, etc.).

```
import { userAgentMocks } from '@epr0t0type/bankai-lib-react-unit-test-utils';

const { mobileAndroidUA, mobileIOSUA, setUA } = userAgentMocks;
```

### uuidMock
Used for mocking [uuid](https://github.com/uuidjs/uuid#readme) 3rd party library (uuid/v4 only).

```
import { uuidMock } from '@epr0t0type/bankai-lib-react-unit-test-utils';
```

## React Testing Library
All exports of `React Testing Library` have been made available.

```
import {
    act,
    userEvent,
    render,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
```

## Built With
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
