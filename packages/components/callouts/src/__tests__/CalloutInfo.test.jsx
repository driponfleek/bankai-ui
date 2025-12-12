import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import CalloutInfo from '../CalloutInfo';

describe('<CalloutInfo />', () => {
    it('should render without crashing', () => {
        render(<CalloutInfo />);
    });
});
