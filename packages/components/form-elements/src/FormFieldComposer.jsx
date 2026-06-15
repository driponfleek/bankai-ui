import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';

// Utils
import {
    getFFCCompExtantProps,
    getFFCHasHint,
    getHasError,
    getHasLabel,
    getFormFieldComposerModCls,
    getShouldRenderHints,
} from './utils/formFieldComposerUtils';
import { getFFCRenderer } from './utils/formFieldComposerRendererUtil';

// Styles
import './styles/form-field-composer.scss';

// TODO: Need to remove need for variants
const withFormField = (Comp) => {
    /**
     * @param {Object} props
     * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
     * @param {string} [props.id] - ID for the form control; auto-generated if not provided
     * @param {string} [props.rwSuffix] - Suffix used for react-widgets component IDs
     * @param {string} [props.variant] - Layout variant for the form field composer
     * @param {boolean} [props.hasError] - Whether the form field is in an error state
     * @param {boolean} [props.isDisabled] - Whether the form field is disabled
     * @param {boolean} [props.isReadOnly] - Whether the form field is read-only
     * @param {boolean} [props.shouldIncludeError] - Whether to render an inline error message
     * @param {boolean} [props.shouldIncludeHint] - Whether to render an inline hint message
     * @param {Object} [props.errorProps] - Props passed to the InlineFormError component
     * @param {Object} [props.hintProps] - Props passed to the InlineFormHint component
     * @param {Object} [props.labelProps] - Props for the label
     * @param {Object} [props.labelSubtextProps] - Props for the label subtext
     */
    const Wrapper = (props) => {
        const { contextCls, id, ...rest } = props;
        const baseCls = 'bankai-form-field-composer';
        const fallbackId = `bankai-ffc-${uuidv4()}`;
        const modCls = getFormFieldComposerModCls(props, baseCls);
        const CompWrapper = getFFCRenderer(props);
        const compId = id || fallbackId;
        const hasHint = getFFCHasHint(props);
        const hasError = getHasError(props);
        const hasLabel = getHasLabel(props);
        const errorId = `${compId}-error`;
        const hintId = `${compId}-hint`;
        const shouldRenderHints = getShouldRenderHints(props);
        const compProps = getFFCCompExtantProps({
            ...props,
            hasError,
            errorId,
            hintId,
            id: compId,
        });

        return (
            <div className={cx(baseCls, modCls, contextCls)}>
                <div className={`${baseCls}__inner`}>
                    <CompWrapper
                        {...rest}
                        baseCls={baseCls}
                        id={compId}
                        shouldRenderHints={shouldRenderHints}
                        errorId={errorId}
                        hintId={hintId}
                        hasHint={hasHint}
                        hasError={hasError}
                        hasLabel={hasLabel}
                    >
                        <div className={`${baseCls}__control-container`}>
                            <Comp {...compProps} />
                        </div>
                    </CompWrapper>
                </div>
            </div>
        );
    };

    return Wrapper;
};

const FormFieldComposer = withFormField;

export default FormFieldComposer;
