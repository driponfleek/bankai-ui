// https://uxmovement.com/forms/infield-top-aligned-labels-floating-labels/
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
    getIFLFFCompExtantProps,
} from './utils/formFieldComposerUtils';

// Styles
import './styles/ifl-form-field-composer.scss';

const withIFLFormField = (Comp) => {
    const Wrapper = (props) => {
        const {
            contextCls,
            id,
            isDisabled,
            isLeftAlignedLabel,
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

    Wrapper.defaultProps = {
        rwSuffix: '_input',
        hasError: false,
        isDisabled: false,
        isLeftAlignedLabel: false,
        isReadOnly: false,
        shouldIncludeError: true,
        shouldIncludeHint: true,
    };

    Wrapper.propTypes = {
        contextCls: PropTypes.string,
        id: PropTypes.string,
        rwSuffix: PropTypes.string,
        variant: PropTypes.string,
        hasError: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isLeftAlignedLabel: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        shouldIncludeError: PropTypes.bool,
        shouldIncludeHint: PropTypes.bool,
        errorProps: PropTypes.object,
        hintProps: PropTypes.object,
        labelProps: PropTypes.object,
        labelSubtextProps: PropTypes.object,
        renderBefore: PropTypes.func,
        renderAfter: PropTypes.func,
    };

    return Wrapper;
};

const IFLFormFieldComposer = withIFLFormField;

export default IFLFormFieldComposer;
