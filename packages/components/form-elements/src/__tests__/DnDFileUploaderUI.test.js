import React from 'react';
import {
    render,
    act,
    userEvent,
} from '@epr0t0type/bankai-lib-react-unit-test-utils';
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
        act(() => {
            render(<DnDFileUploaderUI {...props} ref={setRef} />);
        });
        compRef.handleBrowse({ target: { files: [{}] } });

        expect(addSpy).toHaveBeenCalled();
    });

    it('should call props.onRemoveAll when remove all action is clicked', () => {
        const removeAllSpy = jest.fn(
            DnDFileUploaderUI.defaultProps.onRemoveAll,
        );
        const props = {
            onRemoveAll: removeAllSpy,
            attachments: [{ name: '1' }, { name: '2' }],
            canUploadMultiple: true,
        };
        act(() => {
            render(<DnDFileUploaderUI {...props} />);
        });
        const removeAllBtnDOM = document.getElementsByClassName(
            `${baseCls}__remove-all-action`,
        )[0];
        userEvent.click(removeAllBtnDOM);

        expect(removeAllSpy).toHaveBeenCalled();
    });

    it('should call props.onRemove when the remove icon on an attachment is clicked', () => {
        const removeSpy = jest.fn(DnDFileUploaderUI.defaultProps.onRemove);
        const props = {
            onRemove: removeSpy,
            attachments: [{ name: '1' }],
        };
        act(() => {
            render(<DnDFileUploaderUI {...props} />);
        });
        const removeAttachmentBtnDOM = document.getElementsByClassName(
            `${baseCls}__attachment-remove-btn`,
        )[0];
        userEvent.click(removeAttachmentBtnDOM);

        expect(removeSpy).toHaveBeenCalled();
    });

    // it('should ', () => {});
});
