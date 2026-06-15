import cx from 'classnames';
import InlineFormHint from '../../InlineFormHint';
import InlineFormError from '../../InlineFormError';

import { getHasError, getFFCHasHint } from '../../utils/formFieldComposerUtils';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to derive hint container classes
 * @param {string} [props.errorId] - ID passed to the InlineFormError component
 * @param {boolean} [props.hasError] - Whether an error state is active
 * @param {boolean} [props.shouldIncludeError] - Whether to render the error component
 * @param {boolean} [props.shouldIncludeHint] - Whether to render the hint component
 * @param {Object} [props.errorProps] - Props forwarded to InlineFormError
 * @param {Object} [props.hintProps] - Props forwarded to InlineFormHint
 */
const FFCHints = (props) => {
    const {
        baseCls,
        errorId,
        shouldIncludeError = false,
        shouldIncludeHint = false,
        errorProps,
        hintProps,
    } = props;
    const isDisplayingHint = getFFCHasHint(props) || getHasError(props);
    const hintBaseCls = `${baseCls}__hints-container`;
    const modCls = {
        [`${hintBaseCls}--is-displaying-hint`]: isDisplayingHint,
    };
    const { children: hintChildren, ...hintPropsRest } = hintProps ?? {};
    const { children: errorChildren } = errorProps ?? {};
    const inlineHintProps = {
        ...hintPropsRest,
        ...(!errorChildren && {
            ...(hintChildren && { children: hintChildren }),
        }),
    };

    return (
        <div className={cx(hintBaseCls, modCls)}>
            {shouldIncludeError && (
                <InlineFormError {...errorProps} id={errorId} />
            )}
            {shouldIncludeHint && <InlineFormHint {...inlineHintProps} />}
        </div>
    );
};

export default FFCHints;
