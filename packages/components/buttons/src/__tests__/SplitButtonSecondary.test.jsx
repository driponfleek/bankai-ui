/* eslint-disable no-console */
import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import SplitButtonSecondary from '../SplitButtonSecondary';

const originalConsoleError = console.error.bind(console.error);

describe('<SplitButtonSecondary />', () => {
    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<SplitButtonSecondary />);
        console.error = originalConsoleError;
    });

    // it('should ', () => {});
});
