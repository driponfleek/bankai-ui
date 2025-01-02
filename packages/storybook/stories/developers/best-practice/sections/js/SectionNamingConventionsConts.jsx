import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';
import CorrectIncorrectCodeExample from '../../components/CorrectIncorrectCodeExample';
import {
    codeStrConstCorrectEx,
    codeStrConstIncorrectEx,
} from '../../code-strings/codeStrJSBestPractice';

const SectionNamingConventionsConts = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>Constants</SectionTitle>
            <StorySection>
                <Paragraph>
                    Constants represent values that should not be modified
                    during the execution of the program.
                </Paragraph>
                <OmniList>
                    <OmniListItem>
                        Use <strong>screaming snake case</strong>{' '}
                        &#40;all-uppercase letters with underscores between
                        words&#41; for constants.
                    </OmniListItem>
                    <OmniListItem>
                        Choose meaningful and descriptive names that convey the
                        purpose of the constant.
                    </OmniListItem>
                </OmniList>
                <CorrectIncorrectCodeExample
                    correctExample={codeStrConstCorrectEx}
                    incorrectExample={codeStrConstIncorrectEx}
                />
            </StorySection>
        </StorySection>
    );
};

export default SectionNamingConventionsConts;
