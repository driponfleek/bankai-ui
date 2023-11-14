import { LinkButton } from '@driponfleek/bankai-ui-buttons';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import { linkTo } from '@storybook/addon-links';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const SectionAccessibility = () => {
    return (
        <StorySection>
            <SectionTitle>
                Accessibility&#58; Ensuring Inclusive Interaction
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    For button accessibility guidelines please visit the{' '}
                    <LinkButton
                        text={`${getLocale(
                            'stories.components.buttons.buttonDefault.title',
                        )} documentation`}
                        onClick={linkTo('Components/Buttons', 'Default')}
                    />
                    .
                </Paragraph>
            </StorySection>
        </StorySection>
    );
};

export default SectionAccessibility;
