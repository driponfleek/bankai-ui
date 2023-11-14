/* eslint-disable import/prefer-default-export */
import AvatarIcon from '../components/AvatarIcon';
import avatar01 from '../../../../media/images/avatars/avatar01.jpg';
import avatar05 from '../../../../media/images/avatars/avatar05.jpg';
import avatar07 from '../../../../media/images/avatars/avatar07.jpg';

const baseAvatarProps = {
    hasBorder: true,
};

export const avatars = [
    {
        ...baseAvatarProps,
        imgURL: avatar01,
    },
    {
        ...baseAvatarProps,
        imgURL: avatar05,
    },
    {
        ...baseAvatarProps,
        children: 'DY',
    },
    {
        ...baseAvatarProps,
        imgURL: avatar07,
    },
    {
        ...baseAvatarProps,
        children: AvatarIcon(),
    },
];
