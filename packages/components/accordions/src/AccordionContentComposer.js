import React from 'react';
import PropTypes from 'prop-types';

const withAccordionContent = (Comp) => {
    const wrapped = (props) => {
        const { accItemProps, accTriggerProps, ...rest } = props;

        return <Comp {...rest} />;
    };

    wrapped.defaultProps = {
        accItemProps: {},
        accTriggerProps: {},
    };
    wrapped.propTypes = {
        accItemProps: PropTypes.object,
        accTriggerProps: PropTypes.object,
    };

    return wrapped;
};

const AccordionContentComposer = withAccordionContent;

export default AccordionContentComposer;
