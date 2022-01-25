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

export const renderingBtnIconExampleCodeStr = `import { Button, VARIANTS }  from '@epr0t0type/bankai-ui-buttons';
import { BankaiCirclePlus } from '@epr0t0type/bankai-ui-icons';

const { PRIMARY } = VARIANTS;

const renderIcon = () => <BankaiCirclePlus />;

<Button
    text="Primary Button"
    variant={PRIMARY}
    renderIcon={renderIcon}
/>`;

export const renderingBtnBusyIconExampleCodeStr = `import { Button, VARIANTS }  from '@epr0t0type/bankai-ui-buttons';
import { BankaiCircleDash } from '@epr0t0type/bankai-ui-icons';

const { PRIMARY } = VARIANTS;

const renderBusyIcon = () => <BankaiCircleDash />;

<Button
    text="Primary Button"
    variant={PRIMARY}
    renderBusyIcon={renderBusyIcon}
    isBusy
/>`;

export const renderingBtnCustomContentExampleCodeStr = `import { Button, ButtonText, ButtonIcon, VARIANTS }  from '@epr0t0type/bankai-ui-buttons';
import { BankaiAndroid } from '@epr0t0type/bankai-ui-icons';

const { SECONDARY } = VARIANTS;
const renderIcon = () => <BankaiAndroid />;

<Button variant={SECONDARY}>
    <ButtonText>
        (∩^o^)⊃━☆゜.* Magic!
    </ButtonText>{' '}
    <ButtonIcon renderIcon={this.renderIcon} />
</Button>`;
