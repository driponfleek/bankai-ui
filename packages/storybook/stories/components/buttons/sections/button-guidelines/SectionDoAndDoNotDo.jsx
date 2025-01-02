import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    SectionTitle,
    CodeTag,
} from '@driponfleek/bankai-lib-storybook';
import DoAndDoNotDo from '../../../../../sb-components/docblocks/DoAndDoNotDo';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionDoAndDoNotDo = () => {
    const doList = [
        <>
            <strong>Do Use Descriptive Text&#58;</strong> Clearly communicate
            the action a button performs through concise and meaningful text.
            Descriptive labels improve accessibility and provide clarity to all
            users.
        </>,
        <>
            <strong>Do Provide Visual Feedback&#58;</strong> Include visual cues
            such as hover effects, focus outlines, and disabled states to
            enhance the user experience and communicate the interactive nature
            of buttons.
        </>,
        <>
            <strong>Do Use ARIA Attributes Responsibly&#58;</strong> When using
            buttons without visible text (For example, icon buttons), do use the{' '}
            <CodeTag>aria-label</CodeTag> attribute to provide a meaningful
            description for accessibility.
        </>,
    ];
    const doNotDoList = [
        <>
            <strong>Do Not Use Ambiguous Labels&#58;</strong> Refrain from using
            vague or unclear labels on buttons. Users should easily understand
            the purpose of a button without ambiguity.
        </>,
        <>
            <strong>Do Not Sacrifice Clarity for Style&#58;</strong> Stylish
            designs are crucial, but don&apos;t compromise clarity. Ensure that
            buttons remain easily recognizable and understandable, even in the
            absence of accompanying text.
        </>,
        <>
            <strong>Do Not Create Unnecessary Repetition&#58;</strong> While
            ARIA attributes are valuable for accessibility, avoid redundant
            information. If a button already has descriptive text, additional
            use of <CodeTag>aria-label</CodeTag> may be unnecessary and
            potentially confusing.
        </>,
    ];

    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                {getLocale('titles.dosAndDoNotDos')}
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    Buttons are not just functional elements; they are
                    opportunities to enhance user engagement and satisfaction.
                    By following these &quot;Do&apos;s&quot; and avoiding the
                    &quot;Do Not Do&apos;s&quot; you can create a more
                    user-centered design.
                </Paragraph>
                <DoAndDoNotDo
                    doList={doList}
                    doNotDoList={doNotDoList}
                    isSideBySide
                />
            </StorySection>
        </StorySection>
    );
};

export default SectionDoAndDoNotDo;
