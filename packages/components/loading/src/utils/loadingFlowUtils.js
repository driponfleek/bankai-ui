export const getShouldRenderLoading = (props) => {
    const { isLoading, hasError } = props;

    return isLoading && !hasError;
};

export const getShouldRenderError = (props) => {
    const { isLoading, hasError } = props;

    return !isLoading && hasError;
};

export const getShouldRenderContent = (props) => {
    const { isLoading, hasError } = props;

    return !isLoading && !hasError;
};
