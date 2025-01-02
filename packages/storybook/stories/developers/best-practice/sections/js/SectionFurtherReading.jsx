import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';

const SectionFurtherReading = () => {
    return (
        <StorySection>
            <SectionTitle>Further Reading</SectionTitle>
            <OmniList>
                <OmniListItem>
                    <Hyperlink
                        href="https://eslint.org/docs/latest/rules/no-var"
                        shouldOpenInNewWindow
                    >
                        ESLint no-var
                    </Hyperlink>
                </OmniListItem>
                <OmniListItem>
                    <Hyperlink
                        href="https://github.com/getify/You-Dont-Know-JS"
                        shouldOpenInNewWindow
                    >
                        You Don&apos;t Know JavaScript
                    </Hyperlink>
                </OmniListItem>
            </OmniList>
        </StorySection>
    );
};

export default SectionFurtherReading;
