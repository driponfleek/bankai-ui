import PropTypes from 'prop-types';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import {
    CodeTag,
    StorySection,
    SectionTitle,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionAccessibilityForDesigners = (props) => {
    const { disabledBullet } = props;

    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                {getLocale('titles.forDesigners')}
            </SectionTitle>
            <StorySection>
                <OmniList>
                    <OmniListItem>
                        <strong>Contrast Matters&#58;</strong> Ensure that the
                        color contrast between the button&apos;s text and
                        background meets the{' '}
                        <Hyperlink
                            href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                            shouldOpenInNewWindow
                        >
                            accessibility requirement for text contrast
                        </Hyperlink>
                        , as outlined in Web Content Accessibility Guidelines
                        &#40;WCAG&#41;. This helps users with visual impairments
                        read and understand the content.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Clear Button Text&#58;</strong>{' '}
                        <Hyperlink
                            href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                            shouldOpenInNewWindow
                        >
                            Button text should clearly convey its purpose
                        </Hyperlink>
                        . This ensures that all users, including those relying
                        on screen readers, understand the button&apos;s
                        function.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>
                            Provide aria-labels for Buttons Without Text&#58;
                        </strong>{' '}
                        If the button does not contain text, using{' '}
                        <CodeTag>aria-label</CodeTag> to provide a concise and
                        descriptive label can enhance accessibility and ensure
                        all users receive clear information about the
                        button&apos;s function. Design includes what can&apos;t
                        be seen which means we are also responsible for
                        providing these types of details. Be pro-active about
                        providing these to your developers!
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Visible Focus Indicator&#58;</strong>{' '}
                        <Hyperlink
                            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
                            shouldOpenInNewWindow
                        >
                            Design clear and visible focus indicators
                        </Hyperlink>{' '}
                        for buttons, including disabled buttons. These
                        indicators help keyboard and screen reader users
                        understand which button they have selected and maintain
                        a consistent user experience.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>
                            Avoid Disabled Buttons When Possible&#58;
                        </strong>{' '}
                        {disabledBullet}
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

SectionAccessibilityForDesigners.propTypes = {
    disabledBullet: PropTypes.element,
};

export default SectionAccessibilityForDesigners;
