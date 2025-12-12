import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import BannerIcon from '../BannerIcon';

describe('<BannerIcon />', () => {
    it('should render without crashing', () => {
        render(<BannerIcon />);
    });
});
