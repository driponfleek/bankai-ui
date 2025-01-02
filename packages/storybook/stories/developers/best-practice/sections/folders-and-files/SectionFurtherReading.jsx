import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { SectionTitle, StorySection } from '@driponfleek/bankai-lib-storybook';

const SectionFurtherReading = () => (
    <StorySection>
        <SectionTitle>Further Reading</SectionTitle>
        <StorySection>
            <OmniList>
                <OmniListItem>
                    <Hyperlink
                        href="https://en.wikipedia.org/wiki/Letter_case#Kebab_case"
                        shouldOpenInNewWindow
                    >
                        Kebab Case
                    </Hyperlink>
                </OmniListItem>
                <OmniListItem>
                    <Hyperlink
                        href="https://en.wikipedia.org/wiki/Camel_case"
                        shouldOpenInNewWindow
                    >
                        Camel Case and Pascal Case &#40;
                        <abbr title="Also Known As">A.K.A.</abbr> Upper Camel
                        Case&#41;
                    </Hyperlink>
                </OmniListItem>
            </OmniList>
        </StorySection>
    </StorySection>
);

export default SectionFurtherReading;
