import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import BannerInfo from '../BannerInfo';

describe('<BannerInfo />', () => {
    it('should render without crashing', () => {
        render(<BannerInfo />);
    });
});
