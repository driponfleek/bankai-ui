import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import MainContent from '../MainContent';

describe('<MainContent />', () => {
    it('should render without crashing', () => {
        render(<MainContent />);
    });
});
