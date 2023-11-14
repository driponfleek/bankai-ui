import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import SplitButton from '../SplitButton';
import menuOptions from '../mocks/menuOptions';

const originalConsoleError = console.error.bind(console.error);
const buttonText = 'Click Me!';
const menuARIALbl = 'More Options';

describe('<SplitButton />', () => {
    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<SplitButton />);
        console.error = originalConsoleError;
    });

    it('should call props.onMainClick when the main button is clicked', async () => {
        const clickSpy = jest.fn(SplitButton.defaultProps.onMainClick);
        const props = {
            onMainClick: clickSpy,
            mainButtonProps: {
                text: buttonText,
            },
            menuButtonProps: {
                'aria-label': menuARIALbl,
            },
        };

        const { user, getByRole } = render(<SplitButton {...props} />);
        const mainBtn = getByRole('button', { name: buttonText });
        await user.click(mainBtn);

        expect(clickSpy).toHaveBeenCalled();
    });

    it('should call props.onMenuSelection when the a menu option is selected', async () => {
        const selectionSpy = jest.fn(SplitButton.defaultProps.onMenuSelection);
        const props = {
            onMenuSelection: selectionSpy,
            menuOptions,
            menuButtonProps: {
                'aria-label': menuARIALbl,
            },
        };

        const { user, getByRole } = render(<SplitButton {...props} />);
        const menuBtn = getByRole('button', { name: menuARIALbl });
        await user.click(menuBtn);
        const menuOpBtn = await document.getElementsByClassName(
            'bankai-menu-button-option',
        )[0];
        await user.click(menuOpBtn);

        expect(selectionSpy).toHaveBeenCalled();
    });

    // it('should ', () => {});
});
