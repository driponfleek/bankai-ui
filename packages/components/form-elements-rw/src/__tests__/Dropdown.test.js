import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Dropdown from '../Dropdown';
import menuData from '../mocks/menuData';

describe('<Dropdown />', () => {
    it('should render without crashing', () => {
        render(<Dropdown />);
    });

    it('should call props.onSelect and props.onChange when a user selects an item in the dropdown menu', async () => {
        const onSelectSpy = jest.fn(Dropdown.defaultProps.onSelect);
        const onChangeSpy = jest.fn(Dropdown.defaultProps.onChange);
        const { user } = render(
            <Dropdown
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
