import { render } from '@epr0t0type/bankai-lib-react-unit-test-utils';
import DropzoneUI from '../DropzoneUI';

const baseCls = 'bankai-dropzone-ui';

describe('<DropzoneUI />', () => {
    it('should render without crashing', () => {
        render(<DropzoneUI />);
    });

    it('should call props.onDrop handler', () => {
        const dropSpy = jest.fn(DropzoneUI.defaultProps.onDrop);
        const props = {
            onDrop: dropSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<DropzoneUI {...props} ref={setRef} />);
        compRef.props.onDrop();

        expect(dropSpy).toHaveBeenCalled();
    });

    it('should call props.onHover handler', () => {
        const hoverSpy = jest.fn(DropzoneUI.defaultProps.onHover);
        const props = {
            onHover: hoverSpy,
        };
        let compRef;
        const setRef = (el) => {
            compRef = el;
        };
        render(<DropzoneUI {...props} ref={setRef} />);
        compRef.props.onHover();

        expect(hoverSpy).toHaveBeenCalled();
    });

    it('should render the default state when props.isOver is false and there are no attachments', () => {
        const { container } = render(<DropzoneUI baseCls={baseCls} />);
        const defaultStateDOMs = container.querySelector(
            `.${baseCls}__default-state`,
        );
        const hoverStateDOMs = container.querySelector(
            `.${baseCls}__hover-state`,
        );
        const attachmentsStateDOMs = container.querySelector(
            `.${baseCls}__attachments`,
        );

        expect(defaultStateDOMs).toBeDefined();
        expect(hoverStateDOMs).toBeNull();
        expect(attachmentsStateDOMs).toBeNull();
    });

    it('should render a custom default state when props.renderDefaultState is defined', () => {
        const testCls = 'custom-default-state';
        const { container } = render(
            <DropzoneUI
                baseCls={baseCls}
                renderDefaultState={() => <div className={testCls} />}
            />,
        );
        const defaultStateDOMs = container.querySelector(`.${testCls}`);
        const hoverStateDOMs = container.querySelector(
            `.${baseCls}__hover-state`,
        );
        const attachmentsStateDOMs = container.querySelector(
            `.${baseCls}__attachments`,
        );

        expect(defaultStateDOMs).toBeDefined();
        expect(hoverStateDOMs).toBeNull();
        expect(attachmentsStateDOMs).toBeNull();
    });

    it('should render the hover state when props.isOver is true', () => {
        const { container } = render(<DropzoneUI baseCls={baseCls} isOver />);
        const defaultStateDOMs = container.querySelector(
            `.${baseCls}__default-state`,
        );
        const hoverStateDOMs = container.querySelector(
            `.${baseCls}__hover-state`,
        );
        const attachmentsStateDOMs = container.querySelector(
            `.${baseCls}__attachments`,
        );

        expect(defaultStateDOMs).toBeNull();
        expect(hoverStateDOMs).toBeDefined();
        expect(attachmentsStateDOMs).toBeNull();
    });

    it('should render a custom hover state when props.renderHoverState is defined', () => {
        const testCls = 'custom-hover-state';
        const { container } = render(
            <DropzoneUI
                baseCls={baseCls}
                renderHoverState={() => <div className={testCls} />}
                isOver
            />,
        );
        const defaultStateDOMs = container.querySelector(
            `.${baseCls}__default-state`,
        );
        const hoverStateDOMs = container.querySelector(`.${testCls}`);
        const attachmentsStateDOMs = container.querySelector(
            `.${baseCls}__attachments`,
        );

        expect(defaultStateDOMs).toBeNull();
        expect(hoverStateDOMs).toBeDefined();
        expect(attachmentsStateDOMs).toBeNull();
    });

    it('should render the attachments state when props.attachments is defined', () => {
        const { container } = render(
            <DropzoneUI
                baseCls={baseCls}
                attachments={[{ name: '1' }, { name: '2' }]}
            />,
        );
        const defaultStateDOMs = container.querySelector(
            `.${baseCls}__default-state`,
        );
        const hoverStateDOMs = container.querySelector(
            `.${baseCls}__hover-state`,
        );
        const attachmentsStateDOMs = container.querySelector(
            `.${baseCls}__attachments`,
        );

        expect(defaultStateDOMs).toBeNull();
        expect(hoverStateDOMs).toBeNull();
        expect(attachmentsStateDOMs).toBeDefined();
    });

    it('should render a custom attachments state when props.renderAttachmentsState is defined', () => {
        const testCls = 'custom-attachments-state';
        const { container } = render(
            <DropzoneUI
                baseCls={baseCls}
                attachments={[{ name: '1' }, { name: '2' }]}
                renderAttachmentsState={() => <div className={testCls} />}
            />,
        );
        const defaultStateDOMs = container.querySelector(
            `.${baseCls}__default-state`,
        );
        const hoverStateDOMs = container.querySelector(
            `.${baseCls}__hover-state`,
        );
        const attachmentsStateDOMs = container.querySelector(`.${testCls}`);

        expect(defaultStateDOMs).toBeNull();
        expect(hoverStateDOMs).toBeNull();
        expect(attachmentsStateDOMs).toBeDefined();
    });

    // it('should ', () => {});
});
