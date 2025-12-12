import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import CalloutAffirmative from '../CalloutAffirmative';

describe('<CalloutAffirmative />', () => {
    it('should render without crashing', () => {
        render(<CalloutAffirmative />);
    });
});
