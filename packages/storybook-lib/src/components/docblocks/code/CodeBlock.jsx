import { useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { Button } from '@driponfleek/bankai-ui-buttons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';
import { copyTextToClipboard } from '../../../utils/clipboardUtils';

// Styles
import './styles/code-block.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.codeString] - Code to display; use template literal syntax to preserve formatting
 * @param {string} [props.copiedText] - Button label shown after the code has been copied
 * @param {string} [props.copyText] - Button label for the copy action
 * @param {string} [props.language] - Syntax highlighting language; see react-syntax-highlighter AVAILABLE_LANGUAGES_PRISM for supported values
 * @param {boolean} [props.shouldShowCopy] - Shows the copy button
 * @param {boolean} [props.shouldShowLineNumbers] - Shows line numbers in the code block
 * @param {boolean} [props.shouldWrapLines] - Wraps long lines instead of scrolling horizontally
 */
// TODO: Need to handle dark mode
const CodeBlock = (props) => {
    const {
        contextCls,
        copiedText,
        copyText,
        language = 'jsx',
        codeString,
        shouldShowCopy = true,
        shouldShowLineNumbers = false,
        shouldWrapLines = true,
    } = props;
    const [copiedCode, setCopiedCode] = useState(undefined);
    const baseCls = genSBBaseCls('code-block');
    const styles = { ...coldarkDark };
    const copyBtnText = copiedCode ? copiedText : copyText;
    const handleClickTimeout = useRef(undefined);
    const handleClick = () => {
        setCopiedCode(codeString);
    };
    delete styles['pre[class*="language-"]'].margin;
    // TODO: This is so bad, functional components suck. Need to find a way to do this without
    // violating every best practice in programming.
    useEffect(() => {
        clearTimeout(handleClickTimeout.current);

        if (copiedCode) {
            copyTextToClipboard(copiedCode);
            handleClickTimeout.current = setTimeout(() => {
                setCopiedCode(undefined);
            }, 1500);
        }

        return () => {
            clearTimeout(handleClickTimeout.current);
        };
    }, [copiedCode]);

    return (
        <div className={cx(baseCls, contextCls)}>
            <SyntaxHighlighter
                className={`${baseCls}__syntax-highlighter`}
                language={language}
                wrapLines={shouldWrapLines}
                showLineNumbers={shouldShowLineNumbers}
                style={styles}
            >
                {codeString}
            </SyntaxHighlighter>
            {shouldShowCopy && (
                <Button
                    contextCls={`${baseCls}__copy-btn`}
                    text={copyBtnText}
                    onClick={handleClick}
                />
            )}
        </div>
    );
};

export default CodeBlock;
