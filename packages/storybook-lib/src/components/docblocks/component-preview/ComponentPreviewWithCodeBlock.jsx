import { Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ComponentPreview from './ComponentPreview';
import CodeBlock from '../code/CodeBlock';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';
import { getCodeStrFromReactComponents } from '../../../utils/dataMassageUtils';

// Styles
import './styles/component-preview-with-code-block.scss';

const ComponentPreviewWithCodeBlock = (props) => {
    const {
        contextCls,
        copyText,
        copiedText,
        language,
        hasLightBg,
        shouldWrapLines,
        shouldCheckA11Y,
        shouldShowLineNumbers,
        codeStrModifier,
        children,
    } = props;
    const codeStr = getCodeStrFromReactComponents(Children.toArray(children));
    const codeBlockProps = {
        codeString: codeStrModifier ? codeStrModifier(codeStr) : codeStr,
        copyText,
        copiedText,
        language,
        shouldWrapLines,
        shouldShowLineNumbers,
    };
    const baseCls = genSBBaseCls('component-preview-with-code-block');

    return (
        <div className={cx(baseCls, contextCls)}>
            <ComponentPreview
                hasLightBg={hasLightBg}
                shouldCheckA11Y={shouldCheckA11Y}
            >
                {children}
            </ComponentPreview>
            <div className={`${baseCls}__code-block-container`}>
                <CodeBlock {...codeBlockProps} />
            </div>
        </div>
    );
};

ComponentPreviewWithCodeBlock.defaultProps = {
    language: 'jsx',
    hasLightBg: false,
    shouldWrapLines: true,
    shouldCheckA11Y: false,
    shouldShowLineNumbers: false,
};

ComponentPreviewWithCodeBlock.propTypes = {
    contextCls: PropTypes.string,
    copiedText: PropTypes.string,
    copyText: PropTypes.string,
    language: PropTypes.string,
    hasLightBg: PropTypes.bool,
    shouldWrapLines: PropTypes.bool,
    shouldCheckA11Y: PropTypes.bool,
    shouldShowLineNumbers: PropTypes.bool,
    codeStrModifier: PropTypes.func,
};

export default ComponentPreviewWithCodeBlock;
