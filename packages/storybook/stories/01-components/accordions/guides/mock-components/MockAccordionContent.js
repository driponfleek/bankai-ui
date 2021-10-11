import React from 'react';
import { AccordionContentComposer } from '@epr0t0type/bankai-ui-accordions';

const MockAccordionContent = () => {
    return (
        <div style={{ padding: '0 1.5rem' }}>
            <p>I am Accordion Content</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                dictum turpis at metus tristique, sed euismod diam rhoncus.
                Phasellus rutrum diam ac nibh egestas dapibus. Maecenas velit
                neque, finibus quis mattis volutpat, ultrices eget tellus. Etiam
                tempor dui ut lacus cursus tincidunt. Cras erat mauris, suscipit
                et metus interdum, varius semper mauris. Quisque orci lectus,
                iaculis id tellus ac, viverra vestibulum lorem. Pellentesque
                placerat nisi in enim efficitur, nec tempor velit porta.
            </p>
        </div>
    );
};

export default AccordionContentComposer(MockAccordionContent);
