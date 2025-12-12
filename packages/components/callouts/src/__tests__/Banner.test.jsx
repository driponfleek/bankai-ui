import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import Banner from '../Banner';

describe('<Banner />', () => {
    it('should render without crashing', () => {
        render(<Banner />);
    });
});
