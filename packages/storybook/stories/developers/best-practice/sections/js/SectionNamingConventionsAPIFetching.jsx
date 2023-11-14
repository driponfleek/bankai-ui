import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    CodeTag,
    SectionTitle,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';
import CorrectIncorrectCodeExample from '../../components/CorrectIncorrectCodeExample';
import {
    codeStrAPIFetchCorrectEx,
    codeStrAPIFetchIncorrectEx,
} from '../../code-strings/codeStrJSBestPractice';

const SectionNamingConventionsAPIFetching = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={4}>
                <abbr title="Application Programming Interface">API</abbr>{' '}
                Fetching
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    Prefix functions that retrieve data, configurations, etc.,
                    from a backend service with <CodeTag>fetch</CodeTag>.
                </Paragraph>
                <CorrectIncorrectCodeExample
                    correctExample={codeStrAPIFetchCorrectEx}
                    incorrectExample={codeStrAPIFetchIncorrectEx}
                />
            </StorySection>
        </StorySection>
    );
};

export default SectionNamingConventionsAPIFetching;
