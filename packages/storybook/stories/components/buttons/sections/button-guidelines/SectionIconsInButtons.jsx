import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import SectionIconPlacement from './SectionIconPlacement';
import SectionIconConsiderations from './SectionIconConsiderations';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base BEM class forwarded to icon sub-sections
 */
const SectionIconsInButtons = (props) => {
    const { baseCls } = props;

    return (
        <StorySection>
            <SectionTitle>Icons in Buttons</SectionTitle>
            <StorySection>
                <Paragraph>
                    Icons play a crucial role in enhancing the visual appeal and
                    functionality of buttons.
                </Paragraph>
            </StorySection>
            <SectionIconPlacement baseCls={baseCls} />
            <SectionIconConsiderations />
        </StorySection>
    );
};

export default SectionIconsInButtons;
