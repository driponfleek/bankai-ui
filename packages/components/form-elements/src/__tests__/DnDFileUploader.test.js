import React from 'react';
import ReactDOM from 'react-dom';
import {
    createWrapper,
    findRenderedDOMComponentWithClassName,
    findAllElementsWithClassName,
    simulateEvent,
    // simulateEvent,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
import DnDFileUploader from '../DnDFileUploader';
import { DND_FILE_UPLOADER_MODES as MODES } from '../const/dndFileUploaderConst';
import {
    IMG_FILE_TYPES,
    IMG_FILE_MIME_TYPES,
    DOC_FILE_TYPES,
    DOC_FILE_MIME_TYPES,
} from '../const/fileTypesConst';
import { genFileTypeMeta } from '../utils/fileTypeMetaUtil';

jest.useFakeTimers();

jest.mock('@epr0t0type/bankai-ui-drag-and-drop', () => {
    const bankaiDragDrop = jest.requireActual(
        '@epr0t0type/bankai-ui-drag-and-drop',
    );
    const OriginalDZ = bankaiDragDrop.Dropzone.DecoratedComponent;

    const packageMock = {
        __esModule: true,
        ...bankaiDragDrop,
        Dropzone: OriginalDZ,
    };

    return packageMock;
});

const { PNG, JPG, JPEG } = IMG_FILE_TYPES;
const { CSV } = DOC_FILE_TYPES;
const ALLOWED_FILE_TYPES = [
    genFileTypeMeta(JPEG),
    genFileTypeMeta(JPG),
    genFileTypeMeta(PNG),
];
const locales = {
    localeBusyState: {
        msgText: 'Please wait...',
        titleText: 'Busy',
    },
    localeDefaultState: {
        btnText: 'Browse',
        msgText: 'Drop your File here, or',
    },
    localeHoverState: {
        msgText: 'Drop your File here',
    },
    localeRejectDropState: {
        msgText: 'File must be JPG or PNG format',
        titleText: 'Invalid File',
    },
    localeShowAttachmentsState: {
        browseLinkText: 'Browse',
        msgAfterBrowseText: 'or',
        msgBeforeBrowseText: 'Drop your File here,',
        removeAllLinkText: 'Remove All',
        removeAttachmentARIALabel: 'Remove All',
    },
};

const defaultProps = { ...locales, allowedTypes: ALLOWED_FILE_TYPES };
const getMockFileBlob = (params) => {
    const { size, lastModifiedDate, name, mimeType } = params || {};

    function range(count) {
        let output = '';

        for (let i = 0; i < count; i += 1) {
            output += 'a';
        }

        return output;
    }

    const blob = new Blob([range(size || 1024)], { type: mimeType });
    blob.lastModifiedDate = lastModifiedDate;
    blob.name = name;

    return blob;
};

const mockFiles = [
    getMockFileBlob({
        name: 'image1.png',
        size: 638741,
        mimeType: IMG_FILE_MIME_TYPES[PNG],
        lastModifiedDate: 1540950299000,
    }),
    getMockFileBlob({
        name: 'image2.jpg',
        size: 638741,
        mimeType: IMG_FILE_MIME_TYPES[JPG],
        lastModifiedDate: 1540950299000,
    }),
];

const invalidFileType = getMockFileBlob({
    name: 'spreadsheet.csv',
    size: 638741,
    mimeType: DOC_FILE_MIME_TYPES[CSV],
    lastModifiedDate: 1540950299000,
});

describe('<DnDFileUploader />', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<DnDFileUploader />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should only allow one file to be dropped if props.canUploadMultiple is false and more than one file is dropped', () => {
        const onAddSpy = jest.fn(DnDFileUploader.defaultProps.onAdd);
        const props = { ...defaultProps, onAdd: onAddSpy };
        const wrapper = createWrapper(DnDFileUploader, props);
        wrapper.handleDrop({}, { getItem: () => ({ files: mockFiles }) });
        const result = [mockFiles[0]];

        expect(onAddSpy).toHaveBeenCalledWith(result);
    });

    it('should allow multipe files to be dropped if props.canUploadMultiple is true', () => {
        const onAddSpy = jest.fn(DnDFileUploader.defaultProps.onAdd);
        const props = {
            ...defaultProps,
            onAdd: onAddSpy,
            canUploadMultiple: true,
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        wrapper.handleDrop({}, { getItem: () => ({ files: mockFiles }) });
        const result = mockFiles;

        expect(onAddSpy).toHaveBeenCalledWith(result);
    });

    it('should reject invalid file types when dropped', () => {
        const onAddSpy = jest.fn(DnDFileUploader.defaultProps.onAdd);
        const props = { ...defaultProps, onAdd: onAddSpy };
        const wrapper = createWrapper(DnDFileUploader, props);
        wrapper.handleDrop(
            {},
            { getItem: () => ({ files: [invalidFileType] }) },
        );
        const domEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--rejected`,
        );

        expect(onAddSpy).not.toHaveBeenCalled();
        expect(wrapper.state.isRejected).toBe(true);
        expect(domEls).toHaveLength(1);
        jest.runAllTimers();
        const defaultDOMEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--default`,
        );
        expect(defaultDOMEls).toHaveLength(1);
        expect(wrapper.state.isRejected).toBe(false);
    });

    it('should call props.onAdd when handleBrowse gets a valid file', () => {
        const onAddSpy = jest.fn(DnDFileUploader.defaultProps.onAdd);
        const props = { ...defaultProps, onAdd: onAddSpy };
        const wrapper = createWrapper(DnDFileUploader, props);
        const evt = { target: { files: [mockFiles[0]] } };
        wrapper.handleBrowse(evt);
        const result = [mockFiles[0]];

        expect(onAddSpy).toHaveBeenCalledWith(result);
    });

    it('should reject when handleBrowse is called with invalid files', () => {
        const onAddSpy = jest.fn(DnDFileUploader.defaultProps.onAdd);
        const props = { ...defaultProps, onAdd: onAddSpy };
        const wrapper = createWrapper(DnDFileUploader, props);
        const evt = { target: { files: [invalidFileType] } };
        wrapper.handleBrowse(evt);
        const domEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--rejected`,
        );

        expect(onAddSpy).not.toHaveBeenCalled();
        expect(wrapper.state.isRejected).toBe(true);
        expect(domEls).toHaveLength(1);
        jest.runAllTimers();
        const defaultDOMEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--default`,
        );
        expect(defaultDOMEls).toHaveLength(1);
        expect(wrapper.state.isRejected).toBe(false);
    });

    it('should call props.onRemove when handleRemove is called', () => {
        const onRemoveSpy = jest.fn(DnDFileUploader.defaultProps.onRemove);
        const props = {
            ...defaultProps,
            onRemove: onRemoveSpy,
            attachments: [mockFiles[0]],
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        wrapper.handleRemove(mockFiles[0]);

        expect(onRemoveSpy).toHaveBeenCalledWith(mockFiles[0]);
    });

    it('should call props.onRemoveAll when remove all button is pressed', () => {
        const onRemoveAllSpy = jest.fn(
            DnDFileUploader.defaultProps.onRemoveAll,
        );
        const props = {
            ...defaultProps,
            onRemoveAll: onRemoveAllSpy,
            attachments: mockFiles,
            canUploadMultiple: true,
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const removeAllBtn = findRenderedDOMComponentWithClassName(
            wrapper,
            `${wrapper.baseCls}__remove-all-action`,
        );
        simulateEvent('click', removeAllBtn);

        expect(onRemoveAllSpy).toHaveBeenCalled();
    });

    it('should call renderMain with hover mode when renderHoverState is called', () => {
        const props = {
            ...defaultProps,
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const renderMainSpy = jest.fn(wrapper.renderMain);
        wrapper.renderMain = renderMainSpy;
        wrapper.renderHoverState();

        expect(renderMainSpy).toHaveBeenCalledWith(MODES.HOVER);
    });

    it('should render the default state with disabled modifier when there are no attachments', () => {
        const props = {
            ...defaultProps,
            isDisabled: true,
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const disabledDOMEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--disabled`,
        );
        const defaultDOMEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--default`,
        );

        expect(disabledDOMEls).toHaveLength(1);
        expect(defaultDOMEls).toHaveLength(1);
    });

    it('should render the show attachments state with disabled modifier when there are attachments and props.isCompact is false and props.shouldShowAttachments is true', () => {
        const props = {
            ...defaultProps,
            attachments: [mockFiles[0]],
            isDisabled: true,
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const disabledDOMEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--disabled`,
        );
        const attachmentsDOMEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--attachment`,
        );

        expect(disabledDOMEls).toHaveLength(1);
        expect(attachmentsDOMEls).toHaveLength(1);
    });

    it('should render the default state with disabled modifier when there are attachments and props.isCompact is true', () => {
        const props = {
            ...defaultProps,
            attachments: [mockFiles[0]],
            isDisabled: true,
            isCompact: true,
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const disabledDOMEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--disabled`,
        );
        const defaultDOMEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--default`,
        );

        expect(disabledDOMEls).toHaveLength(1);
        expect(defaultDOMEls).toHaveLength(1);
    });

    it('should render the default state with disabled modifier when there are attachments and props.shouldShowAttachments is false', () => {
        const props = {
            ...defaultProps,
            attachments: [mockFiles[0]],
            isDisabled: true,
            shouldShowAttachments: false,
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const disabledDOMEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--disabled`,
        );
        const defaultDOMEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--default`,
        );

        expect(disabledDOMEls).toHaveLength(1);
        expect(defaultDOMEls).toHaveLength(1);
    });

    it('should render the busy state props.isBusy is true', () => {
        const props = {
            ...defaultProps,
            isBusy: true,
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const domEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--busy`,
        );

        expect(domEls).toHaveLength(1);
    });

    it('should render the busy state when props.isBusy is true and there are attachments', () => {
        const props = {
            ...defaultProps,
            attachments: [mockFiles[0]],
            isBusy: true,
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const renderMainSpy = jest.fn(wrapper.renderMain);
        wrapper.renderMain = renderMainSpy;
        wrapper.renderAttachmentsState();
        const domEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--busy`,
        );

        expect(domEls).toHaveLength(1);
        expect(renderMainSpy).toHaveBeenCalledWith(MODES.BUSY);
    });

    it('should render the show attachments state when there are attachments and props.shouldShowAttachments is true and props.isCompact is false', () => {
        const props = {
            ...defaultProps,
            attachments: [mockFiles[0]],
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const renderMainSpy = jest.fn(wrapper.renderMain);
        wrapper.renderMain = renderMainSpy;
        wrapper.renderAttachmentsState();
        const domEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--attachment`,
        );

        expect(domEls).toHaveLength(1);
        expect(renderMainSpy).toHaveBeenCalledWith(MODES.ATTACHMENTS);
    });

    it('should render the default state when there are attachments and props.shouldShowAttachments is false', () => {
        const props = {
            ...defaultProps,
            attachments: [mockFiles[0]],
            shouldShowAttachments: false,
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const renderMainSpy = jest.fn(wrapper.renderMain);
        wrapper.renderMain = renderMainSpy;
        wrapper.renderAttachmentsState();
        const domEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--default`,
        );

        expect(domEls).toHaveLength(1);
        expect(renderMainSpy).toHaveBeenCalledWith(MODES.DEFAULT);
    });

    it('should render the default state when there are attachments and props.isCompact is true', () => {
        const props = {
            ...defaultProps,
            attachments: [mockFiles[0]],
            isCompact: true,
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const renderMainSpy = jest.fn(wrapper.renderMain);
        wrapper.renderMain = renderMainSpy;
        wrapper.renderAttachmentsState();
        const domEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--default`,
        );

        expect(domEls).toHaveLength(1);
        expect(renderMainSpy).toHaveBeenCalledWith(MODES.DEFAULT);
    });

    it('should render the rejected state when there are attachments and user drops an invalid file', () => {
        const props = {
            ...defaultProps,
            attachments: [mockFiles[0]],
            isCompact: true,
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const evt = { target: { files: [invalidFileType] } };
        const renderMainSpy = jest.fn(wrapper.renderMain);
        wrapper.renderMain = renderMainSpy;
        wrapper.handleBrowse(evt);
        wrapper.renderAttachmentsState();
        const domEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--rejected`,
        );

        expect(domEls).toHaveLength(1);
        expect(wrapper.state.isRejected).toBe(true);
        expect(renderMainSpy).toHaveBeenCalledWith(MODES.REJECTED);
        jest.runAllTimers();
        const defaultDOMEls = findAllElementsWithClassName(
            wrapper,
            `${wrapper.baseCls}--default`,
        );
        expect(defaultDOMEls).toHaveLength(1);
        expect(wrapper.state.isRejected).toBe(false);
    });

    it('should render the remove button for attachments with an aria label that includes the remove file locale and file name', () => {
        const mockFile = mockFiles[0];
        const props = {
            ...defaultProps,
            attachments: [mockFile],
        };
        const {
            localeShowAttachmentsState: { removeAttachmentARIALabel },
        } = locales;
        const wrapper = createWrapper(DnDFileUploader, props);
        const removeFileBtn = findRenderedDOMComponentWithClassName(
            wrapper,
            `${wrapper.baseCls}__attachment-remove-btn`,
        );
        const result = removeFileBtn.getAttribute('aria-label');
        const expected = `${removeAttachmentARIALabel} ${mockFile.name}`;
        expect(result).toBe(expected);
    });

    it('should render the remove button for attachments with an aria label that only includes a space and the name of the file when locale is not provided', () => {
        const mockFile = mockFiles[0];
        const props = {
            allowedTypes: ALLOWED_FILE_TYPES,
            attachments: [mockFile],
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const removeFileBtn = findRenderedDOMComponentWithClassName(
            wrapper,
            `${wrapper.baseCls}__attachment-remove-btn`,
        );
        const result = removeFileBtn.getAttribute('aria-label');
        const expected = ` ${mockFile.name}`;
        expect(result).toBe(expected);
    });

    it('should render mock remove all button when disabled to prevent interaction while in disabled state', () => {
        const props = {
            allowedTypes: ALLOWED_FILE_TYPES,
            attachments: mockFiles,
            canUploadMultiple: true,
            isDisabled: true,
        };
        const wrapper = createWrapper(DnDFileUploader, props);
        const removeAllBtn = findRenderedDOMComponentWithClassName(
            wrapper,
            `${wrapper.baseCls}__remove-all-action`,
        );
        const elTagName = removeAllBtn.tagName.toLowerCase();

        expect(elTagName).toBe('span');
    });

    // it('', () => {});
});
