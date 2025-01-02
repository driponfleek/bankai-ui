import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';
import SectionNamingConventionsBools from './SectionNamingConventionsBools';
import CorrectIncorrectCodeExample from '../../components/CorrectIncorrectCodeExample';
import {
    codeStrVariablesCorrectEx,
    codeStrVariablesIncorrectEx,
} from '../../code-strings/codeStrJSBestPractice';

const SectionNamingConventionsVariables = () => {
    return (
        <>
            <StorySection>
                <SectionTitle headingLvl={3}>Variables</SectionTitle>
                <StorySection>
                    <OmniList>
                        <OmniListItem>
                            Use <strong>camel case</strong> for variable names.
                        </OmniListItem>
                        <OmniListItem>
                            Choose meaningful and descriptive names that convey
                            the purpose of the variable.
                        </OmniListItem>
                    </OmniList>
                    <CorrectIncorrectCodeExample
                        correctExample={codeStrVariablesCorrectEx}
                        incorrectExample={codeStrVariablesIncorrectEx}
                    />
                </StorySection>
            </StorySection>
            <SectionNamingConventionsBools />
        </>
    );
};

export default SectionNamingConventionsVariables;
