import cx from 'classnames';
import {
    ComponentPreview,
    genSBBaseCls,
} from '@driponfleek/bankai-lib-storybook';
import { genCSSVars } from '@driponfleek/bankai-lib-theme-utils';
import { Helmet } from 'react-helmet';
import { getCompTheme } from '../../utils/designTokenGenStoryUtils';

// Styles
import './styles/comp-preview-with-ops.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) applied to the root container
 * @param {Array<Object>} [props.tokensData] - Token overrides used to generate a scoped CSS custom property theme
 * @param {Array<Object>} [props.semanticTokens] - Semantic token overrides merged with tokensData for theming
 * @param {Function} [props.renderOps] - Component rendered as the operations/controls panel
 * @param {Object} [props.opsProps] - Props forwarded to the renderOps component
 */
const CompPreviewWithOps = (props) => {
    const {
        contextCls,
        tokensData = [],
        semanticTokens,
        renderOps: Ops,
        opsProps,
        children,
    } = props;
    const baseCls = genSBBaseCls('comp-preview-with-ops');
    const hasTokens = tokensData.length > 0;
    const theme = genCSSVars(
        getCompTheme([...tokensData, ...(semanticTokens || [])]),
        `.${contextCls ?? baseCls} .${baseCls}__preview-container`,
    );

    return (
        <div className={cx(baseCls, contextCls)}>
            {hasTokens && (
                <Helmet>
                    <style>{theme}</style>
                </Helmet>
            )}
            {children && (
                <ComponentPreview contextCls={`${baseCls}__preview-container`}>
                    {children}
                </ComponentPreview>
            )}
            {Ops && (
                <div className={`${baseCls}__ops-container`}>
                    <Ops {...opsProps} />
                </div>
            )}
        </div>
    );
};

export default CompPreviewWithOps;
