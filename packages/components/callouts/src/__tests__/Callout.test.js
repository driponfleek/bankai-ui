import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import Callout from '../Callout';
import VARIANTS from '../const/variantsConst';

const baseCls = 'bankai-callout';
const renderIcon = (iconCls) => <BankaiUser contextCls={iconCls} />;

describe('<Callout />', () => {
    it('should render without crashing', () => {
        render(<Callout />);
    });

    it('should not render any default UI and only render children when children are nested', () => {
        const props = {
            renderIcon,
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            title: "I'm a Callout!",
        };
        const childCls = 'test';
        const { container } = render(
            <Callout {...props}>
                <div className={childCls} />
            </Callout>,
        );
        const childDOMs = container.querySelector(`.${childCls}`);
        const iconContainerDOMs = container.querySelector(
            `.${baseCls}__icon-container`,
        );
        const textContainerDOMs = container.querySelector(
            `.${baseCls}__text-container`,
        );

        expect(childDOMs).toBeDefined();
        expect(iconContainerDOMs).toBeNull();
        expect(textContainerDOMs).toBeNull();
    });

    it('should not render messaging DOM if props.title and props.msg are not defined', () => {
        const { container } = render(<Callout />);
        const textContainerDOMs = container.querySelector(
            `.${baseCls}__text-container`,
        );

        expect(textContainerDOMs).toBeNull();
    });

    it('should render messaging DOM if props.title is defined', () => {
        const props = {
            title: "I'm a Callout!",
        };
        const { container } = render(<Callout {...props} />);
        const textContainerDOMs = container.querySelector(
            `.${baseCls}__text-container`,
        );
        const headingContainerDOM = container.querySelector(
            `.${baseCls}__title`,
        );

        expect(textContainerDOMs).toBeDefined();
        expect(headingContainerDOM).toHaveTextContent(props.title);
    });

    it('should render messaging DOM if props.msg is defined', () => {
        const props = {
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        };
        const { container } = render(<Callout {...props} />);
        const textContainerDOMs = container.querySelector(
            `.${baseCls}__text-container`,
        );
        const headingContainerDOM = container.querySelector(`.${baseCls}__msg`);

        expect(textContainerDOMs).toBeDefined();
        expect(headingContainerDOM).toHaveTextContent(props.msg);
    });

    it('should not render icon container DOM if props.renderIcon is not defined', () => {
        const { container } = render(<Callout />);
        const iconContainerDOMs = container.querySelector(
            `.${baseCls}__icon-container`,
        );

        expect(iconContainerDOMs).toBeNull();
    });

    it('should render icon container and icon DOMs if props.renderIcon is defined', () => {
        const props = {
            renderIcon,
        };
        const { container } = render(<Callout {...props} />);
        const iconContainerDOMs = container.querySelector(
            `.${baseCls}__icon-container`,
        );
        const iconDOMs = container.querySelector('.bankai-icon');

        expect(iconContainerDOMs).toBeDefined();
        expect(iconDOMs).toBeDefined();
    });

    it('should render the affirmative icon when the variant is AFFIRMATIVE', () => {
        const { container } = render(
            <Callout variant={VARIANTS.AFFIRMATIVE} />,
        );
        const icon = container.querySelector('.eureka-icon-circle-check');

        expect(icon).toBeDefined();
    });

    it('should render the info icon when the variant is INFO', () => {
        const { container } = render(<Callout variant={VARIANTS.INFO} />);
        const icon = container.querySelector('.eureka-icon-circle-info');

        expect(icon).toBeDefined();
    });

    it('should render the error icon when the variant is ERROR', () => {
        const { container } = render(<Callout variant={VARIANTS.ERROR} />);
        const icon = container.querySelector('.eureka-icon-triangle-alert');

        expect(icon).toBeDefined();
    });

    it('should render the cautionary icon when the variant is CAUTIONARY', () => {
        const { container } = render(<Callout variant={VARIANTS.CAUTIONARY} />);
        const icon = container.querySelector('.eureka-icon-triangle-alert');

        expect(icon).toBeDefined();
    });

    it('should render the error icon when the variant is not one of the predeinfed values', () => {
        const { container } = render(<Callout variant="TEST" />);
        const icon = container.querySelector('.eureka-icon-triangle-alert');

        expect(icon).toBeDefined();
    });

    // it('should ', () => {});
});
