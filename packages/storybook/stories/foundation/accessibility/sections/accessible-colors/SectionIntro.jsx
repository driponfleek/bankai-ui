import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import { StorySection } from '@driponfleek/bankai-lib-storybook';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionIntro = () => {
    return (
        <StorySection>
            <Paragraph>
                When color is essential to the comprehension of our{' '}
                <abbr title="User Interfaces">UIs</abbr> we should strive for
                accessible color palettes. {getLocale('designSystemName')}{' '}
                provides tools and utilities that help us comply with{' '}
                <Hyperlink
                    href="https://webaim.org/articles/contrast/"
                    shouldOpenInNewWindow
                >
                    Web Content Accessibility Guidelines AA standard contrast
                    ratios
                </Hyperlink>
                .
            </Paragraph>
        </StorySection>
    );
};

export default SectionIntro;
