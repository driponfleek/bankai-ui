import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import CalloutCautionary from '../CalloutCautionary';

describe('<CalloutCautionary />', () => {
    it('should render without crashing', () => {
        render(<CalloutCautionary />);
    });
});
