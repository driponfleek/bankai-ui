import { DnDFileUploaderUI } from '@epr0t0type/bankai-ui-form-elements';

class MockDnDRejectState extends DnDFileUploaderUI {
    getMode = () => 'REJECTED';
}

export default MockDnDRejectState;
