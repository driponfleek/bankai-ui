import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import FormControlHint from './FormControlHint';
import FormLabel from './FormLabel';
import FormLabelSubtext from './FormLabelSubtext';
import InlineFormError from './InlineFormError';

// Constants
import MODES from './const/formFieldComposerModesConst';

// Styles
import './styles/form-field-composer.scss';

const { INLINE_LEFT, INLINE_RIGHT, STACKED, TOGGLE } = MODES;

const withFormField = (Comp) =>
    class FormField extends Component {
        static defaultProps = {
            mode: STACKED,
            hasError: false,
            isDisabled: false,
            isReadOnly: false,
            shouldIncludeError: true,
            shouldIncludeHint: true,
        };

        static propTypes = {
            contextCls: PropTypes.string,
            id: PropTypes.string,
            mode: PropTypes.string,
            hasError: PropTypes.bool,
            isDisabled: PropTypes.bool,
            isReadOnly: PropTypes.bool,
            shouldIncludeError: PropTypes.bool,
            shouldIncludeHint: PropTypes.bool,
            errorProps: PropTypes.object,
            hintProps: PropTypes.object,
            labelProps: PropTypes.object,
            labelSubtextProps: PropTypes.object,
        };

        render() {
            const { contextCls, mode } = this.props;
            const modCls = this.getModCls();
            let renderer;

            switch (mode) {
                case INLINE_LEFT:
                    renderer = this.renderInlineLeft;
                    break;
                case INLINE_RIGHT:
                    renderer = this.renderInlineRight;
                    break;
                case TOGGLE:
                    renderer = this.renderToggle;
                    break;
                case STACKED:
                default:
                    renderer = this.renderStacked;
                    break;
            }

            return (
                <div className={cx(this.baseCls, modCls, contextCls)}>
                    <div className={`${this.baseCls}__inner`}>{renderer()}</div>
                </div>
            );
        }

        renderInlineLeft = () => {
            const hasLabel = this.getHasLabel();
            const hasHints = this.getHasHints();

            return (
                <Fragment>
                    {hasLabel && this.renderLabel()}
                    <div className={`${this.baseCls}__control-hint-container`}>
                        {this.renderComp()}
                        {hasHints && this.renderHints()}
                    </div>
                </Fragment>
            );
        };

        renderInlineRight = () => {
            const hasLabel = this.getHasLabel();
            const hasHints = this.getHasHints();

            return (
                <Fragment>
                    <div className={`${this.baseCls}__control-hint-container`}>
                        {this.renderComp()}
                        {hasHints && this.renderHints()}
                    </div>
                    {hasLabel && this.renderLabel()}
                </Fragment>
            );
        };

        renderStacked = () => {
            const hasLabel = this.getHasLabel();
            const hasHints = this.getHasHints();

            return (
                <Fragment>
                    {hasLabel && this.renderLabel()}
                    {this.renderComp()}
                    {hasHints && this.renderHints()}
                </Fragment>
            );
        };

        renderToggle = () => {
            const hasLabel = this.getHasLabel();
            const hasHints = this.getHasHints();

            return (
                <Fragment>
                    <div className={`${this.baseCls}__control-hint-container`}>
                        {this.renderComp()}
                        {hasLabel && this.renderLabel()}
                    </div>
                    {hasHints && this.renderHints()}
                </Fragment>
            );
        };

        renderHints = () => {
            const { shouldIncludeError, shouldIncludeHint } = this.props;

            return (
                <div className={`${this.baseCls}__hints-container`}>
                    {shouldIncludeError && this.renderError()}
                    {shouldIncludeHint && this.renderHint()}
                </div>
            );
        };

        renderComp = () => {
            const props = this.getCompProps();

            return (
                <div className={`${this.baseCls}__control-container`}>
                    <Comp {...props} />
                </div>
            );
        };

        renderError = () => {
            const props = this.getErrorProps();

            return <InlineFormError {...props} />;
        };

        renderHint = () => {
            const props = this.getHintProps();

            return <FormControlHint {...props} />;
        };

        renderLabel = () => {
            const props = this.getLabelProps();
            const hasSubtext = this.getHasLabelSubtext();

            return (
                <div className={`${this.baseCls}__label-container`}>
                    <div className={`${this.baseCls}__label-container-inner`}>
                        <FormLabel {...props} />
                        {hasSubtext && this.renderSubText()}
                    </div>
                </div>
            );
        };

        renderSubText = () => {
            const props = this.getLabelSubtextProps();

            return <FormLabelSubtext {...props} />;
        };

        getModCls = () => {
            const { mode, isDisabled, isReadOnly } = this.props;

            return {
                [`${this.baseCls}--is-disabled`]: isDisabled,
                [`${this.baseCls}--is-inline-left`]: mode === INLINE_LEFT,
                [`${this.baseCls}--is-inline-right`]: mode === INLINE_RIGHT,
                [`${this.baseCls}--is-read-only`]: isReadOnly,
                [`${this.baseCls}--is-stacked`]: mode === STACKED,
                [`${this.baseCls}--is-toggle`]: mode === TOGGLE,
            };
        };

        getErrorId = () => {
            const { id } = this.props;

            return `${id || this.id}-error`;
        };

        getHintId = () => {
            const { id } = this.props;

            return `${id || this.id}-hint`;
        };

        getSubtextId = () => {
            const { id } = this.props;

            return `${id || this.id}-subtext`;
        };

        getCompARIADescByIds = () => {
            const { shouldIncludeHint, shouldIncludeError } = this.props;
            const hasLabel = this.getHasLabel();
            const getHasLabelSubtext = this.getHasLabelSubtext();

            return [
                ...(shouldIncludeError && [this.getErrorId()]),
                ...(hasLabel && getHasLabelSubtext && [this.getHintId()]),
                ...(shouldIncludeHint && [this.getHintId()]),
            ].join(' ');
        };

        getErrorProps = () => {
            const { errorProps } = this.props;

            return {
                ...errorProps,
                id: this.getErrorId(),
            };
        };

        getHintProps = () => {
            const { hintProps } = this.props;
            const hasError = this.getHasError();
            const { hintText, renderCustomHint, ...rest } = hintProps || {};

            return {
                ...rest,
                ...(!hasError && {
                    ...(hintText && { hintText }),
                    ...(renderCustomHint && { renderCustomHint }),
                }),
                id: this.getHintId(),
            };
        };

        getLabelProps = () => {
            const { id, labelProps } = this.props;

            return {
                ...labelProps,
                htmlFor: id || this.id,
            };
        };

        getLabelSubtextProps = () => {
            const { labelSubtextProps } = this.props;

            return {
                ...labelSubtextProps,
                id: this.getSubtextId(),
            };
        };

        getHasHints = () => {
            const { shouldIncludeError, shouldIncludeHint } = this.props;

            return shouldIncludeError || shouldIncludeHint;
        };

        getHasError = () => {
            const { hasError, errorProps } = this.props;
            const { errorText, renderCustomError } = errorProps || {};

            return hasError || !!errorText || !!renderCustomError;
        };

        getHasLabel = () => {
            const { labelProps } = this.props;
            const { labelText, renderCustomLabel } = labelProps || {};

            return !!labelText || !!renderCustomLabel;
        };

        getHasLabelSubtext = () => {
            const { labelSubtextProps } = this.props;
            const { subtext, renderCustomSubtext } = labelSubtextProps || {};

            return !!subtext || renderCustomSubtext;
        };

        getCompProps = () => {
            const {
                contextCls,
                mode,
                shouldIncludeError,
                shouldIncludeHint,
                errorProps,
                hintProps,
                labelProps,
                labelSubtextProps,
                ...rest
            } = this.props;
            const hasError = this.getHasError();

            return {
                ...rest,
                ...(hasError && { hasError }),
                ...(shouldIncludeError ||
                    (shouldIncludeHint && {
                        'aria-describedby': this.getCompARIADescByIds,
                    })),
            };
        };

        baseCls = 'bankai-form-field-composer';

        id = `bankai-ff-${uuidv4()}`;
    };

const FormFieldComposer = withFormField;

export default FormFieldComposer;
