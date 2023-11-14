// Constants
import VARIANTS from '../const/formFieldComposerVariantsConst';

const { INLINE_LEFT, INLINE_RIGHT, STACKED, TOGGLE } = VARIANTS;

export const getFormFieldComposerModCls = (props, baseCls) => {
    const { variant, isDisabled, isReadOnly } = props ?? {};

    return {
        [`${baseCls}--disabled`]: isDisabled,
        [`${baseCls}--inline-left`]: variant === INLINE_LEFT,
        [`${baseCls}--inline-right`]: variant === INLINE_RIGHT,
        [`${baseCls}--read-only`]: isReadOnly,
        [`${baseCls}--stacked`]: variant === STACKED,
        [`${baseCls}--toggle`]: variant === TOGGLE,
    };
};

export const getFFCLabelExtantProps = (props) => {
    const { id, labelProps, rwSuffix } = props ?? {};

    return {
        ...labelProps,
        htmlFor: `${id}${rwSuffix}`,
    };
};

export const getHasLabel = (props) => {
    const { labelProps } = props ?? {};
    const { content } = labelProps ?? {};

    return !!content;
};

export const getShouldRenderHints = (props) => {
    const { shouldIncludeError, shouldIncludeHint } = props;

    return shouldIncludeError || shouldIncludeHint;
};

export const getFFCHasHint = (props) => {
    const { hintProps } = props ?? {};
    const { hintText, renderHint } = hintProps ?? {};

    return !!hintText || !!renderHint;
};

export const getHasError = (props) => {
    const { hasError, errorProps } = props ?? {};
    const { errorText, renderError } = errorProps ?? {};

    return hasError || !!errorText || !!renderError;
};

export const getCompARIADescByIds = (props) => {
    const { shouldIncludeError, shouldIncludeHint, errorId, hintId } =
        props ?? {};
    const hasLabel = getHasLabel(props);

    return [
        ...(shouldIncludeError ? [errorId] : []),
        ...(shouldIncludeHint && hasLabel ? [hintId] : []),
    ].join(' ');
};

const getCompExtantProps = (props) => {
    const {
        contextCls,
        rwSuffix,
        shouldIncludeError,
        shouldIncludeHint,
        errorProps,
        hintProps,
        labelProps,
        errorId,
        hintId,
        id,
        isReadOnly,
        hasError,
        ...rest
    } = props;

    return {
        ...rest,
        id: `${id}${rwSuffix}`,
        ...(isReadOnly && { isReadOnly }),
        ...(hasError && { hasError }),
        ...((shouldIncludeError || shouldIncludeHint) && {
            'aria-describedby': getCompARIADescByIds(props),
        }),
    };
};

export const getFFCCompExtantProps = (props) => {
    const { variant, ...rest } = getCompExtantProps(props);

    return rest;
};

export const getIFTALFFCompExtantProps = (props) => {
    const { renderBefore, renderAfter, ...rest } = getCompExtantProps(props);

    return rest;
};
