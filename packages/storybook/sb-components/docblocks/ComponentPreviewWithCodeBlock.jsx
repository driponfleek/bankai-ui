import { ComponentPreviewWithCodeBlock as PlaygroundWithCode } from '@driponfleek/bankai-lib-storybook';
import { getLocale } from '../../utils/localeUtils';

const ComponentPreviewWithCodeBlock = (props) => {
    const copyText = getLocale('shared.copy');
    const copiedText = getLocale('shared.copied');

    return (
        <PlaygroundWithCode
            {...props}
            copyText={copyText}
            copiedText={copiedText}
        />
    );
};

export default ComponentPreviewWithCodeBlock;
