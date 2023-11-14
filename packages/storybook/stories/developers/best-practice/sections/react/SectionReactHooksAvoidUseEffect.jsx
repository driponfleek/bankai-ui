import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    CodeTag,
    SectionTitle,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';

const SectionReactHooksAvoidUseEffect = () => {
    return (
        <StorySection>
            <SectionTitle headingLvl={3}>
                Avoid Unnecessary &quot;useEffect&quot;
            </SectionTitle>
            <Paragraph>
                Be mindful of using the <CodeTag>useEffect</CodeTag> hook
                unnecessarily. In functional components, only use{' '}
                <CodeTag>useEffect</CodeTag> when dealing with side effects like
                data fetching, subscriptions, or manually changing the DOM.
            </Paragraph>
        </StorySection>
    );
};

export default SectionReactHooksAvoidUseEffect;
