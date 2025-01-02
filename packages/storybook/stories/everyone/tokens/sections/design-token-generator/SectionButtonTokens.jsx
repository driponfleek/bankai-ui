import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import SectionTokens from './SectionTokens';
import { getBtnTokensByState } from '../../utils/designTokenGenStoryUtils';

// TODO: Add Prop Types documentation with JSDocs
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
