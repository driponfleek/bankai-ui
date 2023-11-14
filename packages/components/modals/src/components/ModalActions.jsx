import PropTypes from 'prop-types';
import { Button, VARIANTS } from '@driponfleek/bankai-ui-buttons';

// Utils
import { getModalActionsByPriority } from '../utils/modalUtils';

const { PRIMARY, PRIMARY_DESTRUCTIVE } = VARIANTS;

const ModalActions = (props) => {
    const { baseCls, modalActions, onActionClick, renderModalActions } = props;
    const { primaryAction, secondaryAction } =
        getModalActionsByPriority(modalActions);
    const renderAction = (action) => (
        <Button {...action} onClick={onActionClick} />
    );

    return (
        <div className={`${baseCls}__actions-container`}>
            <div className={`${baseCls}__actions-container-inner`}>
                {!!renderModalActions && renderModalActions()}
                {!renderModalActions && (
                    <>
                        {primaryAction &&
                            primaryAction.variant === PRIMARY &&
                            renderAction(primaryAction)}
                        {secondaryAction && renderAction(secondaryAction)}
                        {primaryAction &&
                            primaryAction.variant === PRIMARY_DESTRUCTIVE &&
                            renderAction(primaryAction)}
                    </>
                )}
            </div>
        </div>
    );
};

ModalActions.propTypes = {
    baseCls: PropTypes.string,
    modalActions: PropTypes.array,
    onActionClick: PropTypes.func,
    renderModalActions: PropTypes.func,
};

export default ModalActions;
