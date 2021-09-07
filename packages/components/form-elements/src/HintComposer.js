import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const withHint = (Comp) =>
    class FormHint extends PureComponent {
        static defaultProps = {
            isHintARIAAtomic: false,
        };

        static propTypes = {
            hintARIALive: PropTypes.string,
            hintARIARelevant: PropTypes.string,
            hintContextCls: PropTypes.string,
            hintText: PropTypes.string,
            isHintARIAAtomic: PropTypes.bool,
            renderCustomHint: PropTypes.func,
        };

        render() {
            const { hintContextCls } = this.props;
            const ariaProps = this.getARIAProps();
            const hasHint = this.getHasHint();

            return (
                <Fragment>
                    {!!Comp && this.renderComp()}
                    <span
                        {...ariaProps}
                        className={cx(this.baseCls, hintContextCls)}
                    >
                        {hasHint && this.renderHint()}
                    </span>
                </Fragment>
            );
        }

        renderComp() {
            const props = this.getCompProps();

            return <Comp {...props} />;
        }

        renderHint() {
            const { renderCustomHint } = this.props;

            return renderCustomHint
                ? this.renderCustomHint()
                : this.renderDefaultHint();
        }

        renderDefaultHint() {
            const { hintText } = this.props;

            return <span className={`${this.baseCls}__text`}>{hintText}</span>;
        }

        renderCustomHint() {
            const {
                hintARIALive,
                hintARIARelevant,
                isHintARIAAtomic,
                renderCustomHint,
                ...rest
            } = this.props;

            return renderCustomHint({ ...rest });
        }

        getARIAProps() {
            const {
                hintARIALive,
                hintARIARelevant,
                isHintARIAAtomic,
            } = this.props;

            // https://hiddedevries.nl/en/blog/2017-04-04-how-to-make-inline-error-messages-accessible
            // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
            return {
                ...(isHintARIAAtomic && { 'aria-atomic': isHintARIAAtomic }),
                ...(hintARIALive && { 'aria-live': hintARIALive }),
                ...(hintARIARelevant && {
                    'aria-relevant': hintARIARelevant,
                }),
            };
        }

        getCompProps() {
            const {
                hintARIALive,
                hintARIARelevant,
                hintContextCls,
                hintText,
                isHintARIAAtomic,
                renderCustomHint,
                ...rest
            } = this.props;

            return { ...rest };
        }

        getHasHint() {
            const { hintText, renderCustomHint } = this.props;

            return !!hintText || !!renderCustomHint;
        }

        baseCls = 'bankai-form-hint-composer';
    };

const HintComposer = withHint;

export default HintComposer;
