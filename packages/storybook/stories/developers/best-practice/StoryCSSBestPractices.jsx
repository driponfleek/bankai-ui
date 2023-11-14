import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import SectionIntro from './sections/css/SectionIntro';
import SectionClassNamingConventions from './sections/css/SectionClassNamingConventions';
import SectionContextClasses from './sections/css/SectionContextClasses';
import SectionDosAndDontDos from './sections/css/SectionDosAndDontDos';
import SectionFurtherReading from './sections/css/SectionFurtherReading';
import SectionModifierClasses from './sections/css/SectionModifierClasses';
import SectionREMVsPX from './sections/css/SectionREMVsPX';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';
import { getDevelopersTitle } from '../../../utils/storiesConfigUtils';

// Styles
// import './styles/story-css-best-practices.scss';

const StoryCSSBestPractices = () => {
    const baseCls = genSBBaseCls('css-best-practices');

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale('stories.developers.bestPractices.css.title')}
            subTitle={getDevelopersTitle(getLocale('titles.bestPracices'))}
        >
            <SectionIntro />
            <SectionClassNamingConventions />
            <SectionContextClasses />
            <SectionModifierClasses />
            <SectionREMVsPX />
            <SectionDosAndDontDos />
            <SectionFurtherReading />
        </StoryLayout>
    );
};

export default StoryCSSBestPractices;
