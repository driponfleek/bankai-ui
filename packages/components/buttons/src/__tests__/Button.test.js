import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiCirclePlus } from '@epr0t0type/bankai-ui-icons';
import Button from '../Button';

// Constants
import { VARIANTS } from '../const/variantsConst';

const { PRIMARY, PRIMARY_DESTRUCTIVE, SECONDARY, SECONDARY_DESTRUCTIVE } =
    VARIANTS;
const baseCls = 'bankai-button';
const renderIcon = () => <BankaiCirclePlus />;

describe('<Button />', () => {
    it('should render without crashing', () => {
        render(<Button />);
    });

    it(`should render as a primary button when props.variant is ${PRIMARY}`, () => {
        const props = {
            variant: PRIMARY,
        };
        const { getByRole } = render(<Button {...props} />);
        const button = getByRole('button');

        expect(button).toHaveClass(`${baseCls}--primary`);
    });

    it(`should render as a primary destructive button when props.variant is ${PRIMARY_DESTRUCTIVE}`, () => {
        const props = {
            variant: PRIMARY_DESTRUCTIVE,
        };
        const { getByRole } = render(<Button {...props} />);
        const button = getByRole('button');

        expect(button).toHaveClass(`${baseCls}--primary-destructive`);
    });

    it(`should render as a secondary button when props.variant is ${SECONDARY}`, () => {
        const props = {
            variant: SECONDARY,
        };
        const { getByRole } = render(<Button {...props} />);
        const button = getByRole('button');

        expect(button).toHaveClass(`${baseCls}--secondary`);
    });

    it(`should render as secondary destructive button when props.variant is ${SECONDARY_DESTRUCTIVE}`, () => {
        const props = {
            variant: SECONDARY_DESTRUCTIVE,
        };
        const { getByRole } = render(<Button {...props} />);
        const button = getByRole('button');

        expect(button).toHaveClass(`${baseCls}--secondary-destructive`);
    });

    it('should render the icon DOM when props.renderIcon is defined', () => {
        const props = {
            renderIcon,
        };
        const { getByRole, container } = render(<Button {...props} />);
        const button = getByRole('button');
        const iconDOM = container.querySelector(`.${baseCls}__icon`);

        expect(button).toContainElement(iconDOM);
    });

    it('should not render icon container DOM when props.renderIcon is not provided', () => {
        const { container } = render(<Button />);
        const iconContainerEls = container.querySelector(
            `.${baseCls}__icon-container`,
        );

        expect(iconContainerEls).toBeNull();
    });

    it('should not render icon container DOM when children are nested in the Button and props.renderIcon is provided', () => {
        const props = {
            renderIcon,
        };
        const { container } = render(<Button {...props}>Click Me</Button>);
        const iconContainerEls = container.querySelector(
            `.${baseCls}__icon-container`,
        );

        expect(iconContainerEls).toBeNull();
    });

    it('should render busy spinner icon when props.isBusy is true', () => {
        const props = {
            isBusy: true,
        };
        const { getByRole, container } = render(<Button {...props} />);
        const button = getByRole('button');
        const iconDOM = container.querySelector('.bankai-icon-spinner');

        expect(button).toContainElement(iconDOM);
    });

    it('should render text container DOM when props.text is provided', () => {
        const props = {
            text: 'Click Me',
        };
        const { getByRole, container } = render(<Button {...props} />);
        const button = getByRole('button');
        const textDOM = container.querySelector(`.${baseCls}__text-container`);

        expect(button).toContainElement(textDOM);
    });

    it('should not render text container DOM when props.text is not provided', () => {
        const { container } = render(<Button />);
        const textContainerEls = container.querySelector(
            `.${baseCls}__text-container`,
        );

        expect(textContainerEls).toBeNull();
    });

    it('should not render text container DOM when children are nested in the Button and props.text is provided', () => {
        const props = {
            text: 'Click Me',
        };
        const { container } = render(<Button {...props}>Click this</Button>);
        const textContainerEls = container.querySelector(
            `.${baseCls}__text-container`,
        );

        expect(textContainerEls).toBeNull();
    });

    it('should not allow aria-label to be set when props.text is provided', () => {
        const props = {
            'aria-label': 'Click me to do a thing',
            text: 'Click Me!',
        };
        const { getByRole } = render(<Button {...props} />);
        const button = getByRole('button');

        expect(button).not.toHaveAttribute('aria-label');
    });

    it('should have aria-label provided when props["aria-label"] is defined and props.text is not provided', () => {
        const props = {
            'aria-label': 'Click me to do a thing',
        };
        const { getByRole } = render(<Button {...props} />);
        const button = getByRole('button');

        expect(button).toHaveAttribute('aria-label');
    });

    it('should call onClick handler when button is clicked and not disabled', async () => {
        const clickSpy = jest.fn(Button.defaultProps.onClick);
        const props = {
            text: 'Click Me!',
            onClick: clickSpy,
        };
        const { getByRole, user } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(clickSpy).toHaveBeenCalled();
    });

    it('should not call onClick handler when the button is clicked and props.isDisabled is true', () => {
        const clickSpy = jest.fn(Button.defaultProps.onClick);
        const props = {
            isDisabled: true,
            onClick: clickSpy,
        };
        const { getByRole, user } = render(<Button {...props} />);
        const button = getByRole('button');
        user.click(button);

        expect(clickSpy).not.toHaveBeenCalled();
    });

    it('should not call onClick handler when button is clicked and props.isBusy is true', () => {
        const clickSpy = jest.fn(Button.defaultProps.onClick);
        const props = {
            isBusy: true,
            onClick: clickSpy,
        };
        const { getByRole, user } = render(<Button {...props} />);
        const button = getByRole('button');
        user.click(button);

        expect(clickSpy).not.toHaveBeenCalled();
    });

    it('should return props.data in the props.onClick call when the button is clicked', async () => {
        const data = {
            action: 'SAVE',
        };
        let result;
        const onClick = (params) => {
            const { data: dataResult } = params ?? {};
            result = dataResult;
        };
        const props = {
            data,
            onClick,
        };
        const { getByRole, user } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(result).toEqual(data);
    });

    // it('should ', () => {});
});
