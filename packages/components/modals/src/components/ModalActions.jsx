import PropTypes from 'prop-types';
import { ButtonPrimary, ButtonSecondary } from '@driponfleek/bankai-ui-buttons';

// Utils
import { getModalActionsByPriority } from '../utils/modalUtils';

const ModalActions = (props) => {
    const { baseCls, modalActions, onActionClick, renderModalActions } = props;
    const { primaryAction, secondaryAction } =
        getModalActionsByPriority(modalActions);

    return (
        <div className={`${baseCls}__actions-container`}>
            <div className={`${baseCls}__actions-container-inner`}>
                {!!renderModalActions && renderModalActions()}
                {!renderModalActions && (
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

ModalActions.propTypes = {
    baseCls: PropTypes.string,
    modalActions: PropTypes.array,
    onActionClick: PropTypes.func,
    renderModalActions: PropTypes.func,
};

export default ModalActions;
