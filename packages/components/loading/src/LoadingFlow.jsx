import { Fragment } from 'react';
import cx from 'classnames';
import LoadingErrorState from './LoadingErrorState';
import LoadingState from './LoadingState';

// Utils
import {
    getShouldRenderError,
    getShouldRenderLoading,
    getShouldRenderContent,
} from './utils/loadingFlowUtils';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {boolean} [props.hasError] - Whether to render the error state
 * @param {boolean} [props.isLoading] - Whether to render the loading state
 * @param {Object} [props.errorStateProps] - Props passed to the error state component (supports `msg` and `title`)
 * @param {Object} [props.loadingStateProps] - Props passed to the loading state component (supports `msg` and `title`)
 * @param {Function} [props.renderLoadingState] - Custom render function for the loading state
 * @param {Function} [props.renderErrorState] - Custom render function for the error state
 */
const LoadingFlow = (props) => {
    const {
        contextCls,
        hasError = false,
        isLoading = true,
        errorStateProps = {},
        loadingStateProps = {},
        renderErrorState = LoadingErrorState,
        renderLoadingState = LoadingState,
        children,
        ...rest
    } = props;
    const baseCls = 'bankai-loading-flow';
    const funcProps = {
        ...rest,
        isLoading,
        hasError,
    };
    const shouldRenderLoadingState = getShouldRenderLoading(funcProps);
    const shouldRenderErrorState = getShouldRenderError(funcProps);
    const shouldRenderContent = getShouldRenderContent(funcProps);

    return (
        <Fragment>
            {shouldRenderLoadingState &&
                renderLoadingState({
                    ...loadingStateProps,
                    contextCls: cx(
                        baseCls,
                        `${baseCls}--loading-state`,
                        contextCls,
                    ),
                })}
            {shouldRenderErrorState &&
                renderErrorState({
                    ...errorStateProps,
                    contextCls: cx(
                        baseCls,
                        `${baseCls}--error-state`,
                        contextCls,
                    ),
                })}
            {shouldRenderContent && children}
        </Fragment>
    );
};

export default LoadingFlow;
