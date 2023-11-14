import PropTypes from 'prop-types';
import { List } from '@driponfleek/bankai-ui-lists';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import ColorDesignTokenListItem from '../../components/design-token-gen/ColorDesignTokenListItem';
import { genTokens } from '../../utils/designTokenGenStoryUtils';

const SectionTokens = (props) => {
    const { baseCls, fieldValues } = props;
    const tokens = genTokens(fieldValues);

    return (
        <StorySection contextCls={`${baseCls}__token-section-container`}>
            <SectionTitle>Design Tokens</SectionTitle>
            <StorySection contextCls={`${baseCls}__token-list-container`}>
                <List renderListItem={ColorDesignTokenListItem} data={tokens} />
            </StorySection>
        </StorySection>
    );
};

SectionTokens.defaultProps = {
    fieldValues: {},
};

SectionTokens.propTypes = {
    baseCls: PropTypes.string,
    fieldValues: PropTypes.shape({
        CORE_COLOR_NEUTRAL_SEED: PropTypes.string,
        SEMANTIC_COLOR_ACCENT: PropTypes.string,
        SEMANTIC_COLOR_AFFIRMATIVE: PropTypes.string,
        SEMANTIC_COLOR_CAUTIONARY: PropTypes.string,
        SEMANTIC_COLOR_ERROR: PropTypes.string,
        SEMANTIC_COLOR_INFO: PropTypes.string,
        SEMANTIC_COLOR_PRIMARY: PropTypes.string,
        SEMANTIC_COLOR_SECONDARY: PropTypes.string,
        isDarkMode: PropTypes.bool,
    }),
};

export default SectionTokens;
