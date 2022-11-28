import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiCirclePlus } from '@epr0t0type/bankai-ui-icons';
import MenuButtonOption from '../MenuButtonOption';

const baseCls = 'bankai-menu-button-option';
jest.mock('react-aria-menubutton', () => ({
    MenuItem: (props) => {
        // eslint-disable-next-line react/prop-types
        const { children, contextCls } = props;
        const mockCls = contextCls ? `${baseCls} ${contextCls}` : baseCls;

        return <div className={mockCls}>{children}</div>;
    },
}));

describe('<MenuButtonOption />', () => {
    it('should render without crashing', () => {
        render(<MenuButtonOption />);
    });

    it('should render the icon DOM when props.renderIcon is defined', () => {
        const props = {
            renderIcon: (iconCls) => <BankaiCirclePlus contextCls={iconCls} />,
        };
        const { container } = render(<MenuButtonOption {...props} />);
        const option = container.querySelector(`.${baseCls}`);
        const iconDOM = container.querySelector(`.${baseCls}__icon`);

        expect(option).toContainElement(iconDOM);
    });

    it('should not render icon container DOM when props.renderIcon is not provided', () => {
        const { container } = render(<MenuButtonOption />);
        const iconContainerEls = container.querySelector(
            `.${baseCls}__icon-container`,
        );

        expect(iconContainerEls).toBeNull();
    });

    it('should not render icon container DOM when children are nested in the menu button and props.renderIcon is provided', () => {
        const props = {
            renderIcon: (iconCls) => <BankaiCirclePlus contextCls={iconCls} />,
        };
        const { container } = render(
            <MenuButtonOption {...props}>Test</MenuButtonOption>,
        );
        const iconContainerEls = container.querySelector(
            `.${baseCls}__icon-container`,
        );

        expect(iconContainerEls).toBeNull();
    });

    it('should render text container DOM when props.text is provided', () => {
        const props = {
            text: 'Click Me',
        };
        const { container } = render(<MenuButtonOption {...props} />);
        const option = container.querySelector(`.${baseCls}`);
        const textDOM = container.querySelector(`.${baseCls}__text-container`);

        expect(option).toContainElement(textDOM);
    });

    it('should not render text container DOM when props.text is not provided', () => {
        const { container } = render(<MenuButtonOption />);
        const textContainerEls = container.querySelector(
            `.${baseCls}__text-container`,
        );

        expect(textContainerEls).toBeNull();
    });

    it('should not render text container DOM when children are nested in the menu button and props.text is provided', () => {
        const props = {
            text: 'Click Me',
        };
        const { container } = render(
            <MenuButtonOption {...props}>Test</MenuButtonOption>,
        );
        const textContainerEls = container.querySelector(
            `.${baseCls}__text-container`,
        );

        expect(textContainerEls).toBeNull();
    });

    // it('should ', () => {});
});
