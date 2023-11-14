import { CodeBlock as CodeSnippet } from '@driponfleek/bankai-lib-storybook';
import { getLocale } from '../../utils/localeUtils';

const CodeBlock = (props) => {
    const copyText = getLocale('shared.copy');
    const copiedText = getLocale('shared.copied');

    return (
        <CodeSnippet {...props} copyText={copyText} copiedText={copiedText} />
    );
};

export default CodeBlock;
