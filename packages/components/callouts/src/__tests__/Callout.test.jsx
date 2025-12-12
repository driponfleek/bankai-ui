import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import Callout from '../Callout';

describe('<Callout />', () => {
    it('should render without crashing', () => {
        render(<Callout />);
    });
});
