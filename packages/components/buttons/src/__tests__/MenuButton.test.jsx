import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import MenuButton from '../MenuButton';
import menuOptions from '../mocks/menuOptions';

describe('<MenuButton />', () => {
    it('should render without crashing', () => {
        render(<MenuButton />);
    });

    it('should call props.onSelection handler and return both event and option value when menu option is selected', async () => {
        const selectionSpy = jest.fn(MenuButton.defaultProps.onSelection);
        const props = {
            onSelection: selectionSpy,
            menuOptions,
        };
        const { user, getByRole } = render(<MenuButton {...props} />);
        const button = getByRole('button');
        await user.click(button);
        const menuOpBtn = await document.getElementsByClassName(
            'bankai-menu-button-option',
        )[0];
        await user.click(menuOpBtn);

        expect(selectionSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                e: expect.anything(),
                value: menuOptions[0].value,
            }),
        );
    });

    // it('should ', () => {});
});
