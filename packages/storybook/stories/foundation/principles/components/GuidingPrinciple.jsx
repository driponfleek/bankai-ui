import { Children } from 'react';
import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

/**
 * @param {Object} props
 * @param {string} props.title - Heading text for the guiding principle
 * @param {string|React.ReactElement} [props.summaryContent] - Optional introductory paragraph
 * @param {Array<string|React.ReactElement>} [props.listItems] - Optional list of bullet points
 */
const GuidingPrinciple = (props) => {
    const { title, summaryContent, listItems = [] } = props;
    const hasListItems = listItems.length > 0;

    return (
        <StorySection>
            <SectionTitle>{title}</SectionTitle>
            <StorySection>
                {summaryContent && <Paragraph>{summaryContent}</Paragraph>}
                {hasListItems && (
                    <OmniList>
                        {Children.toArray(
                            listItems.map((item) => (
                                <OmniListItem>{item}</OmniListItem>
                            )),
                        )}
                    </OmniList>
                )}
            </StorySection>
        </StorySection>
    );
};

export default GuidingPrinciple;
