import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class DropzoneUI extends Component {
    static defaultProps = {
        canDrop: true,
        isOver: false,
        attachments: [],
        onDrop: () => Promise.resolve(),
        onHover: () => Promise.resolve(),
    };

    static propTypes = {
        baseCls: PropTypes.string,
        canDrop: PropTypes.bool,
        isOver: PropTypes.bool,
        attachments: PropTypes.array,
        // eslint-disable-next-line react/no-unused-prop-types
        onDrop: PropTypes.func,
        // eslint-disable-next-line react/no-unused-prop-types
        onHover: PropTypes.func,
        renderDefaultState: PropTypes.func,
        renderHoverState: PropTypes.func,
        renderAttachmentsState: PropTypes.func,
    };

    render = () => {
        const { isOver } = this.props;
        const hasAttachments = this.getHasAttachments();

        // return this.renderDefaultState();

        return (
            <Fragment>
                {!isOver && !hasAttachments && this.renderDefaultState()}
                {isOver && this.renderHoverState()}
                {hasAttachments && !isOver && this.renderAttachmentsState()}
            </Fragment>
        );
    };

    renderDefaultState = () => {
        const { renderDefaultState, baseCls } = this.props;

        if (renderDefaultState) {
            return this.renderCustomDefaultState();
        }

        return <span className={`${baseCls}__default-state`} />;
    };

    renderCustomDefaultState = () => {
        const { renderDefaultState, ...rest } = this.props;
        const renderProps = { ...rest };

        return renderDefaultState(renderProps);
    };

    renderHoverState = () => {
        const { baseCls, renderHoverState } = this.props;

        if (renderHoverState) {
            return this.renderCustomHoverState();
        }

        return <span className={`${baseCls}__hover-state`} />;
    };

    renderCustomHoverState = () => {
        const { renderHoverState, ...rest } = this.props;
        const renderProps = { ...rest };

        return renderHoverState(renderProps);
    };

    renderAttachmentsState = () => {
        const { baseCls, renderAttachmentsState, attachments } = this.props;

        if (renderAttachmentsState) {
            return this.renderCustomAttachmentsState();
        }

        return (
            <span className={`${baseCls}__attachments`}>
                {attachments.map(({ name }) => (
                    <span className={`${baseCls}__attachment`} key={name}>
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

    getHasAttachments = () => {
        const { attachments } = this.props;

        return attachments.length > 0;
    };
}

export default DropzoneUI;
