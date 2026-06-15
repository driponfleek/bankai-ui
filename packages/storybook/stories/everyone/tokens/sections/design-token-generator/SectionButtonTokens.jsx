import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import SectionTokens from './SectionTokens';
import { getBtnTokensByState } from '../../utils/designTokenGenStoryUtils';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base BEM class used to scope the button token section containers
 * @param {string} [props.sectionTitle] - Title rendered above the token sub-sections
 * @param {Array<Object>} [props.tokensData] - Token data split by interaction state and rendered in sub-sections
 */
const SectionButtonTokens = (props) => {
    const { baseCls, sectionTitle, tokensData = [], children } = props;
    const {
        activeTokens = [],
        focusTokens = [],
        hoverTokens = [],
        restingTokens = [],
    } = getBtnTokensByState(tokensData);

    return (
        <StorySection contextCls={`${baseCls}__tokens-section-container`}>
            <SectionTitle>{sectionTitle}</SectionTitle>
            {children && (
                <div className={`${baseCls}__children-container`}>
                    {children}
                </div>
            )}
            <SectionTokens
                baseCls={baseCls}
                sectionTitle="Resting State"
                headingLvl={3}
                tokensData={restingTokens}
            />
            <SectionTokens
                baseCls={baseCls}
                sectionTitle="Hover State"
                headingLvl={3}
                tokensData={hoverTokens}
            />
            <SectionTokens
                baseCls={baseCls}
                sectionTitle="Active State"
                headingLvl={3}
                tokensData={activeTokens}
            />
            <SectionTokens
                baseCls={baseCls}
                sectionTitle="Focus State"
                headingLvl={3}
                tokensData={focusTokens}
            />
        </StorySection>
    );
};

export default SectionButtonTokens;
