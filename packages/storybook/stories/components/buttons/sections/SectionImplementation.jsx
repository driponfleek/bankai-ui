import { LinkButton } from '@driponfleek/bankai-ui-buttons';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import { linkTo } from '@storybook/addon-links';
import CompImportAndUsage from '../../../../sb-components/docblocks/CompImportAndUsage';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

/**
 * @param {Object} props
 * @param {string} [props.variant] - Button variant name appended to the component import/usage code strings
 */
const SectionImplementation = (props) => {
    const { variant = '' } = props;

    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.implementation')}</SectionTitle>
            <StorySection>
                <CompImportAndUsage
                    importCodeStr={`import { Button${variant} } from '@driponfleek/bankai-ui-buttons';`}
                    usageCodeStr={`<Button${variant} text="Button Text" />`}
                />
                <Paragraph>
                    To see the full usage please visit the{' '}
                    <LinkButton
                        text={`${getLocale(
                            'stories.components.buttons.buttonGuidelines.title',
                        )} documentation`}
                        onClick={linkTo(
                            'Components/Buttons/Button',
                            'Guidelines',
                        )}
                    />
                    .
                </Paragraph>
            </StorySection>
        </StorySection>
    );
};

export default SectionImplementation;
