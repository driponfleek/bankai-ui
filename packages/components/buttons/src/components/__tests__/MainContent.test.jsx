/* eslint-disable no-console */
import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import MainContent from '../MainContent';

const originalConsoleError = console.error.bind(console.error);

describe('<MainContent />', () => {
    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<MainContent />);
        console.error = originalConsoleError;
    });

    // it('should ', () => {});
});
