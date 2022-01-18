export const examplesCodeStr = `import { Button, VARIANTS } from '@epr0t0type/bankai-ui-buttons';

const {
    PRIMARY,
    PRIMARY_DESTRUCTIVE,
    SECONDARY,
    SECONDARY_DESTRUCTIVE,
} = VARIANTS;

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
/>`;

export const defaultBtnCodeStr = `import { Button } from '@epr0t0type/bankai-ui-buttons';

<Button text="Default Button" />`;

export const primaryBtnCodeStr = `import { Button, VARIANTS } from '@epr0t0type/bankai-ui-buttons';

const { PRIMARY } = VARIANTS;

<Button
    text="Primary Button"
    variant={PRIMARY}
/>`;

export const secondaryBtnCodeStr = `import { Button, VARIANTS } from '@epr0t0type/bankai-ui-buttons';

const { SECONDARY } = VARIANTS;

<Button
    text="Secondary Button"
    variant={SECONDARY}
/>`;

export const primaryDestructiveBtnCodeStr = `import { Button, VARIANTS } from '@epr0t0type/bankai-ui-buttons';

const { PRIMARY_DESTRUCTIVE } = VARIANTS;

<Button
    text="Primary Destructive Button"
    variant={PRIMARY_DESTRUCTIVE}
/>`;

export const secondaryDestructiveBtnCodeStr = `import { Button, VARIANTS } from '@epr0t0type/bankai-ui-buttons';

const { SECONDARY_DESTRUCTIVE } = VARIANTS;

<Button
    text="Secondary Destructive Button"
    variant={SECONDARY_DESTRUCTIVE}
/>`;

export const customComponentExampleCodeStr = `import { Button } from '@epr0t0type/bankai-ui-buttons';`;
