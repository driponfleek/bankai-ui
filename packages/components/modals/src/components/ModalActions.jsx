import { ButtonPrimary, ButtonSecondary } from '@driponfleek/bankai-ui-buttons';

// Utils
import { getModalActionsByPriority } from '../utils/modalUtils';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name passed from the parent Modal component
 * @param {Array} [props.modalActions] - Array of action button configuration objects
 * @param {Function} [props.onActionClick] - Callback fired when an action button is clicked
 * @param {Function} [props.renderModalActions] - Custom render function that replaces the default actions layout
 */
const ModalActions = (props) => {
    const { baseCls, modalActions, onActionClick, renderModalActions } = props;
    const { primaryAction, secondaryAction } =
        getModalActionsByPriority(modalActions);

    return (
        <div className={`${baseCls}__actions-container`}>
            <div className={`${baseCls}__actions-container-inner`}>
                {!!renderModalActions && renderModalActions()}
                {!renderModalActions &&
                    (!!primaryAction || secondaryAction) && (
                        <>
                            {primaryAction && !primaryAction.isDestructive && (
                                <ButtonPrimary
                                    {...primaryAction}
                                    onClick={onActionClick}
                                />
                            )}
                            {secondaryAction && (
                                <ButtonSecondary
                                    {...secondaryAction}
                                    onClick={onActionClick}
                                />
                            )}
                            {primaryAction && primaryAction.isDestructive && (
                                <ButtonPrimary
                                    {...primaryAction}
                                    onClick={onActionClick}
                                />
                            )}
                        </>
                    )}
            </div>
        </div>
    );
};

export default ModalActions;
