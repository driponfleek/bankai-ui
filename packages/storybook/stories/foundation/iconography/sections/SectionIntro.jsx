import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection } from '@driponfleek/bankai-lib-storybook';

// Utils
// import { getLocale } from '../../../../../utils/localeUtils';

const SectionIntro = () => {
    return (
        <StorySection>
            <Paragraph>
                Icons play a pivotal role in enhancing user interfaces by
                providing visual cues and aiding in the interpretation of
                actions. This section outlines best practices for incorporating
                icons effectively within components, ensuring clarity,
                consistency, and accessibility throughout the user experience.
            </Paragraph>
            {/* <Paragraph>
                Guidelines for using icons, including the icon library and their
                appropriate usage. Coming soon.
            </Paragraph> */}
        </StorySection>
    );
};

export default SectionIntro;
