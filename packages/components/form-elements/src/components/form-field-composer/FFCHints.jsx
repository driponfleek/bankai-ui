import PropTypes from 'prop-types';
import cx from 'classnames';
import InlineFormHint from '../../InlineFormHint';
import InlineFormError from '../../InlineFormError';

import { getHasError, getFFCHasHint } from '../../utils/formFieldComposerUtils';

const FFCHints = (props) => {
    const {
        baseCls,
        errorId,
        shouldIncludeError,
        shouldIncludeHint,
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

FFCHints.defaultProps = {
    shouldIncludeError: false,
    shouldIncludeHint: false,
};

FFCHints.propTypes = {
    baseCls: PropTypes.string,
    errorId: PropTypes.string,
    hasError: PropTypes.bool,
    shouldIncludeError: PropTypes.bool,
    shouldIncludeHint: PropTypes.bool,
    errorProps: PropTypes.object,
    hintProps: PropTypes.object,
};

export default FFCHints;
