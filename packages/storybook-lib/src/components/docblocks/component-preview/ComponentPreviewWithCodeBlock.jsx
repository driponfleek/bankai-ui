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
        language = 'jsx',
        hasLightBg = false,
        shouldCheckA11Y = false,
        shouldShowCopy,
        shouldShowLineNumbers = false,
        shouldWrapLines = true,
        codeStrModifier,
        children,
    } = props;
    // TODO: Need to memoize this properly
    const codeStr = getCodeStrFromReactComponents(Children.toArray(children));
    const codeBlockProps = {
        codeString: codeStrModifier ? codeStrModifier(codeStr) : codeStr,
        copyText,
        copiedText,
        language,
        shouldShowCopy,
        shouldShowLineNumbers,
        shouldWrapLines,
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

ComponentPreviewWithCodeBlock.propTypes = {
    contextCls: PropTypes.string,
    copiedText: PropTypes.string,
    copyText: PropTypes.string,
    language: PropTypes.string,
    hasLightBg: PropTypes.bool,
    shouldCheckA11Y: PropTypes.bool,
    shouldShowCopy: PropTypes.bool,
    shouldShowLineNumbers: PropTypes.bool,
    shouldWrapLines: PropTypes.bool,
    codeStrModifier: PropTypes.func,
};

export default ComponentPreviewWithCodeBlock;
