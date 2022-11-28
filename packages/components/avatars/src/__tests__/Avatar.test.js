import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import Avatar from '../Avatar';

const baseCls = 'bankai-avatar';
const text = 'DY';
const renderIcon = () => <BankaiUser />;
const imgURL =
    'https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg';

describe('<Avatar />', () => {
    it('should render without crashing', () => {
        render(<Avatar />);
    });

    it('should not render inner DOM if both props.children and props.imgURL are passed and have appropriate modifier class', () => {
        const props = {
            children: text,
            imgURL,
        };
        const { container } = render(<Avatar {...props} />);
        const avatarDOM = container.querySelector(`.${baseCls}`);
        const innerDOMs = container.querySelector(`.${baseCls}__inner`);

        expect(avatarDOM.classList.contains(`${baseCls}--img`)).toBe(true);
        expect(innerDOMs).toBeNull();
    });

    it('should render text passed to props.children', () => {
        const props = {
            children: text,
        };
        const { getByText } = render(<Avatar {...props} />);
        const innerDOM = getByText(text);

        expect(innerDOM).toBeDefined();
    });

    it('should render icon passed to props.children', () => {
        const props = {
            children: renderIcon(),
        };
        const { container } = render(<Avatar {...props} />);
        const iconDOMs = container.querySelector('.bankai-icon');

        expect(iconDOMs).toBeDefined();
    });

    it('should have the --has-border modifier class without any setting for props.hasBorder because it is defaulted to true', () => {
        render(<Avatar />);
        const { container } = render(<Avatar />);
        const element = container.querySelector(`.${baseCls}--has-border`);

        expect(element).toBeDefined();
    });

    // it('should ', () => {});
});
