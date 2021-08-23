import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ComponentPreview from './ComponentPreview';
import CodeBlock from './CodeBlock';

// Styles
import './styles/component-preview-with-code-block.scss';

const ComponentPreviewWithCodeBlock = (props) => {
    const {
        contextCls,
        codeString,
        language,
        hasLightBg,
        shouldWrapLines,
        shouldCheckA11Y,
        shouldShowLineNumbers,
        children,
    } = props;
    const codeBlockProps = {
        codeString,
        language,
        shouldWrapLines,
        shouldShowLineNumbers,
    };

    return (
        <div
            className={cx(
                'bankai-sb-component-preview-with-code-block',
                contextCls,
            )}
        >
            <ComponentPreview
                hasLightBg={hasLightBg}
                shouldCheckA11Y={shouldCheckA11Y}
            >
                {children}
            </ComponentPreview>
            <CodeBlock {...codeBlockProps} />
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
    codeString: PropTypes.string,
    language: PropTypes.string,
    hasLightBg: PropTypes.bool,
    shouldWrapLines: PropTypes.bool,
    shouldCheckA11Y: PropTypes.bool,
    shouldShowLineNumbers: PropTypes.bool,
};

export default ComponentPreviewWithCodeBlock;
