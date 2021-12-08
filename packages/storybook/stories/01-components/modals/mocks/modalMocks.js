import { VARIANTS } from '@epr0t0type/bankai-ui-buttons';

const { PRIMARY, SECONDARY } = VARIANTS;

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
