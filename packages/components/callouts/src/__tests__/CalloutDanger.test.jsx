import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import CalloutDanger from '../CalloutDanger';

describe('<CalloutDanger />', () => {
    it('should render without crashing', () => {
        render(<CalloutDanger />);
    });
});
