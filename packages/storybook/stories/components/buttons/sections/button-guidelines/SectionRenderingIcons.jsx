import { ButtonSecondary } from '@driponfleek/bankai-ui-buttons';
import { BankaiCirclePlus } from '@driponfleek/bankai-ui-icons';
import {
    ComponentPreviewWithCodeBlock,
    StorySection,
    SectionTitle,
} from '@driponfleek/bankai-lib-storybook';
import { getRenderIconCodeStrModifier } from '../../utils/storyUtils';

/**
 * @param {Object} props
 * @param {string} [props.btnText] - Button label text used in the rendering-an-icon example
 */
const SectionRenderingIcons = (props) => {
    const { btnText } = props;

    return (
        <StorySection>
            <SectionTitle headingLvl={3}>Rendering an Icon</SectionTitle>
            <StorySection>
                <ComponentPreviewWithCodeBlock
                    codeStrModifier={getRenderIconCodeStrModifier}
                    shouldShowCopy={false}
                >
                    <ButtonSecondary
                        text={btnText}
                        renderIcon={BankaiCirclePlus}
                    />
                </ComponentPreviewWithCodeBlock>
            </StorySection>
        </StorySection>
    );
};

export default SectionRenderingIcons;
