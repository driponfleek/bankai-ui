import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';
import CorrectIncorrectCodeExample from '../../components/CorrectIncorrectCodeExample';
import {
    codeStrClassCorrectEx,
    codeStrClassIncorrectEx,
} from '../../code-strings/codeStrJSBestPractice';

const SectionNamingConventionsClasses = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>Classes</SectionTitle>
            <StorySection>
                <Paragraph>
                    Classes encapsulate related functionality.
                </Paragraph>
                <OmniList>
                    <OmniListItem>
                        Use <strong>pascal case</strong> for class names.
                    </OmniListItem>
                    <OmniListItem>
                        Classes should have clear, concise names.
                    </OmniListItem>
                </OmniList>
                <CorrectIncorrectCodeExample
                    correctExample={codeStrClassCorrectEx}
                    incorrectExample={codeStrClassIncorrectEx}
                />
            </StorySection>
        </StorySection>
    );
};

export default SectionNamingConventionsClasses;
