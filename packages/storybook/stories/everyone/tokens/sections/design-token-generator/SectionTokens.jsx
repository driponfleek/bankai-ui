import { List } from '@driponfleek/bankai-ui-lists';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import ColorDesignTokenListItem from '../../../../../sb-components/lists/ColorDesignTokenListItem';

// TODO: Add Prop Types documentation with JSDocs
const SectionTokens = (props) => {
    const {
        baseCls,
        sectionTitle,
        headingLvl = 2,
        tokensData = [],
        children,
    } = props;
    const renderListItem = (item) => <ColorDesignTokenListItem {...item} />;

    return (
        <StorySection contextCls={`${baseCls}__tokens-section-container`}>
            <SectionTitle headingLvl={headingLvl}>{sectionTitle}</SectionTitle>
            {children && (
                <div className={`${baseCls}__children-container`}>
                    {children}
                </div>
            )}
            <StorySection contextCls={`${baseCls}__token-list-container`}>
                <List renderListItem={renderListItem} data={tokensData} />
            </StorySection>
        </StorySection>
    );
};

export default SectionTokens;
