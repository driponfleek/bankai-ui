import React from 'react';
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import DropzoneUI from '../DropzoneUI';

const baseCls = 'bankai-dropzone-ui';

describe('<DropzoneUI />', () => {
    it('should render without crashing', () => {
        render(<DropzoneUI />);
    });

    it('should call props.onDrop handler', () => {
        const dropSpy = jest.fn(DropzoneUI.defaultProps.onDrop);
        const props = {
            onDrop: dropSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<DropzoneUI {...props} ref={setRef} />);
        });
        compRef.props.onDrop();

        expect(dropSpy).toHaveBeenCalled();
    });

    it('should call props.onHover handler', () => {
        const hoverSpy = jest.fn(DropzoneUI.defaultProps.onHover);
        const props = {
            onHover: hoverSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        act(() => {
            render(<DropzoneUI {...props} ref={setRef} />);
        });
        compRef.props.onHover();

        expect(hoverSpy).toHaveBeenCalled();
    });

    it('should render the default state when props.isOver is false and there are no attachments', () => {
        act(() => {
            render(<DropzoneUI baseCls={baseCls} />);
        });
        const defaultStateDOMs = document.getElementsByClassName(
            `${baseCls}__default-state`,
        );
        const hoverStateDOMs = document.getElementsByClassName(
            `${baseCls}__hover-state`,
        );
        const attachmentsStateDOMs = document.getElementsByClassName(
            `${baseCls}__attachments`,
        );

        expect(defaultStateDOMs).toHaveLength(1);
        expect(hoverStateDOMs).toHaveLength(0);
        expect(attachmentsStateDOMs).toHaveLength(0);
    });

    it('should render a custom default state when props.renderDefaultState is defined', () => {
        const testCls = 'custom-default-state';
        act(() => {
            render(
                <DropzoneUI
                    baseCls={baseCls}
                    renderDefaultState={() => <div className={testCls} />}
                />,
            );
        });
        const defaultStateDOMs = document.getElementsByClassName(testCls);
        const hoverStateDOMs = document.getElementsByClassName(
            `${baseCls}__hover-state`,
        );
        const attachmentsStateDOMs = document.getElementsByClassName(
            `${baseCls}__attachments`,
        );

        expect(defaultStateDOMs).toHaveLength(1);
        expect(hoverStateDOMs).toHaveLength(0);
        expect(attachmentsStateDOMs).toHaveLength(0);
    });

    it('should render the hover state when props.isOver is true', () => {
        act(() => {
            render(<DropzoneUI baseCls={baseCls} isOver />);
        });
        const defaultStateDOMs = document.getElementsByClassName(
            `${baseCls}__default-state`,
        );
        const hoverStateDOMs = document.getElementsByClassName(
            `${baseCls}__hover-state`,
        );
        const attachmentsStateDOMs = document.getElementsByClassName(
            `${baseCls}__attachments`,
        );

        expect(defaultStateDOMs).toHaveLength(0);
        expect(hoverStateDOMs).toHaveLength(1);
        expect(attachmentsStateDOMs).toHaveLength(0);
    });

    it('should render a custom hover state when props.renderHoverState is defined', () => {
        const testCls = 'custom-hover-state';
        act(() => {
            render(
                <DropzoneUI
                    baseCls={baseCls}
                    renderHoverState={() => <div className={testCls} />}
                    isOver
                />,
            );
        });
        const defaultStateDOMs = document.getElementsByClassName(
            `${baseCls}__default-state`,
        );
        const hoverStateDOMs = document.getElementsByClassName(testCls);
        const attachmentsStateDOMs = document.getElementsByClassName(
            `${baseCls}__attachments`,
        );

        expect(defaultStateDOMs).toHaveLength(0);
        expect(hoverStateDOMs).toHaveLength(1);
        expect(attachmentsStateDOMs).toHaveLength(0);
    });

    it('should render the attachments state when props.attachments is defined', () => {
        act(() => {
            render(
                <DropzoneUI
                    baseCls={baseCls}
                    attachments={[{ name: '1' }, { name: '2' }]}
                />,
            );
        });
        const defaultStateDOMs = document.getElementsByClassName(
            `${baseCls}__default-state`,
        );
        const hoverStateDOMs = document.getElementsByClassName(
            `${baseCls}__hover-state`,
        );
        const attachmentsStateDOMs = document.getElementsByClassName(
            `${baseCls}__attachments`,
        );

        expect(defaultStateDOMs).toHaveLength(0);
        expect(hoverStateDOMs).toHaveLength(0);
        expect(attachmentsStateDOMs).toHaveLength(1);
    });

    it('should render a custom attachments state when props.renderAttachmentsState is defined', () => {
        const testCls = 'custom-attachments-state';
        act(() => {
            render(
                <DropzoneUI
                    baseCls={baseCls}
                    attachments={[{ name: '1' }, { name: '2' }]}
                    renderAttachmentsState={() => <div className={testCls} />}
                />,
            );
        });
        const defaultStateDOMs = document.getElementsByClassName(
            `${baseCls}__default-state`,
        );
        const hoverStateDOMs = document.getElementsByClassName(
            `${baseCls}__hover-state`,
        );
        const attachmentsStateDOMs = document.getElementsByClassName(testCls);

        expect(defaultStateDOMs).toHaveLength(0);
        expect(hoverStateDOMs).toHaveLength(0);
        expect(attachmentsStateDOMs).toHaveLength(1);
    });

    // it('should not render any default UI and only render children when they are nested inside', () => {
    //     act(() => {
    //         render(
    //             <ListItem text={text} meta={meta}>
    //                 <div className="test" />
    //             </ListItem>,
    //         );
    //     });
    //     const defaultTextDOMs = document.getElementsByClassName(
    //         `${baseCls}__text`,
    //     );
    //     const defaultMetaDOMs = document.getElementsByClassName(
    //         `${baseCls}__meta`,
    //     );
    //     const childDOMs = document.getElementsByClassName('test');

    //     expect(defaultTextDOMs).toHaveLength(0);
    //     expect(defaultMetaDOMs).toHaveLength(0);
    //     expect(childDOMs).toHaveLength(1);
    // });

    // it('should not render text or meta elements if props.text and props.meta are not defined', () => {
    //     act(() => {
    //         render(<ListItem />);
    //     });
    //     const defaultTextDOMs = document.getElementsByClassName(
    //         `${baseCls}__text`,
    //     );
    //     const defaultMetaDOMs = document.getElementsByClassName(
    //         `${baseCls}__meta`,
    //     );

    //     expect(defaultTextDOMs).toHaveLength(0);
    //     expect(defaultMetaDOMs).toHaveLength(0);
    // });

    // it('should render text or meta elements if props.text and props.meta are defined', () => {
    //     act(() => {
    //         render(<ListItem text={text} meta={meta} />);
    //     });
    //     const defaultTextDOMs = document.getElementsByClassName(
    //         `${baseCls}__text`,
    //     );
    //     const defaultMetaDOMs = document.getElementsByClassName(
    //         `${baseCls}__meta`,
    //     );

    //     expect(defaultTextDOMs).toHaveLength(1);
    //     expect(defaultMetaDOMs).toHaveLength(1);
    // });

    // it('should ', () => {});
});
