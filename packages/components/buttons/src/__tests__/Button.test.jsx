import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import Button from '../Button';

describe('<Button />', () => {
    it('should render without crashing', () => {
        render(<Button />);
    });

    it('should call props.onClick when clicked', async () => {
        const clickSpy = jest.fn(Button.defaultProps.onClick);
        const props = {
            text: 'Click Me!',
            onClick: clickSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(clickSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                e: expect.anything(),
            }),
        );
    });

    it('should call props.onClick and return both event and data passed to props.data when clicked', async () => {
        const clickSpy = jest.fn(Button.defaultProps.onClick);
        const data = { test: 'yup' };
        const props = {
            text: 'Click Me!',
            data,
            onClick: clickSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(clickSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                e: expect.anything(),
                data,
            }),
        );
    });

    it('should call props.onBlur when the button has focus and loses focus', async () => {
        const blurSpy = jest.fn(Button.defaultProps.onBlur);
        const props = {
            text: 'Click Me!',
            onBlur: blurSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);
        await user.tab(button);

        expect(blurSpy).toHaveBeenCalled();
    });

    it('should call props.onFocus when the button has focus', async () => {
        const focusSpy = jest.fn(Button.defaultProps.onFocus);
        const props = {
            text: 'Click Me!',
            onFocus: focusSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(focusSpy).toHaveBeenCalled();
    });

    it('should not call props.onClick when props.isDisabled is true', async () => {
        const clickSpy = jest.fn(Button.defaultProps.onClick);
        const props = {
            text: 'Click Me!',
            isDisabled: true,
            onClick: clickSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(clickSpy).not.toHaveBeenCalled();
    });

    it('should not call props.onBlur when props.isDisabled is true', async () => {
        const blurSpy = jest.fn(Button.defaultProps.onBlur);
        const props = {
            text: 'Click Me!',
            isDisabled: true,
            onBlur: blurSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(blurSpy).not.toHaveBeenCalled();
    });

    it('should not call props.onFocus when props.isDisabled is true', async () => {
        const focusSpy = jest.fn(Button.defaultProps.onFocus);
        const props = {
            text: 'Click Me!',
            isDisabled: true,
            onFocus: focusSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(focusSpy).not.toHaveBeenCalled();
    });

    it('should not call props.onClick when props.isBusy is true', async () => {
        const clickSpy = jest.fn(Button.defaultProps.onClick);
        const props = {
            text: 'Click Me!',
            isBusy: true,
            onClick: clickSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(clickSpy).not.toHaveBeenCalled();
    });

    it('should not call props.onBlur when props.isBusy is true', async () => {
        const blurSpy = jest.fn(Button.defaultProps.onBlur);
        const props = {
            text: 'Click Me!',
            isBusy: true,
            onBlur: blurSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(blurSpy).not.toHaveBeenCalled();
    });

    it('should not call props.onFocus when props.isBusy is true', async () => {
        const focusSpy = jest.fn(Button.defaultProps.onFocus);
        const props = {
            text: 'Click Me!',
            isBusy: true,
            onFocus: focusSpy,
        };
        const { user, getByRole } = render(<Button {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(focusSpy).not.toHaveBeenCalled();
    });

    // it('should ', () => {});
});
