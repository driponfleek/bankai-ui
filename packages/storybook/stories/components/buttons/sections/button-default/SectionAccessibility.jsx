import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import {
    StorySection,
    SectionTitle,
    CodeTag,
} from '@driponfleek/bankai-lib-storybook';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionAccessibility = () => {
    const disabledText = (
        <>
            Buttons disabled using the <CodeTag>disabled</CodeTag> attribute
            aren&apos;t focusable and can&apos;t be reached by keyboard
            navigation. When needing to visually display a button in a disabled
            state, think through the requirements of making it accessible
            without using the <CodeTag>disabled</CodeTag> attribute.
        </>
    );
    // const disabledText =
    //     'Disabled buttons may not always be properly conveyed to users relying on assistive technologies like screen readers. This can result in a lack of clarity for users with disabilities.';

    return (
        <StorySection>
            <SectionTitle>
                Accessibility&#58; Ensuring Inclusive Interaction
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    Buttons are essential interactive elements, and it&apos;s
                    crucial to ensure that they are accessible to all users,
                    regardless of their abilities. Here are some key
                    considerations and tips for both designers and developers to
                    make buttons, including disabled buttons, more
                    accessible&#58;
                </Paragraph>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale('titles.forDesigners')}
                </SectionTitle>
                <StorySection>
                    <OmniList>
                        <OmniListItem>
                            <strong>Contrast Matters&#58;</strong> Ensure that
                            the color contrast between the button&apos;s text
                            and background meets the{' '}
                            <Hyperlink
                                href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
                                shouldOpenInNewWindow
                            >
                                accessibility requirement for text contrast
                            </Hyperlink>
                            , as outlined in Web Content Accessibility
                            Guidelines &#40;WCAG&#41;. This helps users with
                            visual impairments read and understand the content.
                        </OmniListItem>
                        <OmniListItem>
                            <strong>Clear Button Text&#58;</strong>{' '}
                            <Hyperlink
                                href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
                                shouldOpenInNewWindow
                            >
                                Button text should clearly convey its purpose
                            </Hyperlink>
                            . This ensures that all users, including those
                            relying on screen readers, understand the
                            button&apos;s function.
                        </OmniListItem>
                        <OmniListItem>
                            <strong>
                                Provide aria-labels for Buttons Without
                                Text&#58;
                            </strong>{' '}
                            If the button does not contain text, using{' '}
                            <CodeTag>aria-label</CodeTag> to provide a concise
                            and descriptive label can enhance accessibility and
                            ensure all users receive clear information about the
                            button&apos;s function. Design includes what
                            can&apos;t be seen which means we are also
                            responsible for providing these types of details. Be
                            pro-active about providing these to your developers!
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
                            understand which button they have selected and
                            maintain a consistent user experience.
                        </OmniListItem>
                        <OmniListItem>
                            <strong>
                                Avoid Disabled Buttons When Possible&#58;
                            </strong>{' '}
                            {disabledText}
                        </OmniListItem>
                    </OmniList>
                </StorySection>
            </StorySection>
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
                            <CodeTag>&lt;button&gt;</CodeTag> element for
                            buttons, including disabled buttons. It&apos;s
                            semantically correct and provides built-in keyboard
                            and screen reader support.
                            <OmniList>
                                <OmniListItem>
                                    If you need buttons that link to other
                                    pages, use <CodeTag>&lt;a&gt;</CodeTag>{' '}
                                    elements with the appropriate role and
                                    attributes to make them behave like buttons.
                                </OmniListItem>
                            </OmniList>
                        </OmniListItem>
                        <OmniListItem>
                            <strong>Use aria-label Sparingly&#58;</strong> For
                            buttons with text inside, it&apos;s generally not
                            necessary to use the <CodeTag>aria-label</CodeTag>{' '}
                            attribute, as screen readers will announce the
                            button text. Best practice is to make sure the
                            button&apos;s visible text clearly conveys its
                            purpose.
                        </OmniListItem>
                        <OmniListItem>
                            <strong>
                                Consider aria-label for Icon-Only Buttons&#58;
                            </strong>{' '}
                            If the button contains only an icon without
                            accompanying text, using{' '}
                            <CodeTag>aria-label</CodeTag> to provide a concise
                            and descriptive label can enhance accessibility and
                            ensure all users receive clear information about the
                            button&apos;s function.
                        </OmniListItem>
                        <OmniListItem>
                            <strong>
                                Consider Alternatives to Disabling Buttons&#58;
                            </strong>{' '}
                            {disabledText}
                        </OmniListItem>
                        <OmniListItem>
                            <strong>Tab Order&#58;</strong> Ensure that both
                            enabled and disabled buttons can be navigated using
                            the keyboard and follow a logical tab order.
                        </OmniListItem>
                        <OmniListItem>
                            <strong>Keyboard Interaction&#58;</strong> Buttons,
                            including disabled ones, should be navigable using
                            the Tab key to maintain a consistent user
                            experience. However, disabled buttons should not be
                            interactable when they are in a disabled state, and
                            pressing Enter or Space on a disabled button should
                            have no effect. Ensuring correct keyboard navigation
                            support for buttons provides a seamless and
                            accessible experience for users who rely on keyboard
                            input or assistive technologies.
                        </OmniListItem>
                    </OmniList>
                </StorySection>
            </StorySection>
            <StorySection>
                <Paragraph>
                    By considering these accessibility tips, you can create
                    buttons, including disabled buttons, that provide a more
                    inclusive and user-friendly experience for everyone.
                    Accessibility isn&apos;t just a checkbox&mdash;it&apos;s a
                    commitment to ensuring that all users can interact with your
                    interface effectively.
                </Paragraph>
                <Paragraph>
                    For more detailed guidance on button accessibility, please
                    refer to the{' '}
                    <Hyperlink
                        href="https://www.w3.org/TR/wai-aria-practices-1.2/#button"
                        shouldOpenInNewWindow
                    >
                        ARIA Authoring Practices Guide for Buttons
                    </Hyperlink>
                    .
                </Paragraph>
            </StorySection>
        </StorySection>
    );
};

export default SectionAccessibility;
