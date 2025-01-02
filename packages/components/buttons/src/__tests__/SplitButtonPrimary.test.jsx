/* eslint-disable no-console */
import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import SplitButtonPrimary from '../SplitButtonPrimary';

const originalConsoleError = console.error.bind(console.error);

describe('<SplitButtonPrimary />', () => {
    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<SplitButtonPrimary />);
        console.error = originalConsoleError;
    });

    // it('should ', () => {});
});
