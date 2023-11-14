import { render } from '@driponfleek/bankai-lib-react-unit-test-utils';
import LinkButton from '../LinkButton';

describe('<LinkButton />', () => {
    it('should render without crashing', () => {
        render(<LinkButton />);
    });

    it('should call props.onClick when clicked', async () => {
        const clickSpy = jest.fn(LinkButton.defaultProps.onClick);
        const props = {
            text: 'Click Me!',
            onClick: clickSpy,
        };
        const { user, getByRole } = render(<LinkButton {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(clickSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                e: expect.anything(),
            }),
        );
    });

    it('should call props.onClick and return both event and data passed to props.data when clicked', async () => {
        const clickSpy = jest.fn(LinkButton.defaultProps.onClick);
        const data = { test: 'yup' };
        const props = {
            text: 'Click Me!',
            data,
            onClick: clickSpy,
        };
        const { user, getByRole } = render(<LinkButton {...props} />);
        const button = getByRole('button');
        await user.click(button);

        expect(clickSpy).toHaveBeenCalledWith(
            expect.objectContaining({
                e: expect.anything(),
                data,
            }),
        );
    });

    // it('should ', () => {});
});
