export const dropzoneSpec = {
    drop(props, item, monitor) {
        const { onDrop } = props || {};

        if (onDrop) {
            onDrop(props, monitor, item);
        }
    },
    hover(props, item, monitor) {
        const { onHover } = props || {};

        if (onHover) {
            onHover(props, monitor, item);
        }
    },
    canDrop(props, item, monitor) {
        const { onCanDrop } = props || {};

        if (onCanDrop) {
            return onCanDrop(props, monitor, item);
        }

        return true;
    },
};

export const dropzoneCollect = (monitor) => ({
    // connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType(),
});

export const getModCls = (props) => {
    const { baseCls, isOver, canDrop } = props;

    return {
        [`${baseCls}--dragging-over`]: isOver,
        [`${baseCls}--drop-allowed`]: canDrop && isOver,
        [`${baseCls}--drop-not-allowed`]: !canDrop && isOver,
    };
};
