import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiCirclePlus } from '@epr0t0type/bankai-ui-icons';
import LinkButton from '../LinkButton';

const baseCls = 'bankai-link-button';
const renderIcon = () => <BankaiCirclePlus />;

describe('<LinkButton />', () => {
    it('should render without crashing', () => {
        render(<LinkButton />);
    });

    it('should render the icon DOM when props.renderIcon is defined', () => {
        const props = {
            renderIcon,
        };
        const { getByRole, container } = render(<LinkButton {...props} />);
        const button = getByRole('button');
        const iconDOM = container.querySelector(`.${baseCls}__icon`);

        expect(button).toContainElement(iconDOM);
    });

    it('should not render icon container DOM when props.renderIcon is not provided', () => {
        const { container } = render(<LinkButton />);
        const iconContainerEls = container.getElementsByClassName(
            `${baseCls}__icon-container`,
        );

        expect(iconContainerEls).toHaveLength(0);
    });

    it('should not render icon container DOM when children are nested in the link button and props.renderIcon is provided', () => {
        const props = {
            renderIcon,
        };
        const { container } = render(
            <LinkButton {...props}>Click Me</LinkButton>,
        );
        const iconContainerEls = container.getElementsByClassName(
            `${baseCls}__icon-container`,
        );

        expect(iconContainerEls).toHaveLength(0);
    });

    it('should render text container DOM when props.text is provided', () => {
        const props = {
            text: 'Click Me',
        };
        const { getByRole, container } = render(<LinkButton {...props} />);
        const button = getByRole('button');
        const textDOM = container.querySelector(`.${baseCls}__text-container`);

        expect(button).toContainElement(textDOM);
    });

    it('should not render text container DOM when props.text is not provided', () => {
        const { container } = render(<LinkButton />);
        const textContainerEls = container.getElementsByClassName(
            `${baseCls}__text-container`,
        );

        expect(textContainerEls).toHaveLength(0);
    });

    it('should not render text container DOM when children are nested in the Button and props.text is provided', () => {
        const props = {
            text: 'Click Me',
        };
        const { container } = render(
            <LinkButton {...props}>Click Me</LinkButton>,
        );
        const textContainerEls = container.getElementsByClassName(
            `${baseCls}__text-container`,
        );

        expect(textContainerEls).toHaveLength(0);
    });

    it('should call onClick handler when link button is clicked', async () => {
        const clickSpy = jest.fn(LinkButton.defaultProps.onClick);
        const props = {
            text: 'Click Me!',
            onClick: clickSpy,
        };
        const { getByRole, user } = render(<LinkButton {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(clickSpy).toHaveBeenCalled();
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
        const { getByRole, user } = render(<LinkButton {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(result).toEqual(data);
    });

    // it('should ', () => {});
});
