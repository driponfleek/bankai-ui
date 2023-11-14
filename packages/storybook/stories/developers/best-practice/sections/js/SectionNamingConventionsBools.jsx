import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    CodeTag,
    SectionTitle,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';
import CorrectIncorrectCodeExample from '../../components/CorrectIncorrectCodeExample';
import {
    codeStrBoolCorrectEx,
    codeStrBoolIncorrectEx,
} from '../../code-strings/codeStrJSBestPractice';

// TODO: Add link to lint documentation providing the full list of bool prefixes.
const SectionNamingConventionsBools = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={4}>Booleans</SectionTitle>
            <StorySection>
                <Paragraph>
                    Prefix booleans with words like <CodeTag>is</CodeTag>,{' '}
                    <CodeTag>has</CodeTag>, <CodeTag>can</CodeTag>, etc., to
                    convey their purpose.
                </Paragraph>
                <CorrectIncorrectCodeExample
                    correctExample={codeStrBoolCorrectEx}
                    incorrectExample={codeStrBoolIncorrectEx}
                />
            </StorySection>
        </StorySection>
    );
};

export default SectionNamingConventionsBools;
