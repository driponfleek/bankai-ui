import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import AvatarGroup from '../AvatarGroup';

const renderIcon = () => <BankaiUser />;
const avatars = [
    {
        id: '01',
        text: 'DY',
    },
    {
        id: '02',
        renderIcon,
    },
    {
        id: '03',
        imgURL: 'https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg',
    },
];

describe('<AvatarGroup />', () => {
    it('should render without crashing', () => {
        render(<AvatarGroup />);
    });

    it('should render avatars based on data passed', () => {
        render(<AvatarGroup avatars={avatars} />);
        const childItems = document.getElementsByClassName(`bankai-avatar`);

        expect(childItems).toHaveLength(3);
    });

    // it('should ', () => {});
});
