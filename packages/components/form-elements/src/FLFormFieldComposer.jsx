import { useState } from 'react';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import FFCLabel from './components/form-field-composer/FFCLabel';
import FFCHints from './components/form-field-composer/FFCHints';

// Utils
import {
    getHasLabel,
    getHasError,
    getShouldRenderHints,
    getFLFFCHasVal,
    getFLFFCSanatizedProps,
    getFLFFCModCls,
} from './utils/formFieldComposerUtils';

// Styles
import './styles/fl-form-field-composer.scss';

const withFLFormField = (Comp) => {
    /**
     * @param {Object} props
     * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
     * @param {string} [props.id] - ID for the form control; auto-generated if not provided
     * @param {string} [props.'aria-label'] - Accessible label for the form control
     * @param {string} [props.placeholder] - Placeholder text for the form control
     * @param {string} [props.value] - Current value of the form control
     * @param {string} [props.rwSuffix] - Suffix used for react-widgets component IDs
     * @param {boolean} [props.hasError] - Whether the form field is in an error state
     * @param {boolean} [props.isDisabled] - Whether the form field is disabled
     * @param {boolean} [props.isReadOnly] - Whether the form field is read-only
     * @param {boolean} [props.shouldIncludeError] - Whether to render an inline error message
     * @param {boolean} [props.shouldIncludeHint] - Whether to render an inline hint message
     * @param {Object} [props.errorProps] - Props passed to the InlineFormError component
     * @param {Object} [props.hintProps] - Props passed to the InlineFormHint component
     * @param {Object} [props.labelProps] - Props for the label (supports `labelText`)
     * @param {Function} [props.renderBefore] - Render function for content prepended before the control
     * @param {Function} [props.renderAfter] - Render function for content appended after the control
     * @param {Function} [props.onChange] - Callback fired when the form control value changes
     */
    const Wrapper = (props) => {
        const {
            contextCls,
            id,
            isDisabled = false,
            renderBefore,
            renderAfter,
            onChange = Wrapper.onChange,
            isReadOnly = false,
        } = props;
        const baseCls = 'bankai-fl-form-field-composer';
        const [hasValue, setHasValue] = useState(getFLFFCHasVal(props));
        const hasLabel = getHasLabel(props);
        const hasError = getHasError(props);
        const shouldRenderHints = getShouldRenderHints(props);
        const fallbackId = `bankai-ffc-${uuidv4()}`;
        const compId = id || fallbackId;
        const errorId = `${compId}-error`;
        const hintId = `${compId}-hint`;
        const modCls = getFLFFCModCls(
            {
                isDisabled,
                hasError,
                isReadOnly,
                hasValue,
                hasLabel,
            },
            baseCls,
        );
        const compProps = getFLFFCSanatizedProps({
            ...props,
            hasError,
            hasLabel,
            errorId,
            hintId,
            id: compId,
        });
        const handleChange = (evt) => {
            const newState = {};

            if (evt?.target?.value !== undefined) {
                const evtVal = evt?.target?.value?.trim();
                newState.hasValue = evtVal.length > 0;
            } else if (Array.isArray(evt)) {
                newState.hasValue = evt.length > 0;
            } else {
                newState.hasValue = !!evt;
            }

            if (hasValue !== newState.hasValue) {
                setHasValue(newState.hasValue);
            }

            if (onChange) {
                onChange(evt);
            }
        };

        return (
            <div className={cx(baseCls, modCls, contextCls)}>
                <div className={`${baseCls}__inner`}>
                    <div className={`${baseCls}__content-container`}>
                        {!!renderBefore && (
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
                                <Comp {...compProps} onChange={handleChange} />
                                {hasLabel && (
                                    <FFCLabel
                                        {...props}
                                        id={compId}
                                        baseCls={baseCls}
                                    />
                                )}
                            </div>
                        </div>
                        {!!renderAfter && (
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

    Wrapper.onChange = () => Promise.resolve();

    return Wrapper;
};

const FLFormFieldComposer = withFLFormField;

export default FLFormFieldComposer;
