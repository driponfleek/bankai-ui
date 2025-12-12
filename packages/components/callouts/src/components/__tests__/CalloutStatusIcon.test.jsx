import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import CalloutStatusIcon from '../CalloutStatusIcon';

describe('<CalloutStatusIcon />', () => {
    it('should render without crashing', () => {
        render(<CalloutStatusIcon />);
    });
});
