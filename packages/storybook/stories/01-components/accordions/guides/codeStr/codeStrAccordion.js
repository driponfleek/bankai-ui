export const usageCodeStr = `import {
    Accordion,
    AccordionContentComposer
} from '@epr0t0type/bankai-ui-accordions';
import MyContentComponent from './MyContentComponent';

const AccordionContent = AccordionContentComposer(MyContentComponent);

<Accordion>
    <AccordionContent
        accItemProps={{
            id: '001',
        }}
        accTriggerProps={{
            children: 'Accordion Item 1',
        }}
    >
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dictum turpis at metus tristique, sed euismod diam rhoncus.
        </p>
    </AccordionContent>
    <AccordionContent
        accItemProps={{
            id: '002',
        }}
        accTriggerProps={{
            children: 'Accordion Item 2',
        }}
    >
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dictum turpis at metus tristique, sed euismod diam rhoncus.
        </p>
    </AccordionContent>
</Accordion>`;

export const customTriggerExampleCodeStr = `import {
    Accordion,
    AccordionItemState,
    AccordionItemHeading,
    AccordionItemButton,
} from '@epr0t0type/bankai-ui-accordions';
import { BankaiDash, BankaiPlus } from '@epr0t0type/bankai-ui-icons';

// Custom Trigger
class CustomTrigger extends PureComponent {
    static defaultProps = {
        buttonProps: {},
        headingProps: {},
    };

    static propTypes = {
        buttonProps: PropTypes.object,
        headingProps: PropTypes.object,
    };

    render() {
        const { headingProps } = this.props;
        const { contextCls: headingContextCls, ...headingRest } = headingProps;

        return (
            <AccordionItemHeading
                {...headingRest}
                contextCls={cx("custom-trigger", headingContextCls)}
            >
                <AccordionItemState>{this.renderButton}</AccordionItemState>
            </AccordionItemHeading>
        );
    }

    renderButton = (state = {}) => {
        const { buttonProps, children } = this.props;
        const { contextCls: btnContextCls } = buttonProps;
        const { expanded: isExpanded } = state;

        return (
            <AccordionItemButton
                {...buttonProps}
                contextCls={cx(modCls, btnContextCls)}
            >
                {this.renderTriggerIcon(isExpanded)}
                <div className="custom-trigger__text-container">
                    <div className="custom-trigger__text>{children}</div>
                </div>
            </AccordionItemButton>
        );
    };

    renderTriggerIcon = (isExpanded) => {
        const Icon = isExpanded ? BankaiDash : BankaiPlus;

        return (
            <div className="custom-trigger__icon-container">
                <Icon contextCls="custom-trigger__icon" />
            </div>
        );
    };
}

// Accordion Implementation
renderCustomTrigger = (accTriggerProps) => {
    const { children, headingProps, ...rest } = accTriggerProps || {};
    const { headingLvl: hpHeadingLvl } = headingProps || {};
    const hProps = {
        ...headingProps,
        headingLvl: hpHeadingLvl,
    };

    return (
        <CustomTrigger headingProps={hProps} {...rest}>
            {children}
        </CustomTrigger>
    );
};



<Accordion renderTrigger={renderCustomTrigger}>
    <AccordionContent
        accItemProps={{
            id: '001',
        }}
        accTriggerProps={{
            children: 'Accordion Item 1',
        }}
    >
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dictum turpis at metus tristique, sed euismod diam rhoncus.
        </p>
    </AccordionContent>
    <AccordionContent
        accItemProps={{
            id: '002',
        }}
        accTriggerProps={{
            children: 'Accordion Item 2',
        }}
    >
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dictum turpis at metus tristique, sed euismod diam rhoncus.
        </p>
    </AccordionContent>
</Accordion>`;

export const customAccordionExampleCodeStr = `import { BaseAccordion } from '@epr0t0type/bankai-ui-accordions';

const CustomAccordion = () => {
    const baseCls = 'my-custom-accordion';
    const text =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum turpis at metus tristique, sed euismod diam rhoncus.';

    return (
        <BaseAccordion contextCls={baseCls}>
            <AccordionContent
                accItemProps={{ id: '001' }}
                accTriggerProps={{
                    children: 'Accordion Item 1',
                }}
            >
                <p>{text}</p>
            </AccordionContent>
            <AccordionContent
                accItemProps={{ id: '002' }}
                accTriggerProps={{
                    children: 'Accordion Item 2',
                }}
            >
                <p>{text}</p>
            </AccordionContent>
            <AccordionContent
                accItemProps={{ id: '003' }}
                accTriggerProps={{
                    children: 'Accordion Item 3',
                }}
            >
                <p>{text}</p>
            </AccordionContent>
        </BaseAccordion>
    );
};`;
