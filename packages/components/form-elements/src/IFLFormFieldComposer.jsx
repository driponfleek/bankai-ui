// https://uxmovement.com/forms/infield-top-aligned-labels-floating-labels/
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import FFCLabel from './components/form-field-composer/FFCLabel';
import FFCHints from './components/form-field-composer/FFCHints';

// Utils
import {
    getHasLabel,
    getHasError,
    getShouldRenderHints,
    getIFLFFCompExtantProps,
} from './utils/formFieldComposerUtils';

// Styles
import './styles/ifl-form-field-composer.scss';

const withIFLFormField = (Comp) => {
    /**
     * @param {Object} props
     * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
     * @param {string} [props.id] - ID for the form control; auto-generated if not provided
     * @param {string} [props.rwSuffix] - Suffix used for react-widgets component IDs
     * @param {string} [props.variant] - Layout variant for the form field composer
     * @param {boolean} [props.hasError] - Whether the form field is in an error state
     * @param {boolean} [props.isDisabled] - Whether the form field is disabled
     * @param {boolean} [props.isLeftAlignedLabel] - Whether to position the label to the left of the control
     * @param {boolean} [props.isReadOnly] - Whether the form field is read-only
     * @param {boolean} [props.shouldIncludeError] - Whether to render an inline error message
     * @param {boolean} [props.shouldIncludeHint] - Whether to render an inline hint message
     * @param {Object} [props.errorProps] - Props passed to the InlineFormError component
     * @param {Object} [props.hintProps] - Props passed to the InlineFormHint component
     * @param {Object} [props.labelProps] - Props for the label
     * @param {Object} [props.labelSubtextProps] - Props for the label subtext
     * @param {Function} [props.renderBefore] - Render function for content prepended before the control
     * @param {Function} [props.renderAfter] - Render function for content appended after the control
     */
    const Wrapper = (props) => {
        const {
            contextCls,
            id,
            isDisabled = false,
            isLeftAlignedLabel = false,
            renderBefore,
            renderAfter,
        } = props;
        const hasLabel = getHasLabel(props);
        const hasError = getHasError(props);
        const shouldRenderHints = getShouldRenderHints(props);
        const fallbackId = `bankai-ffc-${uuidv4()}`;
        const compId = id || fallbackId;
        const errorId = `${compId}-error`;
        const hintId = `${compId}-hint`;
        const baseCls = 'bankai-ifl-form-field-composer';
        const modCls = {
            [`${baseCls}--left-aligned-label`]: isLeftAlignedLabel,
            [`${baseCls}--top-aligned-label`]: !isLeftAlignedLabel,
            [`${baseCls}--disabled`]: isDisabled,
            [`${baseCls}--error`]: hasError,
        };
        const compProps = getIFLFFCompExtantProps({
            ...props,
            hasError,
            errorId,
            hintId,
            id: compId,
        });

        return (
            <div className={cx(baseCls, modCls, contextCls)}>
                <div className={`${baseCls}__inner`}>
                    {hasLabel && (
                        <FFCLabel {...props} id={compId} baseCls={baseCls} />
                    )}
                    <div className={`${baseCls}__content-container`}>
                        {renderBefore && (
                            <div
                                className={`${baseCls}__before-content-container`}
                            >
                                {renderBefore()}
                            </div>
                        )}
                        <div className={`${baseCls}__control-container`}>
                            <div
                                className={`${baseCls}__control-container-inner`}
                            >
                                <Comp {...compProps} />
                            </div>
                        </div>
                        {/* <div className={`${baseCls}__focus-halo`} /> */}
                        {renderAfter && (
                            <div
                                className={`${baseCls}__after-content-container`}
                            >
                                {renderAfter()}
                            </div>
                        )}
                    </div>
                </div>
                {shouldRenderHints && (
                    <FFCHints
                        {...props}
                        baseCls={baseCls}
                        errorId={errorId}
                        hintId={hintId}
                    />
                )}
            </div>
        );
    };

    return Wrapper;
};

const IFLFormFieldComposer = withIFLFormField;

export default IFLFormFieldComposer;
