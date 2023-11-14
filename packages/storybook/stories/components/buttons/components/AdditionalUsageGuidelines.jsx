import { LinkButton } from '@driponfleek/bankai-ui-buttons';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { linkTo } from '@storybook/addon-links';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const AdditionalUsageGuidelines = () => (
    <Paragraph>
        To see additional do&apos;s, do not do&apos;s and other usage guidelines
        please visit the{' '}
        <LinkButton
            text={`${getLocale(
                'stories.components.buttons.buttonDefault.title',
            )} documentation`}
            onClick={linkTo('Components/Buttons', 'Default')}
        />
        .
    </Paragraph>
);

export default AdditionalUsageGuidelines;
