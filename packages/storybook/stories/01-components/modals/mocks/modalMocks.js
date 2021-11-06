import { BTN_VARIANTS } from '@epr0t0type/bankai-ui-buttons';

const { PRIMARY, SECONDARY } = BTN_VARIANTS;

export default [
    {
        variant: PRIMARY,
        text: 'Yes',
        data: {
            action: 'Yes',
        },
    },
    {
        variant: SECONDARY,
        text: 'No',
        data: {
            action: 'No',
        },
    },
];
