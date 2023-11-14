import PropTypes from 'prop-types';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import {
    CodeTag,
    StorySection,
    SectionTitle,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionAccessibilityForDevs = (props) => {
    const { disabledBullet } = props;

    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                {getLocale('titles.forDevelopers')}
            </SectionTitle>
            <StorySection>
                <OmniList>
                    <OmniListItem>
                        <strong>
                            Semantic{' '}
                            <abbr title={getLocale('abbreviations.html')}>
                                HTML
                            </abbr>
                            &#58;
                        </strong>{' '}
                        Whenever possible, use the{' '}
                        <CodeTag>&lt;button&gt;</CodeTag> element for buttons,
                        including disabled buttons. It&apos;s semantically
                        correct and provides built-in keyboard and screen reader
                        support.
                        <OmniList>
                            <OmniListItem>
                                If you need buttons that link to other pages,
                                use <CodeTag>&lt;a&gt;</CodeTag> elements with
                                the appropriate role and attributes to make them
                                behave like buttons.
                            </OmniListItem>
                        </OmniList>
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Use aria-label Sparingly&#58;</strong> For
                        buttons with text inside, it&apos;s generally not
                        necessary to use the <CodeTag>aria-label</CodeTag>{' '}
                        attribute, as screen readers will announce the button
                        text. Best practice is to make sure the button&apos;s
                        visible text clearly conveys its purpose.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>
                            Consider aria-label for Icon-Only Buttons&#58;
                        </strong>{' '}
                        If the button contains only an icon without accompanying
                        text, using <CodeTag>aria-label</CodeTag> to provide a
                        concise and descriptive label can enhance accessibility
                        and ensure all users receive clear information about the
                        button&apos;s function.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>
                            Consider Alternatives to Disabling Buttons&#58;
                        </strong>{' '}
                        {disabledBullet}
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Tab Order&#58;</strong> Ensure that both enabled
                        and disabled buttons can be navigated using the keyboard
                        and follow a logical tab order.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Keyboard Interaction&#58;</strong> Buttons,
                        including disabled ones, should be navigable using the
                        Tab key to maintain a consistent user experience.
                        However, disabled buttons should not be interactable
                        when they are in a disabled state, and pressing Enter or
                        Space on a disabled button should have no effect.
                        Ensuring correct keyboard navigation support for buttons
                        provides a seamless and accessible experience for users
                        who rely on keyboard input or assistive technologies.
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

SectionAccessibilityForDevs.propTypes = {
    disabledBullet: PropTypes.element,
};

export default SectionAccessibilityForDevs;
