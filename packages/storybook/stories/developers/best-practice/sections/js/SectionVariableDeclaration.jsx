import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import {
    CodeTag,
    SectionTitle,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';

const SectionVariableDeclaration = () => {
    return (
        <StorySection>
            <SectionTitle>
                Variable Declaration - Prefer &quot;const&quot; and{' '}
                &quot;let&quot; Over &quot;var&quot;
            </SectionTitle>
            <OmniList>
                <OmniListItem>
                    Use <CodeTag>const</CodeTag> for variables that don&apos;t
                    change their value.
                </OmniListItem>
                <OmniListItem>
                    Use <CodeTag>let</CodeTag> for variables that need to be
                    reassigned values.
                </OmniListItem>
                <OmniListItem>
                    Avoid using <CodeTag>var</CodeTag> due to its
                    function-scoping behavior and{' '}
                    <Hyperlink
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#hoisting"
                        shouldOpenInNewWindow
                    >
                        potential issues with hoisting
                    </Hyperlink>
                    .
                </OmniListItem>
            </OmniList>
        </StorySection>
    );
};

export default SectionVariableDeclaration;
