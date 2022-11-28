import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import CalloutBanner from '../CalloutBanner';
import VARIANTS from '../const/variantsConst';

const { AFFIRMATIVE, CAUTIONARY, ERROR, INFO } = VARIANTS;
const baseCls = 'bankai-callout-banner';
const renderIcon = (iconCls) => <BankaiUser contextCls={iconCls} />;

describe('<CalloutBanner />', () => {
    it('should render without crashing', () => {
        render(<CalloutBanner />);
    });

    it('should not render any default UI and only render children when children are nested', () => {
        const props = {
            renderIcon,
            msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            title: "I'm a Callout Banner!",
        };
        const childCls = 'test';
        const { container } = render(
            <CalloutBanner {...props}>
                <div className={childCls} />
            </CalloutBanner>,
        );
        const childDOM = container.querySelector(`.${childCls}`);
        const iconContainerDOMs = container.querySelector(
            `.${baseCls}__icon-container`,
        );
        const textContainerDOMs = container.querySelector(
            `.${baseCls}__text-container`,
        );

        expect(childDOM).toBeDefined();
        expect(iconContainerDOMs).toBeNull();
        expect(textContainerDOMs).toBeNull();
    });

    it('should not render messaging DOM if props.title and props.msg are not defined', () => {
        const { container } = render(<CalloutBanner />);
        const textContainerDOMs = container.querySelector(
            `.${baseCls}__text-container`,
        );

        expect(textContainerDOMs).toBeNull();
    });

    it('should render messaging DOM if props.title is defined', () => {
        const props = {
            title: "I'm a Callout Banner!",
        };
        const { container } = render(<CalloutBanner {...props} />);
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
        const { container } = render(<CalloutBanner {...props} />);
        const textContainerDOMs = container.querySelector(
            `.${baseCls}__text-container`,
        );
        const headingContainerDOM = container.querySelector(`.${baseCls}__msg`);

        expect(textContainerDOMs).toBeDefined();
        expect(headingContainerDOM).toHaveTextContent(props.msg);
    });

    it('should not render icon container DOM if props.renderIcon is not defined', () => {
        const { container } = render(<CalloutBanner />);
        const iconContainerDOMs = container.querySelector(
            `.${baseCls}__icon-container`,
        );

        expect(iconContainerDOMs).toBeNull();
    });

    it('should render icon container and icon DOMs if props.renderIcon is defined', () => {
        const props = {
            renderIcon,
        };
        const { container } = render(<CalloutBanner {...props} />);
        const iconContainerDOMs = container.querySelector(
            `.${baseCls}__icon-container`,
        );
        const iconDOMs = container.querySelector('.bankai-icon');

        expect(iconContainerDOMs).toBeDefined();
        expect(iconDOMs).toBeDefined();
    });

    it('should only set the affirmative modifier class to true when props.variant is AFFIRMATIVE', () => {
        const props = {
            variant: AFFIRMATIVE,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<CalloutBanner {...props} ref={setRef} />);
        const expected = {
            [`${baseCls}--affirmative`]: true,
            [`${baseCls}--cautionary`]: false,
            [`${baseCls}--error`]: false,
            [`${baseCls}--info`]: false,
            [`${baseCls}--has-title`]: false,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    it('should only set the cautionary modifier class to true when props.variant is CAUTIONARY', () => {
        const props = {
            variant: CAUTIONARY,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<CalloutBanner {...props} ref={setRef} />);
        const expected = {
            [`${baseCls}--affirmative`]: false,
            [`${baseCls}--cautionary`]: true,
            [`${baseCls}--error`]: false,
            [`${baseCls}--info`]: false,
            [`${baseCls}--has-title`]: false,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    it('should only set the error modifier class to true when props.variant is ERROR', () => {
        const props = {
            variant: ERROR,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<CalloutBanner {...props} ref={setRef} />);
        const expected = {
            [`${baseCls}--affirmative`]: false,
            [`${baseCls}--cautionary`]: false,
            [`${baseCls}--error`]: true,
            [`${baseCls}--info`]: false,
            [`${baseCls}--has-title`]: false,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    it('should only set the info modifier class to true when props.variant is INFO', () => {
        const props = {
            variant: INFO,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<CalloutBanner {...props} ref={setRef} />);
        const expected = {
            [`${baseCls}--affirmative`]: false,
            [`${baseCls}--cautionary`]: false,
            [`${baseCls}--error`]: false,
            [`${baseCls}--info`]: true,
            [`${baseCls}--has-title`]: false,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    it('should only set the title modifier class to true when props.title has a value', () => {
        const props = {
            title: 'Test',
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<CalloutBanner {...props} ref={setRef} />);
        const expected = {
            [`${baseCls}--affirmative`]: false,
            [`${baseCls}--cautionary`]: false,
            [`${baseCls}--error`]: false,
            [`${baseCls}--info`]: false,
            [`${baseCls}--has-title`]: true,
        };
        const result = compRef.getModCls();

        expect(result).toEqual(expected);
    });

    // it('should ', () => {});
});
