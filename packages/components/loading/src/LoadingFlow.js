import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { GenericError } from '@epr0t0type/bankai-ui-callouts';
import LoadingState from './LoadingState';

class LoadingFlow extends PureComponent {
    static defaultProps = {
        hasError: false,
        isLoading: true,
        errorStateLocale: {},
        loadingStateLocale: {},
    };

    static propTypes = {
        contextCls: PropTypes.string,
        hasError: PropTypes.bool,
        isLoading: PropTypes.bool,
        errorStateLocale: PropTypes.shape({
            msg: PropTypes.string,
            title: PropTypes.string,
        }),
        loadingStateLocale: PropTypes.shape({
            msg: PropTypes.string,
            title: PropTypes.string,
        }),
        renderLoadingState: PropTypes.func,
        renderErrorState: PropTypes.func,
    };

    render() {
        const { children } = this.props;
        const shouldRenderLoadingState = this.getShouldRenderLoadingState();
        const shouldRenderErrorState = this.getShouldRenderErrorState();
        const shouldRenderContent = this.getShouldRenderContent();

        return (
            <Fragment>
                {shouldRenderLoadingState && this.renderLoadingState()}
                {shouldRenderErrorState && this.renderErrorState()}
                {shouldRenderContent && children}
            </Fragment>
        );
    }

    renderLoadingState = () => {
        const { loadingStateLocale, renderLoadingState, contextCls } =
            this.props;
        const modCls = `${this.baseCls}--loading-state`;

        if (renderLoadingState) {
            return renderLoadingState(modCls);
        }

        return (
            <LoadingState
                {...loadingStateLocale}
                contextCls={cx(this.baseCls, modCls, contextCls)}
            />
        );
    };

    renderErrorState = () => {
        const { errorStateLocale, renderErrorState, contextCls } = this.props;
        const modCls = `${this.baseCls}--error-state`;

        if (renderErrorState) {
            return renderErrorState(modCls);
        }

        return (
            <GenericError
                {...errorStateLocale}
                contextCls={cx(this.baseCls, modCls, contextCls)}
            />
        );
    };

    getShouldRenderLoadingState = () => {
        const { isLoading, hasError } = this.props;

        return isLoading && !hasError;
    };

    getShouldRenderErrorState = () => {
        const { isLoading, hasError } = this.props;

        return !isLoading && hasError;
    };

    getShouldRenderContent = () => {
        const { isLoading, hasError } = this.props;

        return !isLoading && !hasError;
    };

    baseCls = 'bankai-loading-flow';
}

export default LoadingFlow;
