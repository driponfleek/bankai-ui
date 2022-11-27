import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import ToggleSwitch from '../ToggleSwitch';

describe('<ToggleSwitch />', () => {
    it('should render without crashing', () => {
        render(<ToggleSwitch />);
    });

    it('should call props.onChange when toggled', async () => {
        const changeSpy = jest.fn(ToggleSwitch.defaultProps.onChange);
        const expected = {
            id: 'test-id',
            name: 'test-name',
            value: 'test-value',
        };
        const props = {
            ...expected,
            onChange: changeSpy,
        };
        const { getByRole, user } = render(<ToggleSwitch {...props} />);
        const checkboxDOM = getByRole('checkbox');
        await user.click(checkboxDOM);

        expect(changeSpy).toHaveBeenCalledWith(expected);
    });

    it('should not allow props.icons to be set if props.isBusy is true', () => {
        const icons = {
            checked: <span className="test-checked" />,
            unchecked: <span className="test-unchecked" />,
        };
        const props = {
            icons,
            isBusy: true,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<ToggleSwitch {...props} ref={setRef} />);
        const { icons: propsIcons } = compRef.getExtantProps();

        expect(propsIcons).toBe(false);
    });

    it('should set props.disabled to true if props.isBusy is true', () => {
        const props = {
            isBusy: true,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<ToggleSwitch {...props} ref={setRef} />);
        const { disabled } = compRef.getExtantProps();

        expect(disabled).toBe(true);
    });

    it('should set props.disabled to true if props.isDisabled is true', () => {
        const props = {
            isDisabled: true,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<ToggleSwitch {...props} ref={setRef} />);
        const { disabled } = compRef.getExtantProps();

        expect(disabled).toBe(true);
    });

    // it('should ', () => {});
});
