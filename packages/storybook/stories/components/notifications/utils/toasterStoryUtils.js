/* eslint-disable import/prefer-default-export */
import { Toaster } from '@driponfleek/bankai-ui-notifications';

export const toasterInit = (toasterProps, toastId, handleCloseToaster) => {
    const { onClose } = toasterProps ?? {};

    if (toastId === undefined) {
        return Toaster({
            ...toasterProps,
            onClose: onClose || handleCloseToaster,
        });
    }

    Toaster({
        ...toasterProps,
        toastId,
        onClose: onClose || handleCloseToaster,
    });

    return toastId;
};
