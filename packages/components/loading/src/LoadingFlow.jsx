import { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import LoadingErrorState from './LoadingErrorState';
import LoadingState from './LoadingState';

// Utils
import {
    getShouldRenderError,
    getShouldRenderLoading,
    getShouldRenderContent,
} from './utils/loadingFlowUtils';

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

LoadingFlow.propTypes = {
    contextCls: PropTypes.string,
    hasError: PropTypes.bool,
    isLoading: PropTypes.bool,
    errorStateProps: PropTypes.shape({
        msg: PropTypes.string,
        title: PropTypes.string,
    }),
    loadingStateProps: PropTypes.shape({
        msg: PropTypes.string,
        title: PropTypes.string,
    }),
    renderLoadingState: PropTypes.func,
    renderErrorState: PropTypes.func,
};

export default LoadingFlow;
