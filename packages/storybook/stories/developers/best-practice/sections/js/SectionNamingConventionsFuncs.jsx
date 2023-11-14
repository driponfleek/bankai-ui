import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';
import SectionNamingConventionsEventHandlers from './SectionNamingConventionsEventHandlers';
import SectionNamingConventionsAPIFetching from './SectionNamingConventionsAPIFetching';
import SectionNamingConventionsGetterFunctions from './SectionNamingConventionsGetterFunctions';
import CorrectIncorrectCodeExample from '../../components/CorrectIncorrectCodeExample';
import {
    codeStrFunctionsCorrectEx,
    codeStrFunctionsIncorrectEx,
} from '../../code-strings/codeStrJSBestPractice';

const SectionNamingConventionsFuncs = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>Functions</SectionTitle>
            <StorySection>
                <OmniList>
                    <OmniListItem>
                        Use <strong>camel case</strong> for function names.
                    </OmniListItem>
                    <OmniListItem>
                        Make sure that function names clearly indicate their
                        action or purpose.
                    </OmniListItem>
                </OmniList>
                <CorrectIncorrectCodeExample
                    correctExample={codeStrFunctionsCorrectEx}
                    incorrectExample={codeStrFunctionsIncorrectEx}
                />
            </StorySection>
            <SectionNamingConventionsEventHandlers />
            <SectionNamingConventionsAPIFetching />
            <SectionNamingConventionsGetterFunctions />
        </StorySection>
    );
};

export default SectionNamingConventionsFuncs;
