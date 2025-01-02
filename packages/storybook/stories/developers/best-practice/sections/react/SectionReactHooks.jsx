import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';
import SectionReactHooksAvoidUseEffect from './SectionReactHooksAvoidUseEffect';
import SectionComponentsUseStateVsUseReducer from './SectionReactHooksUseStateVsUseReducer';

const SectionReactHooks = () => {
    return (
        <StorySection>
            <SectionTitle>React Hooks</SectionTitle>
            <StorySection>
                <Paragraph>
                    React hooks provide a powerful way to manage state and side
                    effects in functional components. Adhering to best practices
                    when using hooks ensures clean, maintainable, and efficient
                    code. Here are some recommendations&#58;
                </Paragraph>
            </StorySection>
            <SectionReactHooksAvoidUseEffect />
            <SectionComponentsUseStateVsUseReducer />
        </StorySection>
    );
};

export default SectionReactHooks;
