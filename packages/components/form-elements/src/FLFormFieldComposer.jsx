import { useState } from 'react';
import PropTypes from 'prop-types';
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
    const Wrapper = (props) => {
        const {
            contextCls,
            id,
            isDisabled,
            renderBefore,
            renderAfter,
            onChange,
            isReadOnly,
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

    Wrapper.defaultProps = {
        rwSuffix: '_input',
        hasError: false,
        isDisabled: false,
        isReadOnly: false,
        shouldIncludeError: true,
        shouldIncludeHint: true,
        onChange: () => Promise.resolve(),
    };

    Wrapper.propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        'aria-label': PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        rwSuffix: PropTypes.string,
        hasError: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        shouldIncludeError: PropTypes.bool,
        shouldIncludeHint: PropTypes.bool,
        errorProps: PropTypes.object,
        hintProps: PropTypes.object,
        labelProps: PropTypes.shape({
            labelText: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element,
            ]),
        }),
        renderBefore: PropTypes.func,
        renderAfter: PropTypes.func,
        onChange: PropTypes.func,
    };

    return Wrapper;
};

const FLFormFieldComposer = withFLFormField;

export default FLFormFieldComposer;
