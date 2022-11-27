import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import DnDFileUploaderUI from '../DnDFileUploaderUI';

const baseCls = 'bankai-dnd-file-uploader';

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

    // it('should ', () => {});
});
