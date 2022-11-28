import { Component } from 'react';
import PropTypes from 'prop-types';
import {
    DropzoneComposer,
    DndProvider,
    HTML5Backend,
    NativeTypes,
} from '@epr0t0type/bankai-ui-drag-and-drop';
import DnDFileUploaderUI from './DnDFileUploaderUI';

// Utils
import { getHasValidFileTypes } from './utils/dndFileUploaderUtils';

// Constants
import { INVALID_FILE_TYPES } from './const/dndFileUploaderConst';

const ComposedUploader = DropzoneComposer(DnDFileUploaderUI);

class DnDFileUploader extends Component {
    static defaultProps = {
        rejectDuration: 3000,
        allowedTypes: [],
        canUploadMultiple: false,
        isBusy: false,
        isDisabled: false,
        onAdd: () => Promise.resolve(),
    };

    static propTypes = {
        rejectDuration: PropTypes.number,
        allowedTypes: PropTypes.arrayOf(
            PropTypes.shape({
                fileType: PropTypes.string,
                mimeType: PropTypes.string,
                extension: PropTypes.string,
            }),
        ),
        canUploadMultiple: PropTypes.bool,
        isBusy: PropTypes.bool,
        isDisabled: PropTypes.bool,
        customFilesValidator: PropTypes.func,
        onAdd: PropTypes.func,
    };

    state = {
        rejectError: undefined,
    };

    render() {
        const { isDisabled, isBusy } = this.props;
        const { rejectError } = this.state;
        const { FILE } = NativeTypes;

        if (isDisabled || isBusy) {
            return <DnDFileUploaderUI {...this.props} onAdd={this.handleAdd} />;
        }

        return (
            <DndProvider backend={HTML5Backend}>
                <ComposedUploader
                    {...this.props}
                    accept={FILE}
                    rejectError={rejectError}
                    onDrop={this.handleDrop}
                />
            </DndProvider>
        );
    }

    handleDrop = (item, monitor) => {
        const { canUploadMultiple } = this.props;

        if (monitor) {
            const { files } = monitor.getItem();
            const attachments = canUploadMultiple ? files : [files[0]];
            this.handleAdd(attachments);
        }
    };

    handleAdd = (attachments) => {
        const { onAdd } = this.props;
        const error = this.validateFiles(attachments);

        if (error) {
            this.handleReject(error);
        } else {
            onAdd(attachments);
        }
    };

    handleReject = (error) => {
        const { rejectDuration } = this.props;

        this.setState({ rejectError: error }, () => {
            setTimeout(() => {
                this.setState({ rejectError: undefined });
            }, rejectDuration);
        });
    };

    validateFiles = (attachments) => {
        const { allowedTypes } = this.props;
        const { customFilesValidator } = this.props;
        let validationError;

        // As a minimum, we always validate file types
        // const hasValidFileTypes = this.getHasValidFileTypes(files);
        const hasValidFileTypes = getHasValidFileTypes(
            attachments,
            allowedTypes,
        );

        if (!hasValidFileTypes) {
            validationError = INVALID_FILE_TYPES;
        } else if (customFilesValidator) {
            // File type validation passed and we have a custom validator, so
            // now we run that
            validationError = customFilesValidator(attachments);
        }

        return validationError;
    };
}

export default DnDFileUploader;
