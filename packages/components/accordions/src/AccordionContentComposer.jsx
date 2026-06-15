import cx from 'classnames';

// Constants
import { ACCORDION_BASE_CLS } from './const/baseClsConst';

// Styles
import './styles/accordion-content-composer.scss';

const withAccordionContent = (Comp, containerProps = {}) => {
    /**
     * @param {Object} props
     * @param {Object} [props.accItemProps] - Accordion item props passed in by the accordion system; consumed here and not forwarded to the wrapped component
     * @param {Object} [props.accTriggerProps] - Accordion trigger props passed in by the accordion system; consumed here and not forwarded to the wrapped component
     */
    const Wrapped = (props) => {
        const { shouldPadContent = false, contextCls } = containerProps;
        const { accItemProps, accTriggerProps, ...rest } = props;
        const baseCls = `${ACCORDION_BASE_CLS}__content-container`;
        const modCls = {
            [`${baseCls}--pad-content`]: shouldPadContent,
        };

        return (
            <div className={cx(baseCls, modCls, contextCls)}>
                <Comp {...rest} />
            </div>
        );
    };

    return Wrapped;
};

const AccordionContentComposer = withAccordionContent;

export default AccordionContentComposer;
