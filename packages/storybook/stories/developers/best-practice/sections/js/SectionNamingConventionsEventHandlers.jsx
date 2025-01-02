import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    CodeTag,
    SectionTitle,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';
import CorrectIncorrectCodeExample from '../../components/CorrectIncorrectCodeExample';
import {
    codeStrEvtHandlersCorrectEx,
    codeStrEvtHandlersIncorrectEx,
} from '../../code-strings/codeStrJSBestPractice';

const SectionNamingConventionsEventHandlers = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={4}>Event Handlers</SectionTitle>
            <StorySection>
                <Paragraph>
                    Prefix event handlers with <CodeTag>handle</CodeTag> to
                    convey their purpose is to handle an event.
                </Paragraph>
                <CorrectIncorrectCodeExample
                    correctExample={codeStrEvtHandlersCorrectEx}
                    incorrectExample={codeStrEvtHandlersIncorrectEx}
                />
            </StorySection>
        </StorySection>
    );
};

export default SectionNamingConventionsEventHandlers;
