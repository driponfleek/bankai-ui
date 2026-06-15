import { List } from '@driponfleek/bankai-ui-lists';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import ColorDesignTokenListItem from '../../../../../sb-components/lists/ColorDesignTokenListItem';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base BEM class used to scope the token section containers
 * @param {string} [props.sectionTitle] - Title rendered above the token list
 * @param {number} [props.headingLvl] - Heading level for the section title
 * @param {Array<Object>} [props.tokensData] - Array of token data objects to render in the list
 */
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
