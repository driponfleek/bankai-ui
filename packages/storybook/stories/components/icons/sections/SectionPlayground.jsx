import { BankaiCheck } from '@driponfleek/bankai-ui-icons';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <BankaiCheck {...props} />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
