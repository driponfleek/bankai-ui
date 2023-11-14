import { Children } from 'react';
import PropTypes from 'prop-types';
import {
    Paragraph,
    OmniList,
    OmniListItem,
} from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';

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

GuidingPrinciple.propTypes = {
    title: PropTypes.string.isRequired,
    summaryContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    listItems: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    ),
};

export default GuidingPrinciple;
