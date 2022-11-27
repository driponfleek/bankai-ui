import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiCirclePlus } from '@epr0t0type/bankai-ui-icons';
import { VARIANTS } from '../const/variantsConst';
import menuOps from '../mocks/menuOptions';
import MenuButton from '../MenuButton';
import MenuButtonOption from '../MenuButtonOption';

const { PRIMARY, PRIMARY_DESTRUCTIVE, SECONDARY, SECONDARY_DESTRUCTIVE } =
    VARIANTS;
const baseCls = 'bankai-menu-button';
const btnCls = 'bankai-button';
const renderIcon = () => <BankaiCirclePlus />;

describe('<MenuButton />', () => {
    it('should render without crashing', () => {
        render(<MenuButton />);
    });

    it(`should render as a primary menu button when props.variant is ${PRIMARY}`, () => {
        const props = {
            variant: PRIMARY,
        };
        const { container } = render(<MenuButton {...props} />);
        const button = container.querySelector(`.${baseCls}__button`);

        expect(button).toHaveClass(`${btnCls}--primary`);
    });

    it(`should render as a primary destructive menu button when props.variant is ${PRIMARY_DESTRUCTIVE}`, () => {
        const props = {
            variant: PRIMARY_DESTRUCTIVE,
        };
        const { container } = render(<MenuButton {...props} />);
        const button = container.querySelector(`.${baseCls}__button`);

        expect(button).toHaveClass(`${btnCls}--primary-destructive`);
    });

    it(`should render as a secondary menu button when props.variant is ${SECONDARY}`, () => {
        const props = {
            variant: SECONDARY,
        };
        const { container } = render(<MenuButton {...props} />);
        const button = container.querySelector(`.${baseCls}__button`);

        expect(button).toHaveClass(`${btnCls}--secondary`);
    });

    it(`should render as secondary destructive menu button when props.variant is ${SECONDARY_DESTRUCTIVE}`, () => {
        const props = {
            variant: SECONDARY_DESTRUCTIVE,
        };
        const { container } = render(<MenuButton {...props} />);
        const button = container.querySelector(`.${baseCls}__button`);

        expect(button).toHaveClass(`${btnCls}--secondary-destructive`);
    });

    it('should render the icon DOM when props.renderIcon is defined', () => {
        const props = {
            renderIcon,
        };
        const { container } = render(<MenuButton {...props} />);
        const button = container.querySelector(`.${baseCls}__button`);
        const iconDOM = container.querySelector(`.${btnCls}__icon`);

        expect(button).toContainElement(iconDOM);
    });

    it('should not render icon container DOM when props.renderIcon is not provided', () => {
        const { container } = render(<MenuButton />);
        const iconContainerEls = container.getElementsByClassName(
            `${btnCls}__icon-container`,
        );

        expect(iconContainerEls).toHaveLength(0);
    });

    it('should not render icon container DOM when children are nested in the menu button and props.renderIcon is provided', () => {
        const props = {
            renderIcon,
        };
        const { container } = render(
            <MenuButton {...props}>Click me</MenuButton>,
        );
        const iconContainerEls = container.getElementsByClassName(
            `${btnCls}__icon-container`,
        );

        expect(iconContainerEls).toHaveLength(0);
    });

    it('should render text container DOM when props.text is provided', () => {
        const props = {
            text: 'Click Me',
        };
        const { container } = render(<MenuButton {...props} />);
        const button = container.querySelector(`.${baseCls}__button`);
        const textDOM = container.querySelector(`.${btnCls}__text-container`);

        expect(button).toContainElement(textDOM);
    });

    it('should not render text container DOM when props.text is not provided', () => {
        const { container } = render(<MenuButton />);
        const textContainerEls = container.getElementsByClassName(
            `${btnCls}__text-container`,
        );

        expect(textContainerEls).toHaveLength(0);
    });

    it('should not render text container DOM when children are nested in the menu button and props.text is provided', () => {
        const props = {
            text: 'Click Me',
        };
        const { container } = render(
            <MenuButton {...props}>Click me</MenuButton>,
        );
        const textContainerEls = container.getElementsByClassName(
            `${btnCls}__text-container`,
        );

        expect(textContainerEls).toHaveLength(0);
    });

    it('should call props.onSelection handler', () => {
        const selectionSpy = jest.fn(MenuButton.defaultProps.onSelection);
        const props = {
            onSelection: selectionSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<MenuButton {...props} ref={setRef} />);
        compRef.props.onSelection();

        expect(selectionSpy).toHaveBeenCalled();
    });

    it('should call props.onMenuToggle handler when menu button is clicked', async () => {
        const menuToggleSpy = jest.fn(MenuButton.defaultProps.onMenuToggle);
        const props = {
            onMenuToggle: menuToggleSpy,
        };
        const { container, user } = render(<MenuButton {...props} />);
        const button = container.querySelector(`.${baseCls}__button`);
        await user.click(button);

        expect(menuToggleSpy).toHaveBeenCalled();
    });

    it('should not call props.onMenuToggle handler when menu button is clicked and props.isDisabled is true', async () => {
        const menuToggleSpy = jest.fn(MenuButton.defaultProps.onMenuToggle);
        const props = {
            onMenuToggle: menuToggleSpy,
            isDisabled: true,
        };
        const { container, user } = render(<MenuButton {...props} />);
        const button = container.querySelector(`.${baseCls}__button`);
        await user.click(button);

        expect(menuToggleSpy).not.toHaveBeenCalled();
    });

    it('should render default menu options when props.renderMenuOption is not defined', async () => {
        const props = {
            menuOptions: menuOps,
        };
        const { container, user } = render(<MenuButton {...props} />);
        const button = container.querySelector(`.${baseCls}__button`);
        await user.click(button);
        const optionEls = container.getElementsByClassName(
            `${baseCls}__menu-list-option`,
        );

        expect(optionEls).toHaveLength(2);
    });

    it('should render custom menu option UI when using props.renderMenuOption', async () => {
        const props = {
            menuOptions: menuOps,
            renderMenuOption: (opProps) => (
                <MenuButtonOption {...opProps} contextCls="custom-op" />
            ),
        };
        const { container, user } = render(<MenuButton {...props} />);
        const button = container.querySelector(`.${baseCls}__button`);
        await user.click(button);
        const optionEls = container.getElementsByClassName('custom-op');

        expect(optionEls).toHaveLength(2);
    });

    // it('should ', () => {});
});
