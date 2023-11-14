const blockCls = 'button';
const nameSpace = 'bankai';

export const codeStrBEMExample = `<button class="${blockCls} ${blockCls}--primary">
    <span class="${blockCls}__icon">✓</span>
</button>`;

export const codeStrBEMWithNameSapce = `<button class="${nameSpace}-${blockCls} ${blockCls}--primary">
    <span class="${nameSpace}-${blockCls}__icon">✓</span>
</button>`;

export const stylesFolderAndFileNameCodeStr = `.
└── src
    ├── styles
    │   └── my-component.scss
    └── MyComponent.js`;

export const codeStrContextClsExample = `import { Button } from '@driponfleek/bankai-ui-buttons';

const contextCls = 'log-in-button';

<Button contextCls={contextCls} text="Log In" />

// CSS Class List Output: .bankai-button.log-in-button`;
