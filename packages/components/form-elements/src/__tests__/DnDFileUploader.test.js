/* eslint-disable react/prop-types */
import { render, act } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import DnDFileUploader from '../DnDFileUploader';
import { genFileTypeMeta } from '../utils/fileTypeMetaUtil';
import {
    IMG_FILE_TYPES,
    IMG_FILE_MIME_TYPES,
    DOC_FILE_TYPES,
    DOC_FILE_MIME_TYPES,
} from '../const/fileTypesConst';

let compRef;
const setRef = (el) => {
    compRef = el;
};
const { PNG, JPG, JPEG } = IMG_FILE_TYPES;
const { CSV } = DOC_FILE_TYPES;
const ALLOWED_FILE_TYPES = [
    genFileTypeMeta(JPEG),
    genFileTypeMeta(JPG),
    genFileTypeMeta(PNG),
];
const defaultProps = { allowedTypes: ALLOWED_FILE_TYPES };
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

jest.mock('@epr0t0type/bankai-ui-drag-and-drop', () => {
    const bankaiDragDrop = jest.requireActual(
        '@epr0t0type/bankai-ui-drag-and-drop',
    );
    const OriginalDZ = bankaiDragDrop.DropzoneComposer;

    const packageMock = {
        __esModule: true,
        ...bankaiDragDrop,
        DropzoneComposer: OriginalDZ,
    };

    return packageMock;
});

jest.useFakeTimers();

describe('<DnDFileUploader />', () => {
    afterEach(() => {
        compRef = undefined;
    });

    it('should render without crashing', () => {
        render(<DnDFileUploader />);
    });

    it('should not render the dropzone when props.isDisabled is true', () => {
        const { container } = render(<DnDFileUploader isDisabled />);
        const dropzone = container.querySelector('.bankai-dropzone');

        expect(dropzone).toBeNull();
    });

    it('should not render the dropzone when props.isBusy is true', () => {
        const { container } = render(<DnDFileUploader isDisabled />);
        const dropzone = container.querySelector('.bankai-dropzone');

        expect(dropzone).toBeNull();
    });

    it('should not call handleAdd when monitor arg is not passed to handleDrop', async () => {
        const handleAddSpy = jest.fn(DnDFileUploader.handleAdd);
        const props = { ...defaultProps };
        render(<DnDFileUploader {...props} ref={setRef} />);
        compRef.handleAdd = handleAddSpy;
        await compRef.handleDrop({});

        expect(handleAddSpy).not.toHaveBeenCalled();
    });

    it('should only allow one file to be dropped if props.canUploadMultiple is false and more than one file is dropped', async () => {
        const onAddSpy = jest.fn(DnDFileUploader.defaultProps.onAdd);
        const props = { ...defaultProps, onAdd: onAddSpy };
        render(<DnDFileUploader {...props} ref={setRef} />);
        await compRef.handleDrop({}, { getItem: () => ({ files: mockFiles }) });
        const result = [mockFiles[0]];

        expect(onAddSpy).toHaveBeenCalledWith(result);
    });

    it('should allow multipe files to be dropped if props.canUploadMultiple is true', async () => {
        const onAddSpy = jest.fn(DnDFileUploader.defaultProps.onAdd);
        const props = {
            ...defaultProps,
            onAdd: onAddSpy,
            canUploadMultiple: true,
        };
        render(<DnDFileUploader {...props} ref={setRef} />);
        await compRef.handleDrop({}, { getItem: () => ({ files: mockFiles }) });
        const result = mockFiles;

        expect(onAddSpy).toHaveBeenCalledWith(result);
    });

    it('should reject invalid file types when dropped', async () => {
        const onAddSpy = jest.fn(DnDFileUploader.defaultProps.onAdd);
        const props = { ...defaultProps, onAdd: onAddSpy };
        const { container } = render(
            <DnDFileUploader {...props} ref={setRef} />,
        );
        await act(() => {
            compRef.handleDrop(
                {},
                { getItem: () => ({ files: [invalidFileType] }) },
            );
        });
        const domEls = container.querySelector(
            `.bankai-dnd-file-uploader--rejected`,
        );

        expect(onAddSpy).not.toHaveBeenCalled();
        expect(domEls).toBeDefined();
        await act(() => {
            jest.runAllTimers();
        });
        const defaultDOMEls = container.querySelector(
            `.bankai-dnd-file-uploader--default`,
        );
        expect(defaultDOMEls).toBeDefined();
    });

    it('should validate files against custom validator when one is provided', () => {
        const customError = 'My custom error';
        const props = {
            ...defaultProps,
            customFilesValidator: () => customError,
        };
        render(<DnDFileUploader {...props} ref={setRef} />);
        const result = compRef.validateFiles([mockFiles[0]]);

        expect(result).toBe(customError);
    });

    // it('', () => {});
});
