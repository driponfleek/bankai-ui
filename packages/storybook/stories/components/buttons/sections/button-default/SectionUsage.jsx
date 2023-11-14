import {
    OmniList,
    OmniListItem,
    Paragraph,
} from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    SectionTitle,
    CodeTag,
} from '@driponfleek/bankai-lib-storybook';
import DoAndDoNotDo from '../../../../../sb-components/docblocks/DoAndDoNotDo';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

// TODO: Add documentation about Icon placement best practice
const SectionUsage = () => {
    const doList = [
        <>
            <strong>Do Use Clear Text&#58;</strong> Button text should convey a
            concise and action-oriented message. Users should instantly
            understand what will happen when they click the button.
        </>,
        <>
            <strong>Do Be Explicit&#58;</strong> Eliminate jargon or vague
            terms. Use straightforward language to minimize user confusion.
        </>,
        <>
            <strong>Do Keep It Short&#58;</strong> Strive to keep button text
            concise. Avoid overly long labels that might clutter the interface.
        </>,
        <>
            <strong>Do Ensure Adequate Size&#58;</strong> Buttons should be of a
            sufficient size to be easily clickable, especially on touch devices.
            Avoid making them too small or too large.
        </>,
        <>
            <strong>Do Use Proper Text Case&#58;</strong> Button text should be
            Title-Case to enhance the clarity and readability of button text
            while providing a professional and polished appearance to the user
            interface.
        </>,
        <>
            <strong>Do Pay Attention to Spacing&#58;</strong> Ensure buttons
            have enough space around them to prevent accidental clicks. Proper
            padding improves the user&apos;s experience.
        </>,
        <>
            <strong>Do Use Buttons for Actions&#58;</strong> Buttons are perfect
            for actions like submitting forms, saving changes, or triggering
            processes. They work well for opening pop-up windows or modal
            dialogs.
        </>,
    ];
    const doNotDoList = [
        <>
            <strong>Do Not Use Unclear Text&#58;</strong> Avoid button text that
            doesn&apos;t clearly indicate its purpose or action.
        </>,
        <>
            <strong>Do Not Overcomplicate&#58;</strong> Steer clear of overly
            complex language or long-winded labels that confuse users.
        </>,
        <>
            <strong>Do Not Use Buttons For Navigation&#58;</strong> If the
            primary purpose is to navigate to a different page or website,
            consider using links instead of buttons. Buttons are actions; links
            are for navigation.
        </>,
    ];

    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.usage')}</SectionTitle>
            <StorySection>
                <Paragraph>
                    Buttons are the workhorses of user interfaces, the go-to
                    elements for users to interact with your application. To
                    ensure a delightful user experience, here are Guidelines for
                    designing and implementing buttons in your designs&#58;
                </Paragraph>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    {`Best Practices: ${getLocale('titles.dosAndDoNotDos')}!`}
                </SectionTitle>
                <StorySection>
                    <DoAndDoNotDo doList={doList} doNotDoList={doNotDoList} />
                    <Paragraph>
                        Remember, buttons are not just functional elements; they
                        are opportunities to enhance user engagement and
                        satisfaction. By following these &quot;Do&apos;s&quot;
                        and avoiding the &quot;Do Not Do&apos;s&quot; you can
                        create a more user-centered design.
                    </Paragraph>
                </StorySection>
            </StorySection>
            <StorySection>
                <SectionTitle headingLvl={3}>
                    Best Practices: Avoid Disabled Buttons
                </SectionTitle>
                <StorySection>
                    <Paragraph>
                        While disabled buttons have their place in{' '}
                        <abbr title="User Interface">UI</abbr> design, there are
                        instances where we may want to consider alternatives.
                        Here are some tips for when to avoid disabled buttons,
                        why we should, and alternative approaches&#58;
                    </Paragraph>
                </StorySection>
                <StorySection>
                    <SectionTitle headingLvl={4}>
                        When to Avoid Disabled Buttons
                    </SectionTitle>
                    <StorySection>
                        <OmniList>
                            <OmniListItem>
                                <strong>When Clarity is Needed&#58;</strong> If
                                the reason for disabling a button is not
                                immediately clear to users, it&apos;s better to
                                avoid disabling it. Users should understand why
                                a button is inactive.
                            </OmniListItem>
                            <OmniListItem>
                                <strong>
                                    When Actions Are Conditional&#58;
                                </strong>{' '}
                                If an action&apos;s availability depends on
                                certain conditions or inputs, disabling the
                                button may not be the best approach. Instead,
                                consider providing real-time feedback or
                                guidance to users.
                            </OmniListItem>
                        </OmniList>
                    </StorySection>
                </StorySection>
                <StorySection>
                    <SectionTitle headingLvl={4}>
                        Why to Avoid Disabled Buttons
                    </SectionTitle>
                    <StorySection>
                        <OmniList>
                            <OmniListItem>
                                <strong>Confusion&#58;</strong> Disabled buttons
                                can sometimes confuse users, as they may wonder
                                why an action is unavailable. This can lead to a
                                less intuitive and frustrating user experience.
                            </OmniListItem>
                            <OmniListItem>
                                <strong>Accessibility&#58;</strong> Disabled
                                buttons are not focusable and may not always be
                                properly conveyed to users relying on assistive
                                technologies like screen readers. This can
                                result in a lack of clarity for users with
                                disabilities.
                            </OmniListItem>
                            <OmniListItem>
                                <strong>Loss of Context&#58;</strong> When a
                                button is disabled, users might lose context
                                about what they need to do to activate it.
                                It&apos;s better to provide clear instructions
                                or hints.
                            </OmniListItem>
                        </OmniList>
                    </StorySection>
                </StorySection>
                <StorySection>
                    <SectionTitle headingLvl={4}>
                        Alternative Approaches
                    </SectionTitle>
                    <StorySection>
                        <OmniList>
                            <OmniListItem>
                                <strong>Feedback and Validation&#58;</strong>{' '}
                                Offer real-time feedback as users interact with
                                the interface. Highlight any issues or missing
                                information near the relevant input fields.
                            </OmniListItem>
                            <OmniListItem>
                                <strong>Progressive Disclosure&#58;</strong> Use
                                progressive disclosure to guide users through a
                                multi-step process. Only present actions that
                                are relevant at each stage, simplifying the
                                interface.
                            </OmniListItem>
                            <OmniListItem>
                                <strong>Change Button State&#58;</strong>{' '}
                                Instead of disabling a button, change its state
                                to indicate that an action is pending. For
                                example, change the &quot;Save Data&quot; button
                                to &quot;Saving Data...&quot; while processing a
                                form.
                            </OmniListItem>
                        </OmniList>
                    </StorySection>
                </StorySection>
                <StorySection>
                    <SectionTitle headingLvl={4}>
                        When to Fake it: Faux Disabled Buttons
                    </SectionTitle>
                    <StorySection>
                        <Paragraph>
                            In certain scenarios, you may want to visually
                            simulate a disabled button without using the native
                            HTML <CodeTag>disabled</CodeTag> attribute. Instead,
                            you can use the <CodeTag>aria-disabled</CodeTag>{' '}
                            attribute and CSS to create a button that appears
                            disabled and progromattically prevent any
                            interaction with the button itself while allowing it
                            to remain focusable and accessible to all users,
                            including those who rely on screen readers.
                        </Paragraph>
                        <Paragraph>
                            A perfect example of when we would want to do this
                            is when a button is in a busy state. In the event
                            where a button that is clicked calls an API to
                            submit some data, we&apos;d want to prevent the user
                            from clicking the button again while that operation
                            is underway. Our button would update to show it is
                            busy and disabled, letting users know they will need
                            to wait for the action to finish performing before
                            they can use the button again.
                        </Paragraph>
                    </StorySection>
                </StorySection>
            </StorySection>
            {/* <StorySection>
                <SectionTitle headingLvl={3}>
                    {getLocale('titles.hierarchy')}
                </SectionTitle>
                <StorySection></StorySection>
            </StorySection> */}
        </StorySection>
    );
};

export default SectionUsage;
