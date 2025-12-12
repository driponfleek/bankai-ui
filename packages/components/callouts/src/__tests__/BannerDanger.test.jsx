import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import BannerDanger from '../BannerDanger';

describe('<BannerDanger />', () => {
    it('should render without crashing', () => {
        render(<BannerDanger />);
    });
});
