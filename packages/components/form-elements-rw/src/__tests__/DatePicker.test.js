import {
    render,
    fireEvent,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
import DatePicker from '../DatePicker';

describe('<DatePicker />', () => {
    it('should render without crashing', () => {
        render(<DatePicker />);
    });

    it('should call props.onFocus when the input is focused', async () => {
        const onFocusSpy = jest.fn(DatePicker.defaultProps.onFocus);
        const { container, user } = render(<DatePicker onFocus={onFocusSpy} />);
        const inputEl = container.querySelector('.rw-widget-input');
        await user.click(inputEl);

        expect(onFocusSpy).toHaveBeenCalled();
    });

    it('should call props.onBlur when the user leaves the input', async () => {
        const onBlurSpy = jest.fn(DatePicker.defaultProps.onBlur);
        const { getByRole, user } = render(<DatePicker onBlur={onBlurSpy} />);
        const inputEl = getByRole('combobox');
        await user.click(inputEl);
        await user.click(document.body);

        expect(onBlurSpy).toHaveBeenCalled();
    });

    it('should call props.onKeyDown when the user presses a key while focused', async () => {
        const onKeyDownSpy = jest.fn(DatePicker.defaultProps.onKeyDown);
        const { getByRole, user } = render(
            <DatePicker onKeyDown={onKeyDownSpy} />,
        );
        const inputEl = getByRole('combobox');
        await user.click(inputEl);
        await user.keyboard('[Tab]');

        expect(onKeyDownSpy).toHaveBeenCalled();
    });

    it('should call props.onKeyPress when the user presses a key while focused', async () => {
        const onKeyPressSpy = jest.fn(DatePicker.defaultProps.onKeyPress);
        const { getByRole, user } = render(
            <DatePicker onKeyPress={onKeyPressSpy} />,
        );
        const inputEl = getByRole('combobox');
        await user.click(inputEl);
        await fireEvent.keyPress(inputEl, {
            key: 'Enter',
            code: 'Enter',
            charCode: 13,
        });

        expect(onKeyPressSpy).toHaveBeenCalled();
    });

    it('should call props.onSelect and props.onChange when a user selects a date from the calendar', async () => {
        const onSelectSpy = jest.fn(DatePicker.defaultProps.onSelect);
        const onChangeSpy = jest.fn(DatePicker.defaultProps.onChange);
        const { user } = render(
            <DatePicker onSelect={onSelectSpy} onChange={onChangeSpy} isOpen />,
        );
        const optionEl = document.getElementsByClassName('rw-cell')[0];
        await user.click(optionEl);

        expect(onChangeSpy).toHaveBeenCalled();
        expect(onSelectSpy).toHaveBeenCalled();
    });

    // it('should ', () => {});
});
