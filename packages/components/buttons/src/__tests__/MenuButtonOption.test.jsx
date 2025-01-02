import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import MenuButtonOption from '../MenuButtonOption';

const baseCls = 'bankai-menu-button-option';
jest.mock('react-aria-menubutton', () => ({
    MenuItem: (props) => {
        // eslint-disable-next-line react/prop-types
        const { children, contextCls } = props;
        const mockCls = contextCls ? `${baseCls} ${contextCls}` : baseCls;

        return <div className={mockCls}>{children}</div>;
    },
}));

describe('<MenuButtonOption />', () => {
    it('should render without crashing', () => {
        render(<MenuButtonOption />);
    });

    // it('should ', () => {});
});
