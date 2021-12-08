import React from 'react';
import PropTypes from 'prop-types';

const withAccordionContent = (Comp) => {
    const Wrapped = (props) => {
        const { accItemProps, accTriggerProps, ...rest } = props;

        return <Comp {...rest} />;
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
