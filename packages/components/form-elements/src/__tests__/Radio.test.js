import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Radio from '../Radio';

const baseCls = 'bankai-radio';

describe('<Radio />', () => {
    it('should render without crashing', () => {
        render(<Radio />);
    });

    it('should not render the checked icon when isChecked is not set to true', () => {
        const { container } = render(<Radio />);
        const iconDOMs = container.querySelector(`.${baseCls}__icon`);

        expect(iconDOMs).toBeNull();
    });

    it('should render the checked icon when isChecked is set to true', () => {
        const { container } = render(<Radio isChecked />);
        const iconDOMs = container.querySelector(`.${baseCls}__icon`);

        expect(iconDOMs).toBeDefined();
    });

    it('should render a custom checked icon instead of the default one when props.renderCheckedIcon is defined', () => {
        const testCls = 'custom-checked-icon';
        const { container } = render(
            <Radio
                renderCheckedIcon={() => <span className={testCls} />}
                isChecked
            />,
        );
        const iconDOMs = container.querySelector(`.${testCls}`);

        expect(iconDOMs).toBeDefined();
    });

    it('should call props.onChange when the Radio is clicked', async () => {
        const changeSpy = jest.fn(Radio.defaultProps.onChange);
        const props = {
            onChange: changeSpy,
        };
        const { container, user } = render(<Radio {...props} />);
        const inputDOM = container.querySelector(`.${baseCls}__input`);
        await user.click(inputDOM);

        expect(changeSpy).toHaveBeenCalled();
    });

    it('should not call props.onChange when props.isDisabled is true and the radio is clicked', () => {
        const changeSpy = jest.fn(Radio.defaultProps.onChange);
        const props = {
            onChange: changeSpy,
            isDisabled: true,
        };
        const { container, user } = render(<Radio {...props} />);
        const inputDOM = container.querySelector(`.${baseCls}__input`);
        user.click(inputDOM);

        expect(changeSpy).not.toHaveBeenCalled();
    });

    // it('should ', () => {});
});
