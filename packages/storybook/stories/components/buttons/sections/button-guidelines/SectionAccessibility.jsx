import PropTypes from 'prop-types';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import {
    StorySection,
    SectionTitle,
    CodeTag,
} from '@driponfleek/bankai-lib-storybook';
import SectionAccessibilityForDesigners from './SectionAccessibilityForDesigners';
import SectionAccessibilityForDevs from './SectionAccessibilityForDevs';
import SectionAccessibilityDynamicText from './SectionAccessibilityDynamicText';

const SectionAccessibility = (props) => {
    const { btnText } = props;
    const disabledText = (
        <>
            Buttons disabled using the <CodeTag>disabled</CodeTag> attribute
            aren&apos;t focusable and can&apos;t be reached by keyboard
            navigation. When needing to visually display a button in a disabled
            state, think through the requirements of making it accessible
            without using the <CodeTag>disabled</CodeTag> attribute.
        </>
    );

    return (
        <StorySection>
            <SectionTitle>
                Accessibility&#58; Ensuring Inclusive Interaction
            </SectionTitle>
            <StorySection>
                <Paragraph>
                    Accessibility isn&apos;t just a checkbox&mdash;it&apos;s a
                    commitment to ensuring that all users can interact with your
                    interface effectively. Buttons are essential interactive
                    elements, and it&apos;s crucial to ensure that they are
                    accessible to all users, regardless of their abilities. By
                    considering these accessibility tips, you can create
                    buttons, including disabled buttons, that provide a more
                    inclusive and user-friendly experience for everyone.
                </Paragraph>
            </StorySection>
            <SectionAccessibilityForDesigners disabledBullet={disabledText} />
            <SectionAccessibilityForDevs disabledBullet={disabledText} />
            <SectionAccessibilityDynamicText btnText={btnText} />
            <StorySection>
                <Paragraph>
                    For more detailed guidance on button accessibility, please
                    refer to the{' '}
                    <Hyperlink
                        href="https://www.w3.org/TR/wai-aria-practices-1.2/#button"
                        shouldOpenInNewWindow
                    >
                        ARIA Authoring Practices Guide for Buttons
                    </Hyperlink>
                    .
                </Paragraph>
            </StorySection>
        </StorySection>
    );
};

SectionAccessibility.propTypes = {
    btnText: PropTypes.string,
};

export default SectionAccessibility;
