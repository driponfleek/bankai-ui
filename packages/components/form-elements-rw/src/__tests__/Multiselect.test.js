import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Multiselect from '../Multiselect';
import menuData from '../mocks/menuData';

describe('<Multiselect />', () => {
    it('should render without crashing', () => {
        render(<Multiselect />);
    });

    it('should call props.onSelect and props.onChange when a user selects an item in the multiselect menu', async () => {
        const onSelectSpy = jest.fn(Multiselect.defaultProps.onSelect);
        const onChangeSpy = jest.fn(Multiselect.defaultProps.onChange);
        const { user } = render(
            <Multiselect
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

    it('should call props.onCreate when props.allowCreate is true and the user searches for an item not in the list', async () => {
        const onCreateSpy = jest.fn(Multiselect.defaultProps.onCreate);
        const { user } = render(
            <Multiselect
                onCreate={onCreateSpy}
                defaultSearchTerm="Test"
                data={menuData}
                allowCreate
                isOpen
            />,
        );
        const createOpEl = document.getElementsByClassName(
            'rw-list-option-create',
        )[0];
        await user.click(createOpEl);

        expect(onCreateSpy).toHaveBeenCalled();
    });

    // it('should ', () => {});
});
