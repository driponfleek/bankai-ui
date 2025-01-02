/* eslint-disable no-console */
import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import ButtonMain from '../ButtonMain';

const originalConsoleError = console.error.bind(console.error);

describe('<ButtonMain />', () => {
    it('should render without crashing', () => {
        console.error = jest.fn();
        render(<ButtonMain />);
        console.error = originalConsoleError;
    });

    it('should have the "aria-live" attribute when props.isDynamicText is true', () => {
        const props = {
            baseCls: 'test',
            isDynamicText: true,
        };
        const { container } = render(<ButtonMain {...props} />);
        const el = container.querySelector(
            `.${props.baseCls}__content-container`,
        );

        expect(el.getAttribute('aria-live')).toBe('polite');
    });

    // it('should ', () => {});
});
