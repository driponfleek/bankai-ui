import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useDrop } from 'react-dnd';

// TODO: Refactor using this library:
// https://github.com/react-dropzone/react-dropzone/
// https://react-dropzone.js.org/#src (accept prop takes file types)

// Utils
import {
    dropzoneSpec,
    dropzoneCollect as dzCollect,
    getModCls,
    // dropzoneTypes,
} from './utils/dropzoneUtils';

// Styles
import './styles/dropzone.scss';

const baseCls = 'bankai-dropzone';

const withDropZone = (Comp) => {
    const wrapped = (props) => {
        const { accept, contextCls, ...rest } = props;
        const [{ canDrop, isOver }, drop] = useDrop(() => ({
            accept,
            canDrop: (item, monitor) =>
                dropzoneSpec.canDrop(props, item, monitor),
            collect: dzCollect,
            drop: (item, monitor) => dropzoneSpec.drop(props, item, monitor),
            hover: (item, monitor) => dropzoneSpec.hover(props, item, monitor),
        }));
        const modCls = getModCls({ ...props, canDrop, isOver, baseCls });

        return (
            <div className={cx(baseCls, contextCls, modCls)} ref={drop}>
                <Comp {...rest} isOver={isOver} canDrop={canDrop} />
            </div>
        );
    };
    wrapped.defaultProps = {
        attachments: [],
        onDrop: () => Promise.resolve(),
        onHover: () => Promise.resolve(),
        connectDropTarget: (el) => el,
    };
    wrapped.propTypes = {
        accept: PropTypes.string,
        contextCls: PropTypes.string,
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

    return wrapped;
};

const DropzoneComposer = withDropZone;

export default DropzoneComposer;
