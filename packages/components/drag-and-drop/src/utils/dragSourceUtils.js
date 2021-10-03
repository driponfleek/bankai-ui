export const dragSourceSpec = {
    beginDrag(props, monitor, component) {
        const { id, onBeginDrag } = props || {};

        if (onBeginDrag) {
            return onBeginDrag(props, monitor, component);
        }

        return { id };
    },
    endDrag(props, monitor, component) {
        const { onEndDrag } = props || {};

        if (onEndDrag) {
            onEndDrag(props, monitor, component);
        }
    },
    canDrag(props, monitor) {
        const { onCanDrop } = props || {};

        if (onCanDrop) {
            return onCanDrop(props, monitor);
        }

        return true;
    },
};

export const dragSourceCollect = (connect, monitor) => ({
    connectDragSource: connect.dragSourceCollect(),
    connectDragPreview: connect.dragPreview(),
    connectDropTarget: connect.dropTarget(),
    isDragging: monitor.isDragging(),
});
