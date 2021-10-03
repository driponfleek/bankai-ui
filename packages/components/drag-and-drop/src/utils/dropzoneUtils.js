export const dropzoneTypes = (props) => props.accepts;

export const dropzoneTarget = {
    drop(props, monitor, component) {
        const { onDrop } = props || {};

        if (onDrop) {
            onDrop(props, monitor, component);
        }
    },
    hover(props, monitor, component) {
        const { onHover } = props || {};

        if (onHover) {
            onHover(props, monitor, component);
        }
    },
    canDrop(props, monitor) {
        const { onCanDrop } = props || {};

        if (onCanDrop) {
            return onCanDrop(props, monitor);
        }

        return true;
    },
};

export const dropzoneCollect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType(),
});
