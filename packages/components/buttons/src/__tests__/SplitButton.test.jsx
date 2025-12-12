/* eslint-disable no-console */
import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import SplitButton from '../SplitButton';
import menuOptions from '../mocks/menuOptions';

const originalConsoleError = console.error.bind(console.error);
const originalMainClick = SplitButton.onMainClick;
const originalMenuSelection = SplitButton.onMenuSelection;
const buttonText = 'Click Me!';
const menuARIALbl = 'More Options';

describe('<SplitButton />', () => {
    afterEach(() => {
        SplitButton.onMainClick = originalMainClick;
        SplitButton.onMenuSelection = originalMenuSelection;
    });

    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<SplitButton />);
        console.error = originalConsoleError;
    });

    it('should call SplitButton.onMainClick when the main button is clicked and no handler is passed to props.onMainClick', async () => {
        const eventSpy = jest.fn(originalMainClick);
        SplitButton.onMainClick = eventSpy;
        const props = {
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

        expect(eventSpy).toHaveBeenCalled();
    });

    it('should call props.onMainClick when the main button is clicked', async () => {
        const eventSpy = jest.fn();
        const props = {
            onMainClick: eventSpy,
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

        expect(eventSpy).toHaveBeenCalled();
    });

    it('should call SplitButton.onMenuSelection when a menu option is selected and no handler is passed to props.onMenuSelection', async () => {
        const eventSpy = jest.fn(SplitButton.onMenuSelection);
        SplitButton.onMenuSelection = eventSpy;
        const props = {
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

        expect(eventSpy).toHaveBeenCalled();
    });

    it('should call props.onMenuSelection when a menu option is selected', async () => {
        const eventSpy = jest.fn();
        const props = {
            onMenuSelection: eventSpy,
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

        expect(eventSpy).toHaveBeenCalled();
    });

    // it('should ', () => {});
});
