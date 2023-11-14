import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';
import CorrectIncorrectCodeExample from '../../components/CorrectIncorrectCodeExample';
import {
    codeStrAcrAbbrCorrectEx,
    codeStrAcrAbbrIncorrectEx,
    codeStrNoUnderscoresCorrectEx,
    codeStrNoUnderscoresIncorrectEx,
} from '../../code-strings/codeStrJSBestPractice';

const SectionNamingConventionsAdditionalConsiderations = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                Additional Naming Convention Considerations
            </SectionTitle>
            <StorySection>
                <StorySection>
                    <SectionTitle headingLvl={4}>
                        Handling Abbreviations and Acronyms in Names
                    </SectionTitle>
                    <StorySection>
                        <OmniList>
                            <OmniListItem>
                                When dealing with Abbreviations and Acronyms,
                                maintain consistent casing for each letter in
                                them.
                            </OmniListItem>
                            <OmniListItem>
                                For camel case, pascal case, or kebab case,
                                treat each letter in the
                                acronym&#47;abbreviation as you would any other
                                letter in the naming convention.
                            </OmniListItem>
                        </OmniList>
                        <CorrectIncorrectCodeExample
                            correctExample={codeStrAcrAbbrCorrectEx}
                            incorrectExample={codeStrAcrAbbrIncorrectEx}
                        />
                    </StorySection>
                </StorySection>
            </StorySection>
            <StorySection>
                <StorySection>
                    <SectionTitle headingLvl={4}>
                        Don&apos;t Prefix Names with Underscores
                    </SectionTitle>
                    <StorySection>
                        <Paragraph>
                            Avoid using underscores (_) in variable, function,
                            or constant names. While it&apos;s a common practice
                            in some languages to indicate private or internal
                            members, JavaScript doesn&apos;t provide true
                            privacy through naming conventions. The use of
                            underscores can lead to confusion and may not
                            provide the expected privacy.
                        </Paragraph>
                        <CorrectIncorrectCodeExample
                            correctLabel="Consider other patterns for encapsulation"
                            correctExample={codeStrNoUnderscoresCorrectEx}
                            incorrectLabel="Avoid underscores in names"
                            incorrectExample={codeStrNoUnderscoresIncorrectEx}
                        />
                    </StorySection>
                </StorySection>
            </StorySection>
        </StorySection>
    );
};

export default SectionNamingConventionsAdditionalConsiderations;
