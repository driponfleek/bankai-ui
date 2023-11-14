import { StatusModal } from '@driponfleek/bankai-ui-modals';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    ComponentPreview,
    CodeTag,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Paragraph>
                    Toggle the <CodeTag>isOpen</CodeTag> prop in the controls
                    panel to show/hide the status modal.
                </Paragraph>
                <StatusModal
                    {...props}
                    appElement={document.getElementById('storybook-root')}
                />
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
