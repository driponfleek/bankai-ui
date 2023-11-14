import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '@driponfleek/bankai-ui-buttons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Utils
import { genSBBaseCls } from '../../../utils/storiesConfigUtils';
import { copyTextToClipboard } from '../../../utils/clipboardUtils';

// Styles
import './styles/code-block.scss';

// TODO: Need to handle dark mode
const CodeBlock = (props) => {
    const {
        contextCls,
        copiedText,
        copyText,
        language,
        codeString,
        shouldShowCopy,
        shouldShowLineNumbers,
        shouldWrapLines,
    } = props;
    const [copiedCode, setCopiedCode] = useState(undefined);
    const baseCls = genSBBaseCls('code-block');
    const styles = { ...coldarkDark };
    const copyBtnText = copiedCode ? copiedText : copyText;
    let handleClickTimeout;
    const handleClick = () => {
        setCopiedCode(codeString);
    };
    delete styles['pre[class*="language-"]'].margin;
    // TODO: This is so bad, functional components suck. Need to find a way to do this without
    // violating every best practice in programming.
    useEffect(() => {
        clearTimeout(handleClickTimeout);

        if (copiedCode) {
            copyTextToClipboard(copiedCode);
            handleClickTimeout = setTimeout(() => {
                setCopiedCode(undefined);
            }, 1500);
        }

        return () => {
            clearTimeout(handleClickTimeout);
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

CodeBlock.defaultProps = {
    language: 'jsx',
    shouldShowCopy: true,
    shouldShowLineNumbers: false,
    shouldWrapLines: true,
};

CodeBlock.propTypes = {
    contextCls: PropTypes.string,
    /** CodeString has to use template literal syntax to preserve formatting */
    codeString: PropTypes.string,
    copiedText: PropTypes.string,
    copyText: PropTypes.string,
    /** Reference https://github.com/conorhastings/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_PRISM.MD for list of languages supported */
    language: PropTypes.string,
    shouldShowCopy: PropTypes.bool,
    shouldShowLineNumbers: PropTypes.bool,
    shouldWrapLines: PropTypes.bool,
};

export default CodeBlock;
