import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

const SectionREMVsPX = () => {
    return (
        <StorySection>
            <SectionTitle>Choosing Between rem and px</SectionTitle>
            <StorySection>
                <Paragraph>
                    Selecting the appropriate unit for your styles involves
                    understanding the nuances of rem &#40;root em&#41; and px
                    &#40;pixels&#41;. Consider the following guidelines to make
                    informed decisions&#58;
                </Paragraph>
                <OmniList>
                    <OmniListItem>
                        <strong>Use rem for Accessibility&#58;</strong> For
                        improved accessibility, particularly for{' '}
                        <Hyperlink
                            href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
                            shouldOpenInNewWindow
                        >
                            users who may adjust their browser&apos;s font size
                        </Hyperlink>{' '}
                        settings, use rem units. Unlike pixels, rem units are
                        relative to the root font-size, providing a scalable and
                        accessible layout.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>
                            Use rem for Dynamic Spacing and Sizing&#58;
                        </strong>{' '}
                        Opt for rem units when defining spacing and sizing that
                        should dynamically scale with font size. This ensures a
                        harmonious layout as font sizes adjust, maintaining
                        balanced proportions across your design.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Use px for Fixed Elements&#58;</strong> When
                        specific elements need a fixed size, such as borders,
                        margins, or small icons, px units may be more suitable.
                        Keep in mind that fixed sizes may not scale well with
                        user preferences for larger text.
                    </OmniListItem>
                    <OmniListItem>
                        <strong>Combine for Flexibility&#58;</strong> A hybrid
                        approach is often effective. Use rem for elements where
                        scalability matters, and px for fixed-size elements to
                        maintain precision.
                    </OmniListItem>
                </OmniList>
                <Paragraph>
                    By understanding the strengths of each unit, you can strike
                    a balance between flexibility and precision in your styles,
                    ensuring a harmonious user experience across various devices
                    and preferences.
                </Paragraph>
            </StorySection>
        </StorySection>
    );
};

export default SectionREMVsPX;
