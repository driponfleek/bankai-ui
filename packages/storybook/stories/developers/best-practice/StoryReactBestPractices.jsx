import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import SectionIntro from './sections/react/SectionIntro';
import SectionNamingConventions from './sections/react/SectionNamingConventions';
import SectionProps from './sections/react/SectionProps';
import SectionComponents from './sections/react/SectionComponents';
import SectionReactHooks from './sections/react/SectionReactHooks';
import SectionFurtherReading from './sections/react/SectionFurtherReading';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';
import { getDevelopersTitle } from '../../../utils/storiesConfigUtils';

const StoryReactBestPractices = () => {
    const baseCls = genSBBaseCls('react-best-practices');

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale('stories.developers.bestPractices.react.title')}
            subTitle={getDevelopersTitle(getLocale('titles.bestPracices'))}
        >
            <SectionIntro />
            <SectionNamingConventions />
            <SectionComponents />
            <SectionProps />
            <SectionReactHooks />
            <SectionFurtherReading />
        </StoryLayout>
    );
};

export default StoryReactBestPractices;
