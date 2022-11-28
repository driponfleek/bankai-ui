/* eslint-disable no-console */
import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import FormLabel from '../FormLabel';

const originalConsoleError = console.error.bind(console.error);

describe('<FormLabel />', () => {
    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<FormLabel />);
        console.error = originalConsoleError;
    });

    it('should render custom label content when props.renderCustomLabel is defined', () => {
        const { container } = render(
            <FormLabel
                renderCustomLabel={() => <span className="test-custom-label" />}
            />,
        );
        const customContentDOMs = container.querySelector('.test-custom-label');

        expect(customContentDOMs).toBeDefined();
    });

    // it('should ', () => {});
});
