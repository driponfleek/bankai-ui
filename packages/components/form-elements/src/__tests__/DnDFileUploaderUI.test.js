import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import DnDFileUploaderUI from '../DnDFileUploaderUI';
import { IMG_FILE_MIME_TYPES, IMG_FILE_TYPES } from '../const/fileTypesConst';

const baseCls = 'bankai-dnd-file-uploader';
const locales = {
    localeBusyState: {
        msgText: 'Please wait...',
        titleText: 'Busy',
    },
    localeDefaultState: {
        btnText: 'Browse',
        msgText: 'Drop your File here, or',
        titleText: 'Default',
    },
    localeHoverState: {
        msgText: 'Drop your File here',
        titleText: 'Hovering',
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
const { PNG, JPG } = IMG_FILE_TYPES;
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

describe('<DnDFileUploaderUI />', () => {
    it('should render without crashing', () => {
        render(<DnDFileUploaderUI />);
    });

    it('should call props.onAdd when handleBrowse method is called', () => {
        const addSpy = jest.fn(DnDFileUploaderUI.defaultProps.onAdd);
        const props = {
            onAdd: addSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<DnDFileUploaderUI {...props} ref={setRef} />);
        compRef.handleBrowse({ target: { files: [{}] } });

        expect(addSpy).toHaveBeenCalled();
    });

    it('should call props.onRemoveAll when remove all action is clicked', async () => {
        const removeAllSpy = jest.fn(
            DnDFileUploaderUI.defaultProps.onRemoveAll,
        );
        const props = {
            onRemoveAll: removeAllSpy,
            attachments: [{ name: '1' }, { name: '2' }],
            canUploadMultiple: true,
        };
        const { container, user } = render(<DnDFileUploaderUI {...props} />);
        const removeAllBtnDOM = container.querySelector(
            `.${baseCls}__remove-all-action`,
        );
        await user.click(removeAllBtnDOM);

        expect(removeAllSpy).toHaveBeenCalled();
    });

    it('should call props.onRemove when the remove icon on an attachment is clicked', async () => {
        const removeSpy = jest.fn(DnDFileUploaderUI.defaultProps.onRemove);
        const props = {
            onRemove: removeSpy,
            attachments: [{ name: '1' }],
        };
        const { container, user } = render(<DnDFileUploaderUI {...props} />);
        const removeAttachmentBtnDOM = container.querySelector(
            `.${baseCls}__attachment-remove-btn`,
        );
        await user.click(removeAttachmentBtnDOM);

        expect(removeSpy).toHaveBeenCalled();
    });

    it('should call props.onRemove when the remove icon on an attachment is clicked', async () => {
        const removeSpy = jest.fn(DnDFileUploaderUI.defaultProps.onRemove);
        const props = {
            onRemove: removeSpy,
            attachments: [{ name: '1' }],
        };
        const { container, user } = render(<DnDFileUploaderUI {...props} />);
        const removeAttachmentBtnDOM = container.querySelector(
            `.${baseCls}__attachment-remove-btn`,
        );
        await user.click(removeAttachmentBtnDOM);

        expect(removeSpy).toHaveBeenCalled();
    });

    it('should render the busy state when props.isBusy is true', () => {
        const props = {
            isBusy: true,
        };
        const { container } = render(<DnDFileUploaderUI {...props} />);
        const busyStateDOM = container.querySelector(`.${baseCls}--busy`);

        expect(busyStateDOM).toBeDefined();
    });

    it('should render the hover state when props.isOver is true', () => {
        const props = {
            isOver: true,
        };
        const { container } = render(<DnDFileUploaderUI {...props} />);
        const hoverStateDOM = container.querySelector(`.${baseCls}--hover`);

        expect(hoverStateDOM).toBeDefined();
    });

    it('should not render the browse button if text is not provided for it', () => {
        const { container } = render(<DnDFileUploaderUI />);
        const browseBtn = container.querySelector(
            `.${baseCls}__browse-btn-container`,
        );

        expect(browseBtn).toBeNull();
    });

    it('should render the browse button if text is provided for it', () => {
        const { container } = render(<DnDFileUploaderUI {...locales} />);
        const browseBtn = container.querySelector(
            `.${baseCls}__browse-btn-container`,
        );

        expect(browseBtn).toBeDefined();
    });

    it('should show the hover state title when props.isHover is true', () => {
        const { getByText } = render(<DnDFileUploaderUI {...locales} isOver />);
        const title = getByText(locales.localeHoverState.titleText);

        expect(title).toBeDefined();
    });

    it('should show the default state titlee', () => {
        const { getByText } = render(<DnDFileUploaderUI {...locales} />);
        const title = getByText(locales.localeDefaultState.titleText);

        expect(title).toBeDefined();
    });

    it('should show the busy state title when props.isBusy is true', () => {
        const { getByText } = render(<DnDFileUploaderUI {...locales} isBusy />);
        const title = getByText(locales.localeBusyState.titleText);

        expect(title).toBeDefined();
    });

    it('should show text before browse link when there are attachments', () => {
        const { getByText } = render(
            <DnDFileUploaderUI {...locales} attachments={[mockFiles[0]]} />,
        );
        const beforeText = getByText(
            locales.localeShowAttachmentsState.msgBeforeBrowseText,
        );

        expect(beforeText).toBeDefined();
    });

    it('should show text after browse link when there are attachments', () => {
        const { getByText } = render(
            <DnDFileUploaderUI {...locales} attachments={[mockFiles[0]]} />,
        );
        const afterText = getByText(
            locales.localeShowAttachmentsState.msgAfterBrowseText,
        );

        expect(afterText).toBeDefined();
    });

    it('should show browse link when there are attachments', () => {
        const { getByText } = render(
            <DnDFileUploaderUI {...locales} attachments={[mockFiles[0]]} />,
        );
        const linkText = getByText(
            locales.localeShowAttachmentsState.browseLinkText,
        );

        expect(linkText).toBeDefined();
    });

    it('should render mock remove all button when props.isDisabled is true and there are attachments', () => {
        const { container } = render(
            <DnDFileUploaderUI
                {...locales}
                attachments={mockFiles}
                isDisabled
            />,
        );
        const removeAllBtn = container.querySelector(
            `.${baseCls}__remove-all-action`,
        );

        expect(removeAllBtn.tagName.toLowerCase()).toBe('span');
    });

    it('should not call props.onAdd when handleBrowse method is called without files', () => {
        const addSpy = jest.fn(DnDFileUploaderUI.defaultProps.onAdd);
        const props = {
            onAdd: addSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<DnDFileUploaderUI {...props} ref={setRef} />);
        compRef.handleBrowse({ target: {} });

        expect(addSpy).not.toHaveBeenCalled();
    });

    // it('should ', () => {});
});
