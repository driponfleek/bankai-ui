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
        id: '01',
        imgURL: avatar01,
    },
    {
        ...baseAvatarProps,
        id: '05',
        imgURL: avatar05,
    },
    {
        ...baseAvatarProps,
        id: '06',
        children: 'DY',
    },
    {
        ...baseAvatarProps,
        id: '08',
        imgURL: avatar07,
    },
    {
        ...baseAvatarProps,
        id: '11',
        children: AvatarIcon(),
    },
];
