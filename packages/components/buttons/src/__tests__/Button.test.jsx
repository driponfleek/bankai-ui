import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import Button from '../Button';

const originalClick = Button.onClick;
const originalBlur = Button.onBlur;
const originalFocus = Button.onFocus;

describe('<Button />', () => {
    afterEach(() => {
        Button.onClick = originalClick;
        Button.onBlur = originalBlur;
        Button.onFocus = originalFocus;
    });

    it('should render without crashing', () => {
        render(<Button />);
    });

    it('should call Button.onClick when clicked and no handler is passed to props.onClick', async () => {
        const eventSpy = jest.fn(originalClick);
        const props = {
            text: 'Click Me!',
        };
        Button.onClick = eventSpy;
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(eventSpy).toHaveBeenCalledTimes(1);
        expect(eventSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                e: expect.anything(),
            }),
        );
    });

    it('should call props.onClick and return both event and data passed to props.data when clicked', async () => {
        const eventSpy = jest.fn();
        const defaultEventSpy = jest.fn(originalClick);
        Button.onClick = defaultEventSpy;
        const data = { test: 'yup' };
        const props = {
            text: 'Click Me!',
            data,
            onClick: eventSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(eventSpy).toHaveBeenCalledTimes(1);
        expect(eventSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                e: expect.anything(),
                data,
            }),
        );
        expect(defaultEventSpy).not.toHaveBeenCalled();
    });

    it('should call Button.onBlur when the button has focus and loses focus and no handler is passed to props.onBlur', async () => {
        const eventSpy = jest.fn(originalBlur);
        const props = {
            text: 'Click Me!',
        };
        Button.onBlur = eventSpy;
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);
        await user.tab(button);

        expect(eventSpy).toHaveBeenCalledTimes(1);
    });

    it('should call Button.onFocus when the button has focus and no handler is passed to props.onFocus', async () => {
        const eventSpy = jest.fn(originalFocus);
        const props = {
            text: 'Click Me!',
        };
        Button.onFocus = eventSpy;
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(eventSpy).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when props.isDisabled is true', async () => {
        const eventSpy = jest.fn();
        const props = {
            text: 'Click Me!',
            isDisabled: true,
            onClick: eventSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(eventSpy).not.toHaveBeenCalled();
    });

    it('should not call onBlur when props.isDisabled is true', async () => {
        const eventSpy = jest.fn();
        const props = {
            text: 'Click Me!',
            isDisabled: true,
            onBlur: eventSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);
        await user.tab(button);

        expect(eventSpy).not.toHaveBeenCalled();
    });

    it('should not call onFocus when props.isDisabled is true', async () => {
        const eventSpy = jest.fn();
        const props = {
            text: 'Click Me!',
            isDisabled: true,
            onFocus: eventSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(eventSpy).not.toHaveBeenCalled();
    });

    it('should not call onClick when props.isBusy is true', async () => {
        const eventSpy = jest.fn();
        const props = {
            text: 'Click Me!',
            isBusy: true,
            onClick: eventSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(eventSpy).not.toHaveBeenCalled();
    });

    it('should not call onBlur when props.isBusy is true', async () => {
        const eventSpy = jest.fn();
        const props = {
            text: 'Click Me!',
            isBusy: true,
            onBlur: eventSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);
        await user.tab(button);

        expect(eventSpy).not.toHaveBeenCalled();
    });

    it('should not call onFocus when props.isBusy is true', async () => {
        const eventSpy = jest.fn();
        const props = {
            text: 'Click Me!',
            isBusy: true,
            onFocus: eventSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(eventSpy).not.toHaveBeenCalled();
    });

    // it('should ', () => {});
});
