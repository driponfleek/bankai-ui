import {
    render,
    fireEvent,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
import NumberPicker from '../NumberPicker';

const sleep = async (ms) =>
    new Promise((r) => {
        setTimeout(r, ms);
    });

describe('<NumberPicker />', () => {
    it('should render without crashing', () => {
        render(<NumberPicker />);
    });

    it('should call props.onFocus when the input is focused', async () => {
        const onFocusSpy = jest.fn(NumberPicker.defaultProps.onFocus);
        const { container, user } = render(
            <NumberPicker onFocus={onFocusSpy} />,
        );
        const inputEl = container.querySelector('.rw-widget-input');
        await user.click(inputEl);

        expect(onFocusSpy).toHaveBeenCalled();
    });

    it('should call props.onBlur when the user leaves the input', async () => {
        const onBlurSpy = jest.fn(NumberPicker.defaultProps.onBlur);
        const { getByRole, user } = render(<NumberPicker onBlur={onBlurSpy} />);
        const inputEl = getByRole('spinbutton');
        await user.click(inputEl);
        await user.click(document.body);

        expect(onBlurSpy).toHaveBeenCalled();
    });

    it('should call props.onKeyDown when the user presses a key while focused', async () => {
        const onKeyDownSpy = jest.fn(NumberPicker.defaultProps.onKeyDown);
        const { getByRole, user } = render(
            <NumberPicker onKeyDown={onKeyDownSpy} />,
        );
        const inputEl = getByRole('spinbutton');
        await user.click(inputEl);
        await user.keyboard('[Tab]');

        expect(onKeyDownSpy).toHaveBeenCalled();
    });

    it('should call props.onChange and props.onChangeComplete when the user increments the number', async () => {
        const onChangeSpy = jest.fn(NumberPicker.defaultProps.onChange);
        const onChangeCompleteSpy = jest.fn(
            NumberPicker.defaultProps.onChangeComplete,
        );
        const { getByRole, user } = render(
            <NumberPicker
                onChange={onChangeSpy}
                onChangeComplete={onChangeCompleteSpy}
            />,
        );
        const incrementBtn = getByRole('button', { name: 'Increment value' });
        await user.click(incrementBtn);

        expect(onChangeSpy).toHaveBeenCalled();

        await sleep(250);

        expect(onChangeCompleteSpy).toHaveBeenCalled();
    });

    it('should call props.onKeyUp when the user presses a key while focused', async () => {
        const onKeyUpSpy = jest.fn(NumberPicker.defaultProps.onKeyUp);
        const { getByRole, user } = render(
            <NumberPicker onKeyUp={onKeyUpSpy} />,
        );
        const inputEl = getByRole('spinbutton');
        await user.click(inputEl);
        await fireEvent.keyUp(inputEl, {
            key: 'Enter',
            code: 'Enter',
            charCode: 13,
        });

        expect(onKeyUpSpy).toHaveBeenCalled();
    });

    it('should call props.onKeyPress when the user presses a key while focused', async () => {
        const onKeyPressSpy = jest.fn(NumberPicker.defaultProps.onKeyPress);
        const { getByRole, user } = render(
            <NumberPicker onKeyPress={onKeyPressSpy} />,
        );
        const inputEl = getByRole('spinbutton');
        await user.click(inputEl);
        await fireEvent.keyPress(inputEl, {
            key: 'Enter',
            code: 'Enter',
            charCode: 13,
        });

        expect(onKeyPressSpy).toHaveBeenCalled();
    });

    it('should not call props.onChange and props.onChangeCompleteSpy if the user types in the same value that already is in the input', async () => {
        const onChangeSpy = jest.fn(NumberPicker.defaultProps.onChange);
        const onChangeCompleteSpy = jest.fn(
            NumberPicker.defaultProps.onChangeComplete,
        );
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(
            <NumberPicker
                onChange={onChangeSpy}
                onChangeComplete={onChangeCompleteSpy}
                value={1}
                ref={setRef}
            />,
        );
        compRef.handleChange(1);

        expect(onChangeSpy).not.toHaveBeenCalled();

        await sleep(250);

        expect(onChangeCompleteSpy).not.toHaveBeenCalled();
    });

    // it('should ', () => {});
});
