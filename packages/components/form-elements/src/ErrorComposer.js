import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const withError = (Comp) =>
    class FormError extends PureComponent {
        static defaultProps = {
            isErrorPolite: false,
            isErrorAtomic: true,
        };

        static propTypes = {
            errorARIARelevant: PropTypes.string,
            errorContextCls: PropTypes.string,
            errorText: PropTypes.string,
            errorIconCls: PropTypes.string,
            isErrorPolite: PropTypes.bool,
            isErrorAtomic: PropTypes.bool,
            renderCustomError: PropTypes.func,
        };

        render() {
            const { errorContextCls } = this.props;
            const hasError = this.getHasError();
            const ariaProps = this.getARIAProps();

            return (
                <Fragment>
                    {!!Comp && this.renderComp()}
                    <span
                        {...ariaProps}
                        className={cx(this.baseCls, errorContextCls)}
                    >
                        {hasError && this.renderError()}
                    </span>
                </Fragment>
            );
        }

        renderComp() {
            const props = this.getCompProps();
            const hasError = this.getHasError();

            return <Comp {...props} hasError={hasError} />;
        }

        renderError() {
            const { renderCustomError } = this.props;

            return renderCustomError
                ? this.renderCustomError()
                : this.renderDefaultError();
        }

        renderDefaultError() {
            const { errorIconCls, errorText } = this.props;

            return (
                <Fragment>
                    {errorIconCls && (
                        <span
                            className={`${this.baseCls}__icon ${errorIconCls}`}
                        />
                    )}{' '}
                    <span className={`${this.baseCls}__text`}>{errorText}</span>
                </Fragment>
            );
        }

        renderCustomError() {
            const {
                isErrorPolite,
                isErrorAtomic,
                errorARIARelevant,
                renderCustomError,
                ...rest
            } = this.props;

            return renderCustomError({ ...rest });
        }

        getARIAProps() {
            const {
                isErrorPolite,
                isErrorAtomic,
                errorARIARelevant,
            } = this.props;
            const ariaLive = isErrorPolite ? 'polite' : 'assertive';

            // https://hiddedevries.nl/en/blog/2017-04-04-how-to-make-inline-error-messages-accessible
            // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
            return {
                ...(isErrorAtomic && { 'aria-atomic': isErrorAtomic }),
                ariaLive,
                ...(errorARIARelevant && {
                    'aria-relevant': errorARIARelevant,
                }),
                ...(!errorARIARelevant &&
                    !isErrorPolite && {
                        'aria-relevant': 'additions removals',
                    }),
            };
        }

        getCompProps() {
            const {
                errorARIARelevant,
                errorContextCls,
                errorText,
                errorIconCls,
                isErrorPolite,
                isErrorAtomic,
                renderCustomError,
                ...rest
            } = this.props;
            const { hintText, renderCustomHint, ...compProps } = rest || {};
            const hasError = this.getHasError();

            return {
                ...compProps,
                // Clean up to remove hints when there is an error.
                ...(!hasError && hintText && { hintText }),
                ...(!hasError && renderCustomHint && { renderCustomHint }),
            };
        }

        getHasError() {
            const { errorText, renderCustomError } = this.props;

            return !!errorText || !!renderCustomError;
        }

        baseCls = 'bankai-form-label-composer';
    };

const ErrorComposer = withError;

export default ErrorComposer;
