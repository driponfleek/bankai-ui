import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import BannerAffirmative from '../BannerAffirmative';

describe('<BannerAffirmative />', () => {
    it('should render without crashing', () => {
        render(<BannerAffirmative />);
    });
});
