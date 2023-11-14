import { VARIANTS } from '@driponfleek/bankai-ui-buttons';

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
