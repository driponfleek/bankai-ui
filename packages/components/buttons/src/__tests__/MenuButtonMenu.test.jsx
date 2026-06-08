/* eslint-disable no-console */
import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import MenuButtonMenu from '../MenuButtonMenu';

const originalConsoleError = console.error.bind(console.error);
const baseCls = 'bankai-menu-button-option';
jest.mock('react-aria-menubutton', () => ({
    MenuItem: (props) => {
        const { children, contextCls } = props;
        const mockCls = contextCls ? `${baseCls} ${contextCls}` : baseCls;

        return <div className={mockCls}>{children}</div>;
    },
    // eslint-disable-next-line react/no-multi-comp
    Menu: (props) => {
        const { children } = props;

        return <div className="mock-menu">{children}</div>;
    },
}));

describe('<MenuButtonMenu />', () => {
    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<MenuButtonMenu />);
        console.error = originalConsoleError;
    });

    it('should render custom menuOption when passed to props.renderMenuOption', async () => {
        const customMenuOption = () => (
            <div className="custom-option">Custom Option</div>
        );
        const props = {
            renderMenuOption: customMenuOption,
            menuOptions: ['test'],
        };
        const { getByText } = render(<MenuButtonMenu {...props} />);
        const customOption = await getByText('Custom Option');

        expect(customOption).toBeInTheDocument();
        expect(customOption.className).toContain('custom-option');
    });

    // it('should ', () => {});
});
