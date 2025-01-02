import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    CodeTag,
    SectionTitle,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';
import CorrectIncorrectCodeExample from '../../components/CorrectIncorrectCodeExample';
import {
    codeStrGetterFuncsCorrectEx,
    codeStrGetterFuncsIncorrectEx,
} from '../../code-strings/codeStrJSBestPractice';

const SectionNamingConventionsGetterFunctions = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={4}>Value Retrieval</SectionTitle>
            <StorySection>
                <Paragraph>
                    Prefix functions that serve the purpose of getting a value,
                    local data, etc., with <CodeTag>get</CodeTag>.
                </Paragraph>
                <CorrectIncorrectCodeExample
                    correctExample={codeStrGetterFuncsCorrectEx}
                    incorrectExample={codeStrGetterFuncsIncorrectEx}
                />
            </StorySection>
        </StorySection>
    );
};

export default SectionNamingConventionsGetterFunctions;
