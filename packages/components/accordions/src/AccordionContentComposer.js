import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import './styles/accordion-content-composer.scss';

const withAccordionContent = (Comp, containerProps = {}) => {
    const Wrapped = (props) => {
        const { shouldPadContent = false, contextCls } = containerProps;
        const { accItemProps, accTriggerProps, ...rest } = props;
        const baseCls = 'bankai-accordion-content-container';
        const modCls = {
            [`${baseCls}--pad-content`]: shouldPadContent,
        };

        return (
            <div className={cx(baseCls, modCls, contextCls)}>
                <Comp {...rest} />
            </div>
        );
    };

    Wrapped.defaultProps = {
        accItemProps: {},
        accTriggerProps: {},
    };
    Wrapped.propTypes = {
        accItemProps: PropTypes.object,
        accTriggerProps: PropTypes.object,
    };

    return Wrapped;
};

const AccordionContentComposer = withAccordionContent;

export default AccordionContentComposer;
