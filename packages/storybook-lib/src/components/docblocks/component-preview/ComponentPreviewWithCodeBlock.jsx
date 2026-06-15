import { Children } from 'react';
import cx from 'classnames';
import ComponentPreview from './ComponentPreview';
import CodeBlock from '../code/CodeBlock';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';
import { getCodeStrFromReactComponents } from '../../../utils/dataMassageUtils';

// Styles
import './styles/component-preview-with-code-block.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.copiedText] - Button label shown after code has been copied
 * @param {string} [props.copyText] - Button label for the copy action
 * @param {string} [props.language] - Syntax highlighting language for the code block
 * @param {boolean} [props.hasLightBg] - Applies a light background modifier class to the component preview
 * @param {boolean} [props.shouldCheckA11Y] - Applies a modifier class for a11y checking
 * @param {boolean} [props.shouldShowCopy] - Shows the copy button in the code block
 * @param {boolean} [props.shouldShowLineNumbers] - Shows line numbers in the code block
 * @param {boolean} [props.shouldWrapLines] - Wraps long lines in the code block
 * @param {Function} [props.codeStrModifier] - Function to transform the auto-generated code string before display
 * @param {React.ReactNode} [props.children] - Components to render in the preview; also serialized to generate the displayed code string
 */
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

export default ComponentPreviewWithCodeBlock;
