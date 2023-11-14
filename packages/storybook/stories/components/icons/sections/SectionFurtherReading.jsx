import { LinkButton } from '@driponfleek/bankai-ui-buttons';
import { OmniList, OmniListItem } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import { linkTo } from '@storybook/addon-links';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const SectionFurtherReading = () => {
    return (
        <StorySection>
            <SectionTitle>Further Reading</SectionTitle>
            <StorySection>
                <OmniList>
                    <OmniListItem>
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
                    </OmniListItem>
                    <OmniListItem>
                        <LinkButton
                            text="Available Icons"
                            onClick={linkTo(
                                `${getLocale('titles.foundation')}/${getLocale(
                                    'titles.iconography',
                                )}`,
                                getLocale(
                                    'stories.foundation.iconography.icons.title',
                                ),
                            )}
                        />
                    </OmniListItem>
                </OmniList>
            </StorySection>
        </StorySection>
    );
};

export default SectionFurtherReading;
