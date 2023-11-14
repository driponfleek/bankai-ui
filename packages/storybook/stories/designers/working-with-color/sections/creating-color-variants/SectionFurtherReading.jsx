// import { LinkButton } from '@driponfleek/bankai-ui-buttons';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import { Hyperlink } from '@driponfleek/bankai-ui-navigation';
// import { linkTo } from '@storybook/addon-links';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

// TODO: Add link to variant generator?
const SectionFurtherReading = () => {
    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.furtherReading')}</SectionTitle>
            <StorySection>
                <OmniList>
                    {/* <OmniListItem>
                        <LinkButton
                            text={getLocale(
                                'stories.foundation.iconography.guidelines.title',
                            )}
                            onClick={linkTo(
                                `${getLocale('titles.foundation')}/${getLocale(
                                    'titles.iconography',
                                )}`,
                                getLocale(
                                    'stories.foundation.iconography.guidelines.title',
                                ),
                            )}
                        />
                    </OmniListItem> */}
                    <OmniListItem>
                        <Hyperlink
                            href="https://atmos.style/blog/lch-color-space"
                            shouldOpenInNewWindow
                        >
                            LCH is the Best Color Space For UI
                        </Hyperlink>
                    </OmniListItem>
                    <OmniListItem>
                        <Hyperlink
                            href="https://zapier.com/blog/lch-easier-accessibility-prettier-colors/"
                            shouldOpenInNewWindow
                        >
                            LCH&#58; Easier Accessibility and Prettier Colors
                        </Hyperlink>
                    </OmniListItem>
                    <OmniListItem>
                        <Hyperlink
                            href="https://www.smashingmagazine.com/2021/11/guide-modern-css-colors/"
                            shouldOpenInNewWindow
                        >
                            A Guide To Modern CSS Colors With RGB, HSL, HWB, LAB
                            And LCH
                        </Hyperlink>
                    </OmniListItem>
                    <OmniListItem>
                        <Hyperlink
                            href="https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/"
                            shouldOpenInNewWindow
                        >
                            LCH Colors in CSS: What, Why, and How?
                        </Hyperlink>
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionFurtherReading;
