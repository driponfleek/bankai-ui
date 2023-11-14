import { Tooltip, TooltipIcon } from '@driponfleek/bankai-ui-tooltips';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import {
    StorySection,
    ComponentPreview,
} from '@driponfleek/bankai-lib-storybook';

const SectionPlayground = (props) => {
    const content = (
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            tincidunt justo.
        </Paragraph>
    );

    return (
        <StorySection>
            <ComponentPreview shouldCheckA11Y>
                <Paragraph>
                    Use the tooltip icon to reveal the tooltip.{' '}
                    <Tooltip {...props} content={content}>
                        <TooltipIcon />
                    </Tooltip>
                </Paragraph>
            </ComponentPreview>
        </StorySection>
    );
};

export default SectionPlayground;
