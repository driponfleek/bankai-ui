import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Checkbox from '../Checkbox';

const baseCls = 'bankai-checkbox';

describe('<Checkbox />', () => {
    it('should render without crashing', () => {
        render(<Checkbox />);
    });

    it('should not render the checked icon when isChecked is not set to true', () => {
        const { container } = render(<Checkbox />);
        const iconDOMs = container.querySelector(`.${baseCls}__icon`);

        expect(iconDOMs).toBeNull();
    });

    it('should render the checked icon when isChecked is set to true', () => {
        const { container } = render(<Checkbox isChecked />);
        const iconDOMs = container.querySelector(`.${baseCls}__icon`);

        expect(iconDOMs).toBeDefined();
    });

    it('should render a custom checked icon instead of the default one when props.renderCheckedIcon is defined', () => {
        const testCls = 'custom-checked-icon';
        const { container } = render(
            <Checkbox
                renderCheckedIcon={() => <span className={testCls} />}
                isChecked
            />,
        );
        const iconDOMs = container.querySelector(`.${testCls}`);

        expect(iconDOMs).toBeDefined();
    });

    it('should call props.onChange when the checkbox is clicked', async () => {
        const changeSpy = jest.fn(Checkbox.defaultProps.onChange);
        const props = {
            onChange: changeSpy,
        };
        const { container, user } = render(<Checkbox {...props} />);
        const inputDOM = container.querySelector(`.${baseCls}__input`);
        await user.click(inputDOM);

        expect(changeSpy).toHaveBeenCalled();
    });

    it('should not call props.onChange when props.isDisabled is true and the checkbox is clicked', async () => {
        const changeSpy = jest.fn(Checkbox.defaultProps.onChange);
        const props = {
            onChange: changeSpy,
            isDisabled: true,
        };
        const { container, user } = render(<Checkbox {...props} />);
        const inputDOM = container.querySelector(`.${baseCls}__input`);
        await user.click(inputDOM);

        expect(changeSpy).not.toHaveBeenCalled();
    });

    // it('should ', () => {});
});
