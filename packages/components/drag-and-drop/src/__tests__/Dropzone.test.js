import React from 'react';
import ReactDOM from 'react-dom';
import {
    createWrapper,
    // findRenderedDOMComponentWithClass,
    findAllElementsWithClassName,
    // simulateEvent,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
import Dropzone from '../Dropzone';

const identity = (el) => el;
const OriginalDZ = Dropzone.DecoratedComponent;
const defaultProps = {
    connectDropTarget: identity,
};

describe('<Dropzone />', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<OriginalDZ {...defaultProps} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render a custom default state when props.renderDefaultState is provided', () => {
        const defaultStateCls = 'default-state';
        const renderDefaultState = () => <div className={defaultStateCls} />;
        const props = { ...defaultProps, renderDefaultState };
        const wrapper = createWrapper(OriginalDZ, props);
        const domEls = findAllElementsWithClassName(wrapper, defaultStateCls);

        expect(domEls).toHaveLength(1);
    });

    it('should render a base default state when props.renderDefaultState is not provided', () => {
        const props = { ...defaultProps };
        const wrapper = createWrapper(OriginalDZ, props);
        const domEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}__default-state`,
        );

        expect(domEls).toHaveLength(1);
    });

    it('should render a custom hover state when props.renderHoverState is provided and props.isOver is true', () => {
        const hoverStateCls = 'hover-state';
        const renderHoverState = () => <div className={hoverStateCls} />;
        const props = { ...defaultProps, renderHoverState, isOver: true };
        const wrapper = createWrapper(OriginalDZ, props);
        const domEls = findAllElementsWithClassName(wrapper, hoverStateCls);

        expect(domEls).toHaveLength(1);
    });

    it('should render a base hover state when props.renderHoverState is not provided and props.isOver is true', () => {
        const props = { ...defaultProps, isOver: true };
        const wrapper = createWrapper(OriginalDZ, props);
        const domEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}__hover-state`,
        );

        expect(domEls).toHaveLength(1);
    });

    it('should render a custom attachments state when props.renderAttachmentsState is provided it has attachments', () => {
        const attachmentsStateCls = 'attachment-state';
        const renderAttachmentsState = () => (
            <div className={attachmentsStateCls} />
        );
        const props = {
            ...defaultProps,
            renderAttachmentsState,
            attachments: [{ name: 'Test' }],
        };
        const wrapper = createWrapper(OriginalDZ, props);
        const domEls = findAllElementsWithClassName(
            wrapper,
            attachmentsStateCls,
        );

        expect(domEls).toHaveLength(1);
    });

    it('should render the base attachments state when props.renderAttachmentsState is not provided and it has attachments', () => {
        const props = {
            ...defaultProps,
            attachments: [{ name: 'Test' }],
        };
        const wrapper = createWrapper(OriginalDZ, props);
        const domEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}__attachments`,
        );

        expect(domEls).toHaveLength(1);
    });

    it('should call props.onDrop when drop event is called', () => {
        const onDropSpy = jest.fn(OriginalDZ.defaultProps.onDrop);
        const props = {
            ...defaultProps,
            onDrop: onDropSpy,
        };
        const wrapper = createWrapper(OriginalDZ, props);
        wrapper.props.onDrop();

        expect(onDropSpy).toHaveBeenCalled();
    });

    it('should call props.onHover when drop event is called', () => {
        const onHoverSpy = jest.fn(OriginalDZ.defaultProps.onHover);
        const props = {
            ...defaultProps,
            onHover: onHoverSpy,
        };
        const wrapper = createWrapper(OriginalDZ, props);
        wrapper.props.onHover();

        expect(onHoverSpy).toHaveBeenCalled();
    });

    it('should call props.connectDropTarget when rendered', () => {
        const connectDropTargetSpy = jest.fn(
            OriginalDZ.defaultProps.connectDropTarget,
        );
        const props = {
            connectDropTarget: connectDropTargetSpy,
        };
        const div = document.createElement('div');

        ReactDOM.render(<OriginalDZ {...props} />, div);
        ReactDOM.unmountComponentAtNode(div);

        expect(connectDropTargetSpy).toHaveBeenCalled();
    });

    it('should return false from getIsNotAllowed call when props.canDrop is true and props.isOver is true', () => {
        const props = {
            ...defaultProps,
            canDrop: true,
            isOver: true,
        };
        const wrapper = createWrapper(OriginalDZ, props);
        const result = wrapper.getIsNotAllowed();

        expect(result).toBe(false);
    });

    it('should return true from getIsNotAllowed call when props.canDrop is false and props.isOver is true', () => {
        const props = {
            ...defaultProps,
            canDrop: false,
            isOver: true,
        };
        const wrapper = createWrapper(OriginalDZ, props);
        const result = wrapper.getIsNotAllowed();

        expect(result).toBe(true);
    });

    it('should return false from getIsNotAllowed call when props.canDrop is true and props.isOver is false', () => {
        const props = {
            ...defaultProps,
            canDrop: true,
            isOver: false,
        };
        const wrapper = createWrapper(OriginalDZ, props);
        const result = wrapper.getIsNotAllowed();

        expect(result).toBe(false);
    });

    // it('', () => {});
});
