import React from 'react';
import { BankaiEdit, BankaiTrash } from '@epr0t0type/bankai-ui-icons';

export default [
    {
        renderIcon: (iconCls) => <BankaiEdit contextCls={iconCls} />,
        text: 'Edit',
        value: 'EDIT_BUTTON',
    },
    {
        renderIcon: (iconCls) => <BankaiTrash contextCls={iconCls} />,
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
