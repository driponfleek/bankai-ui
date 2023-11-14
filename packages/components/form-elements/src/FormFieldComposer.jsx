import PropTypes from 'prop-types';
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

// Constants
import VARIANTS from './const/formFieldComposerVariantsConst';

// Styles
import './styles/form-field-composer.scss';

const { STACKED } = VARIANTS;

const withFormField = (Comp) => {
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

    Wrapper.defaultProps = {
        rwSuffix: '_input',
        variant: STACKED,
        hasError: false,
        isDisabled: false,
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
        isReadOnly: PropTypes.bool,
        shouldIncludeError: PropTypes.bool,
        shouldIncludeHint: PropTypes.bool,
        errorProps: PropTypes.object,
        hintProps: PropTypes.object,
        labelProps: PropTypes.object,
        labelSubtextProps: PropTypes.object,
    };

    return Wrapper;
};

const FormFieldComposer = withFormField;

export default FormFieldComposer;
