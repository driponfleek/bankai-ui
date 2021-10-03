import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DropTarget } from 'react-dnd';

// Utils
import {
    dropzoneTarget as dzTarget,
    dropzoneCollect as dzCollect,
    dropzoneTypes,
} from './utils/dropzoneUtils';

// Styles
import './styles/dropzone.scss';

class Dropzone extends Component {
    static defaultProps = {
        canDrop: true,
        isOver: false,
        attachments: [],
        onDrop: () => Promise.resolve(),
        onHover: () => Promise.resolve(),
        connectDropTarget: (el) => el,
    };

    static propTypes = {
        canDrop: PropTypes.bool,
        isOver: PropTypes.bool,
        attachments: PropTypes.array,
        connectDropTarget: PropTypes.func,
        // eslint-disable-next-line react/no-unused-prop-types
        onDrop: PropTypes.func,
        // eslint-disable-next-line react/no-unused-prop-types
        onHover: PropTypes.func,
        renderDefaultState: PropTypes.func,
        renderHoverState: PropTypes.func,
        renderAttachmentsState: PropTypes.func,
    };

    render() {
        const { isOver, connectDropTarget } = this.props;
        const hasAttachments = this.getHasAttachments();
        const modCls = this.getModCls();

        return connectDropTarget(
            <div className={cx(this.baseCls, modCls)}>
                {!isOver && !hasAttachments && this.renderDefaultState()}
                {isOver && this.renderHoverState()}
                {hasAttachments && !isOver && this.renderAttachmentsState()}
            </div>,
        );
    }

    renderDefaultState = () => {
        const { renderDefaultState } = this.props;

        if (renderDefaultState) {
            return this.renderCustomDefaultState();
        }

        return <span className={`${this.baseCls}__default-state`} />;
    };

    renderCustomDefaultState = () => {
        const { renderDefaultState, ...rest } = this.props;
        const renderProps = { ...rest };

        return renderDefaultState(renderProps);
    };

    renderHoverState = () => {
        const { renderHoverState } = this.props;

        if (renderHoverState) {
            return this.renderCustomHoverState();
        }

        return <span className={`${this.baseCls}__hover-state`} />;
    };

    renderCustomHoverState = () => {
        const { renderHoverState, ...rest } = this.props;
        const renderProps = { ...rest };

        return renderHoverState(renderProps);
    };

    renderAttachmentsState = () => {
        const { renderAttachmentsState, attachments } = this.props;

        if (renderAttachmentsState) {
            return this.renderCustomAttachmentsState();
        }

        return (
            <span className={`${this.baseCls}__attachments`}>
                {attachments.map(({ name }) => (
                    <span className={`${this.baseCls}__attachment`} key={name}>
                        {name}
                    </span>
                ))}
            </span>
        );
    };

    renderCustomAttachmentsState = () => {
        const { renderAttachmentsState, ...rest } = this.props;
        const renderProps = { ...rest };

        return renderAttachmentsState(renderProps);
    };

    getIsAllowed = () => {
        const { canDrop, isOver } = this.props;

        return canDrop && isOver;
    };

    getIsNotAllowed = () => {
        const { canDrop, isOver } = this.props;

        return !canDrop && isOver;
    };

    getHasAttachments = () => {
        const { attachments } = this.props;

        return attachments.length > 0;
    };

    getModCls = () => {
        const { isOver } = this.props;

        return {
            [`${this.baseCls}--dragging-over`]: isOver,
            [`${this.baseCls}--drop-allowed`]: this.getIsAllowed(),
            [`${this.baseCls}--drop-not-allowed`]: this.getIsNotAllowed(),
        };
    };

    baseCls = 'bankai-dropzone';
}

export default DropTarget(dropzoneTypes, dzTarget, dzCollect)(Dropzone);
