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

const CompPreviewWithOps = (props) => {
    const {
        contextCls,
        tokensData = [],
        renderOps: Ops,
        opsProps,
        children,
    } = props;
    const baseCls = genSBBaseCls('comp-preview-with-ops');
    const hasTokens = tokensData.length > 0;
    const theme = genCSSVars(
        getCompTheme(tokensData),
        `.${contextCls ?? baseCls}`,
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
