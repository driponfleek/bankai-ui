export const getIsValidFileType = (file, allowedTypes) => {
    const { type, name } = file || {};
    let extension;

    if (name) {
        const splitName = name.split('.');
        extension = `.${splitName[splitName.length - 1]}`;
    }

    if (!type && !!extension) {
        // We don't have a mime type, so we'll just have to go off of the filename extension
        return allowedTypes.some(
            (allowedType) => extension === allowedType.extension,
        );
    } else if (type) {
        // We do have a mime type to check
        return allowedTypes.some(
            (allowedType) => type === allowedType.mimeType,
        );
    }

    // Without a mime type or file extension, we can't call this valid
    return false;
};

export const getHasValidFileTypes = (files, allowedTypes) => {
    const hasInvalidFileTypes = (files || []).some((file) => {
        const isValidFileType = getIsValidFileType(file, allowedTypes);

        return !isValidFileType;
    });

    return !hasInvalidFileTypes;
};

export const getAllowedMIMETypes = (allowedTypes) => {
    const allowedMIMETypes = [];

    if (allowedTypes) {
        for (let index = 0; index < allowedTypes.length; index += 1) {
            const type = allowedTypes[index];
            const { mimeType } = type;
            const isAlreadyInArr = allowedMIMETypes.indexOf(mimeType) > -1;

            if (!isAlreadyInArr) {
                allowedMIMETypes.push(mimeType);
            }
        }
    }

    return allowedMIMETypes;
};

export const getAcceptedFileExtensions = (allowedTypes) => {
    let allowed = [];

    if (allowedTypes) {
        allowed = allowedTypes.map((allowedType) => allowedType.extension);
    }

    return allowed;
};
