import { BankaiEdit, BankaiTrash } from '@driponfleek/bankai-ui-icons';

export default [
    {
        renderIcon: BankaiEdit,
        text: 'Edit',
        value: 'EDIT_BUTTON',
    },
    {
        renderIcon: BankaiTrash,
        text: 'Delete',
        isDestructive: true,
        value: 'DELETE_BUTTON',
    },
];

export const customContent = [
    {
        text: 'Funny',
        emoji: '🤣',
        value: 'FUNNY',
    },
    {
        text: 'Mind Blowing',
        emoji: '🤯',
        value: 'MIND_BLOWING',
    },
];
