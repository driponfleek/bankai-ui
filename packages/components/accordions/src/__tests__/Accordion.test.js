/* eslint-disable no-console */
import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Accordion from '../Accordion';
import AccordionContentComposer from '../AccordionContentComposer';

const originalConsoleError = console.error.bind(console.error);
const containerCls = 'accordion-test-content-container';
const ContentContainer = (props) => {
    const { children } = props;

    return <div className={containerCls}>{children}</div>;
};
const ComposedContent = AccordionContentComposer(ContentContainer);

describe('<Accordion />', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = undefined;
    });

    it('should render without crashing', () => {
        render(<Accordion />);
    });

    it('should call props.onChange when handleChange is called', () => {
        const onChangeSpy = jest.fn(Accordion.defaultProps.onChange);
        const props = {
            onChange: onChangeSpy,
        };
        const params = ['testId'];
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<Accordion {...props} ref={setRef} />, { container });
        });
        compRef.handleChange(params);

        expect(onChangeSpy).toHaveBeenCalledWith(params);
    });

    it('should render all the child items nested inside', () => {
        act(() => {
            render(
                <Accordion>
                    <ComposedContent
                        accItemProps={{
                            id: '001',
                        }}
                        accTriggerProps={{
                            children: 'Accordion Item 1',
                        }}
                    />
                    <ComposedContent
                        accItemProps={{
                            id: '002',
                        }}
                        accTriggerProps={{
                            children: 'Accordion Item 2',
                        }}
                    />
                    <ComposedContent
                        accItemProps={{
                            id: '003',
                        }}
                        accTriggerProps={{
                            children: 'Accordion Item 3',
                        }}
                    />
                </Accordion>,
                container,
            );
        });
        const childItems = document.getElementsByClassName(containerCls);

        expect(childItems).toHaveLength(3);
    });

    it('should render without crashing when invalid children are nested', () => {
        console.error = jest.fn();
        act(() => {
            render(<Accordion>{[undefined, undefined]}</Accordion>, {
                container,
            });
        });
        console.error = originalConsoleError;
    });

    it('should return an array of children when calling prepChildren even if only one child is set', () => {
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(
                <Accordion ref={setRef}>
                    <ComposedContent
                        accItemProps={{
                            id: '001',
                        }}
                        accTriggerProps={{
                            children: 'Accordion Item 1',
                        }}
                    />
                </Accordion>,
                container,
            );
        });
        const accordionChildren = compRef.prepChildren();
        const result = Array.isArray(accordionChildren);

        expect(result).toBe(true);
    });

    // it('should ', () => {});
});
