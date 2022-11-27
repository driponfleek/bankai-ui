import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Textarea from '../Textarea';

const baseCls = 'bankai-textarea';

describe('<Textarea />', () => {
    it('should render without crashing', () => {
        render(<Textarea />);
    });

    it('should call props.onChange when user types a value in the textarea', async () => {
        const changeSpy = jest.fn(Textarea.defaultProps.onChange);
        const props = {
            onChange: changeSpy,
        };
        const { container, user } = render(<Textarea {...props} />);
        const textareaDOM = container.querySelector(`.${baseCls}`);
        await user.type(textareaDOM, 'a');

        expect(changeSpy).toHaveBeenCalled();
    });

    it('should set the correct attributes on the textarea via getExtantProps', () => {
        const { container } = render(
            <Textarea
                hasError
                isDisabled
                isReadOnly
                shouldAutoFocus
                shouldSpellCheck
            />,
        );
        const textareaDOM = container.querySelector(`.${baseCls}`);
        const ariaAttr = textareaDOM.getAttribute('aria-invalid');
        const disabledAttr = textareaDOM.hasAttribute('disabled');
        const readOnlyAttr = textareaDOM.hasAttribute('readonly');
        const spellCheckAttr = textareaDOM.getAttribute('spellcheck');

        expect(ariaAttr).toBe('true');
        expect(disabledAttr).toBe(true);
        expect(readOnlyAttr).toBe(true);
        expect(spellCheckAttr).toBe('true');
    });

    // it('should ', () => {});
});
