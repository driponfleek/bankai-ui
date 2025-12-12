import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import BannerCautionary from '../BannerCautionary';

describe('<BannerCautionary />', () => {
    it('should render without crashing', () => {
        render(<BannerCautionary />);
    });
});
