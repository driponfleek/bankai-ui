import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import {
    CodeTag,
    SectionTitle,
    StorySection,
} from '@driponfleek/bankai-lib-storybook';

const SectionFileNamingCamelCase = () => (
    <StorySection>
        <SectionTitle headingLvl={3}>Camel Case</SectionTitle>
        <StorySection>
            <Paragraph>
                <strong>Use camel case for &#58;</strong>
            </Paragraph>
            <OmniList>
                <OmniListItem>
                    Constant files
                    <OmniList>
                        <OmniListItem>
                            Constant files should always end with the{' '}
                            <CodeTag>Const</CodeTag> suffix. For example,{' '}
                            <CodeTag>platformConst.js</CodeTag>
                        </OmniListItem>
                    </OmniList>
                </OmniListItem>
                <OmniListItem>
                    Hook files
                    <OmniList>
                        <OmniListItem>
                            Hook files should always have the{' '}
                            <CodeTag>use</CodeTag> prefix. For example,{' '}
                            <CodeTag>useWindowResize.js</CodeTag>
                        </OmniListItem>
                    </OmniList>
                </OmniListItem>
                <OmniListItem>
                    Service files
                    <OmniList>
                        <OmniListItem>
                            Service files should always have the{' '}
                            <CodeTag>Service</CodeTag> suffix. For example,{' '}
                            <CodeTag>appService.js</CodeTag>
                        </OmniListItem>
                    </OmniList>
                </OmniListItem>
                <OmniListItem>
                    Utility files
                    <OmniList>
                        <OmniListItem>
                            Utility files should always have the{' '}
                            <CodeTag>Util</CodeTag> &#40;if only one util is
                            provided&#41; or <CodeTag>Utils</CodeTag> &#40;if
                            more than one util is provided&#41; suffix. For
                            example,{' '}
                            <CodeTag>signUpFormValidationUtils.js</CodeTag>
                        </OmniListItem>
                    </OmniList>
                </OmniListItem>
            </OmniList>
        </StorySection>
    </StorySection>
);

export default SectionFileNamingCamelCase;
