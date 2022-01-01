import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Styles
import './styles/code-block.scss';

const CodeBlock = (props) => {
    const {
        contextCls,
        language,
        codeString,
        shouldWrapLines,
        shouldShowLineNumbers,
    } = props;
    const styles = { ...coldarkDark };
    delete styles['pre[class*="language-"]'].margin;

    return (
        <SyntaxHighlighter
            className={cx('bankai-sb-code-block', contextCls)}
            language={language}
            wrapLines={shouldWrapLines}
            showLineNumbers={shouldShowLineNumbers}
            style={styles}
        >
            {codeString}
        </SyntaxHighlighter>
    );
};

CodeBlock.defaultProps = {
    language: 'jsx',
    shouldWrapLines: true,
    shouldShowLineNumbers: false,
};

CodeBlock.propTypes = {
    contextCls: PropTypes.string,
    /** CodeString has to use template literal syntax to preserve formatting */
    codeString: PropTypes.string,
    /** Reference https://github.com/conorhastings/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_PRISM.MD for list of languages supported */
    language: PropTypes.string,
    shouldWrapLines: PropTypes.bool,
    shouldShowLineNumbers: PropTypes.bool,
};

export default CodeBlock;
