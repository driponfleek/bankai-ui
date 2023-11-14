// Constants
import VARIANTS from '../const/formFieldComposerVariantsConst';

const { INLINE_LEFT, INLINE_RIGHT, STACKED, STACKED_HINT_TOP } = VARIANTS;

export const getFormFieldComposerModCls = (props, baseCls) => {
    const { variant, isDisabled, isReadOnly } = props ?? {};

    return {
        [`${baseCls}--disabled`]: isDisabled,
        [`${baseCls}--inline-left`]: variant === INLINE_LEFT,
        [`${baseCls}--inline-right`]: variant === INLINE_RIGHT,
        [`${baseCls}--read-only`]: isReadOnly,
        [`${baseCls}--stacked`]: variant === STACKED,
        [`${baseCls}--stacked-hint-top`]: variant === STACKED_HINT_TOP,
    };
};

export const getFLFFCModCls = (props, baseCls) => {
    const { isDisabled, isReadOnly, hasError, hasValue, hasLabel } =
        props ?? {};

    return {
        [`${baseCls}--disabled`]: isDisabled,
        [`${baseCls}--error`]: hasError,
        [`${baseCls}--read-only`]: isReadOnly,
        [`${baseCls}--has-value`]: hasValue,
        [`${baseCls}--no-label`]: !hasLabel,
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
    const { children, renderHint } = hintProps ?? {};

    return !!children || !!renderHint;
};

export const getHasError = (props) => {
    const { hasError, errorProps } = props ?? {};
    const { children, renderError } = errorProps ?? {};

    return hasError || !!children || !!renderError;
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

export const getIFLFFCompExtantProps = (props) => {
    const { renderBefore, renderAfter, isLeftAlignedLabel, ...rest } =
        getCompExtantProps(props);

    return rest;
};

export const getFLFFCHasVal = (props) => {
    const { value } = props ?? {};

    // eslint-disable-next-line no-null/no-null
    return value !== undefined && value !== null && value !== '';
};

export const getFLFFCSanatizedProps = (props) => {
    const {
        contextCls,
        'aria-label': ariaLabel,
        placeholder,
        rwSuffix,
        shouldIncludeError,
        shouldIncludeHint,
        errorId,
        hintId,
        errorProps,
        hintProps,
        labelProps,
        id,
        isReadOnly,
        hasError,
        hasLabel,
        renderBeforeControl,
        renderAfterControl,
        ...rest
    } = props;

    return {
        ...rest,
        id,
        hasError,
        ...(!hasLabel && { 'aria-label': ariaLabel, placeholder }),
        ...(isReadOnly && { isReadOnly }),
        ...((shouldIncludeError || shouldIncludeHint) && {
            'aria-describedby': getCompARIADescByIds(props),
        }),
    };
};
