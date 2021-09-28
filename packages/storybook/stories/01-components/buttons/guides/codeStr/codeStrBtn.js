export const examplesCodeStr = `import { Button, BTN_VARIANTS } from '@epr0t0type/bankai-ui-buttons';

const {
    LINK,
    PRIMARY,
    PRIMARY_DESTRUCTIVE,
    SECONDARY,
    SECONDARY_DESTRUCTIVE,
} = BTN_VARIANTS;

<Button text="Default Button" />
<Button text="Primary Button" variant={PRIMARY} />
<Button text="Secondary Button" variant={SECONDARY} />
<Button
    text="Primary Destructive Button"
    variant={PRIMARY_DESTRUCTIVE}
/>
<Button
    text="Secondary Destructive Button"
    variant={SECONDARY_DESTRUCTIVE}
/>
<Button text="Button Styled as a Link" variant={LINK} />`;

export const customComponentExampleCodeStr = `import { Button } from '@epr0t0type/bankai-ui-buttons';`;
