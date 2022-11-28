import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Combobox from '../Combobox';
import menuData from '../mocks/menuData';

describe('<Combobox />', () => {
    it('should render without crashing', () => {
        render(<Combobox />);
    });

    it('should call props.onSelect and props.onChange when a user selects an item in the combobox menu', async () => {
        const onSelectSpy = jest.fn(Combobox.defaultProps.onSelect);
        const onChangeSpy = jest.fn(Combobox.defaultProps.onChange);
        const { user } = render(
            <Combobox
                onSelect={onSelectSpy}
                onChange={onChangeSpy}
                data={menuData}
                isOpen
            />,
        );
        const optionEl = document.getElementsByClassName('rw-list-option')[0];
        await user.click(optionEl);

        expect(onChangeSpy).toHaveBeenCalled();
        expect(onSelectSpy).toHaveBeenCalled();
    });

    // it('should ', () => {});
});
