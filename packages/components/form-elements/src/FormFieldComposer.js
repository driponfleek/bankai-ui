import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import FormControlHint from './FormControlHint';
import FormLabel from './FormLabel';
import FormLabelSubtext from './FormLabelSubtext';
import InlineFormError from './InlineFormError';

// Constants
import VARIANTS from './const/formFieldComposerVariantsConst';

// Styles
import './styles/form-field-composer.scss';

const { INLINE_LEFT, INLINE_RIGHT, STACKED, TOGGLE } = VARIANTS;

const withFormField = (Comp) =>
    class FormField extends Component {
        static defaultProps = {
            variant: STACKED,
            hasError: false,
            isDisabled: false,
            isReadOnly: false,
            shouldIncludeError: true,
            shouldIncludeHint: true,
        };

        static propTypes = {
            contextCls: PropTypes.string,
            id: PropTypes.string,
            variant: PropTypes.string,
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
            const { contextCls } = this.props;
            const modCls = this.getModCls();
            const renderer = this.getRenderer();

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
            const isDisplayingHint = this.getHasHint() || this.getHasError();
            const hintBaseCls = `${this.baseCls}__hints-container`;
            const modCls = {
                [`${hintBaseCls}--is-displaying-hint`]: isDisplayingHint,
            };

            return (
                <div className={cx(hintBaseCls, modCls)}>
                    {shouldIncludeError && this.renderError()}
                    {shouldIncludeHint && this.renderHint()}
                </div>
            );
        };

        renderComp = () => {
            const props = this.getCompExtantProps();

            return (
                <div className={`${this.baseCls}__control-container`}>
                    <Comp {...props} />
                </div>
            );
        };

        renderError = () => {
            const props = this.getErrorExtantProps();

            return <InlineFormError {...props} />;
        };

        renderHint = () => {
            const props = this.getHintExtantProps();

            return <FormControlHint {...props} />;
        };

        renderLabel = () => {
            const props = this.getLabelExtantProps();
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
            const props = this.getLabelSubtextExtantProps();
            const { renderSubtext, ...rest } = props;

            return renderSubtext ? (
                renderSubtext({ ...rest })
            ) : (
                <FormLabelSubtext {...rest} />
            );
        };

        getRenderer = () => {
            const { variant } = this.props;

            switch (variant) {
                case INLINE_LEFT:
                    return this.renderInlineLeft;
                case INLINE_RIGHT:
                    return this.renderInlineRight;
                case TOGGLE:
                    return this.renderToggle;
                case STACKED:
                default:
                    return this.renderStacked;
            }
        };

        getModCls = () => {
            const { variant, isDisabled, isReadOnly } = this.props;

            return {
                [`${this.baseCls}--is-disabled`]: isDisabled,
                [`${this.baseCls}--is-inline-left`]: variant === INLINE_LEFT,
                [`${this.baseCls}--is-inline-right`]: variant === INLINE_RIGHT,
                [`${this.baseCls}--is-read-only`]: isReadOnly,
                [`${this.baseCls}--is-stacked`]: variant === STACKED,
                [`${this.baseCls}--is-toggle`]: variant === TOGGLE,
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
                ...(shouldIncludeError ? [this.getErrorId()] : []),
                ...(shouldIncludeHint && hasLabel ? [this.getHintId()] : []),
                ...(getHasLabelSubtext && hasLabel
                    ? [this.getSubtextId()]
                    : []),
            ].join(' ');
        };

        getErrorExtantProps = () => {
            const { errorProps } = this.props;

            return {
                ...errorProps,
                id: this.getErrorId(),
            };
        };

        getHintExtantProps = () => {
            const { hintProps } = this.props;
            const hasError = this.getHasError();
            const { hintText, renderHint, ...rest } = hintProps || {};

            return {
                ...rest,
                ...(!hasError && {
                    ...(hintText && { hintText }),
                    ...(renderHint && { renderHint }),
                }),
                id: this.getHintId(),
            };
        };

        getLabelExtantProps = () => {
            const { id, labelProps } = this.props;

            return {
                ...labelProps,
                htmlFor: id || this.id,
            };
        };

        getLabelSubtextExtantProps = () => {
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

        getHasHint = () => {
            const { hintProps } = this.props;
            const { hintText, renderHint } = hintProps || {};

            return !!hintText || !!renderHint;
        };

        getHasError = () => {
            const { hasError, errorProps } = this.props;
            const { errorText, renderError } = errorProps || {};

            return hasError || !!errorText || !!renderError;
        };

        getHasLabel = () => {
            const { labelProps } = this.props;
            const { labelText, renderCustomLabel } = labelProps || {};

            return !!labelText || !!renderCustomLabel;
        };

        getHasLabelSubtext = () => {
            const { labelSubtextProps } = this.props;
            const { subtext, renderSubtext } = labelSubtextProps || {};

            return !!subtext || renderSubtext;
        };

        getCompExtantProps = () => {
            const {
                contextCls,
                variant,
                shouldIncludeError,
                shouldIncludeHint,
                errorProps,
                hintProps,
                labelProps,
                labelSubtextProps,
                id,
                isReadOnly,
                hasError,
                ...rest
            } = this.props;
            const compHasError = this.getHasError();

            return {
                ...rest,
                id: id || this.id,
                ...(isReadOnly && { isReadOnly }),
                ...(compHasError && { hasError: compHasError }),
                ...((shouldIncludeError ||
                    shouldIncludeHint ||
                    this.getHasLabelSubtext()) && {
                    'aria-describedby': this.getCompARIADescByIds(),
                }),
            };
        };

        baseCls = 'bankai-form-field-composer';

        id = `bankai-ff-${uuidv4()}`;
    };

const FormFieldComposer = withFormField;

export default FormFieldComposer;
