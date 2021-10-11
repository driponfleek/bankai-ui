# Unit Test Utilities for React Apps
Library of helper utilities for unit testing applications with React framework.

## Peer Dependencies
```
"react-dom": "^17.0.1"
```

## Installing
```
yarn add @epr0t0type/bankai-lib-react-unit-test-utils
```

**Note:** You'll need to set up a `.npmrc` file with the appropriate Authentication Token in order to install private Github Packages.

## Finding
### findAllElementsWithClassName
Finds all elements with a specified class name.

```
import { createWrapper, findAllElementsWithClassName } from '@epr0t0type/bankai-lib-react-unit-test-utils';

const wrapper = createWrapper(MyComponent);
const domEls = findAllElementsWithClassName(wrapper, 'my-css-class');
```

### findAllElementsWithTagName
Finds all elements that match the specified tag name.

```
import { createWrapper, findAllElementsWithTagName } from '@epr0t0type/bankai-lib-react-unit-test-utils';

const wrapper = createWrapper(MyComponent);
const domEls = findAllElementsWithTagName(wrapper, 'div');
```

### findRenderedDOMComponentWithClassName
Finds 1 element with a specified CSS class name. Expects only 1 result and will throw error if there is more than one result.

```
import { createWrapper, findRenderedDOMComponentWithClassName } from '@epr0t0type/bankai-lib-react-unit-test-utils';

const wrapper = createWrapper(MyComponent);
const domEls = findRenderedDOMComponentWithClassName(wrapper, 'my-css-class');
```

### findRenderedDOMComponentWithTagName
Finds 1 element with a specified Tag name. Expects only 1 result and will throw error if there is more than one result.

```
import { createWrapper, findRenderedDOMComponentWithTagName } from '@epr0t0type/bankai-lib-react-unit-test-utils';

const wrapper = createWrapper(MyComponent);
const domEls = findRenderedDOMComponentWithTagName(wrapper, 'button');
```

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

## Rendering
### createWrapper
Renders a React Element into a detached DOM node in the document.

```
import { createWrapper } from '@epr0t0type/bankai-lib-react-unit-test-utils';

const wrapper = createWrapper(MyComponent, { ...props });
```

### createStatelessWrapper
Similar to createWrapper, but wraps your stateless/functional component in something that can be rendered with a ref. This is necessary due to stateless/functional components not being able to have a ref.

```
import { createStatelessWrapper } from '@epr0t0type/bankai-lib-react-unit-test-utils';

const wrapper = createStatelessWrapper(MyStatelessComponent, { ...props });
```

### renderAsObject
Used to render React components to pure JavaScript objects. Keep in mind some methods are not available to stateless components.

```
import { renderAsObject } from '@epr0t0type/bankai-lib-react-unit-test-utils';

const wrapper = renderAsObject(MyComponent, { ...props });
```

### shallowRender
Renders component “one level deep” and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered.

```
import { shallowRender } from '@epr0t0type/bankai-lib-react-unit-test-utils';

const wrapper = shallowRender(MyComponent, { ...props });
```

## Simulating
### simulateEvent
Used to simulate JavaScript events that would occur from users interacting with UI elements (ex: 'click', 'change', etc.).

```
import {
    createWrapper,
    findRenderedDOMComponentWithClassName,
    simulateEvent
} from '@epr0t0type/bankai-lib-react-unit-test-utils';

const wrapper = createWrapper(MyButtonComponent);
const buttonDOM = findRenderedDOMComponentWithClassName(wrapper, 'my-button-component');
simulateEvent('click', buttonDOM, { ...mockEventData });
```

## Dependencies
```
"create-react-class": "15.7.0",
"react-scripts": "4.0.1",
"react-test-renderer": "17.0.1"
```

## Further Reading
- [React Test Utilities](https://reactjs.org/docs/test-utils.html)
- [React Test Renderer](https://reactjs.org/docs/test-renderer.html)
