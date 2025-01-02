import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import SectionIntro from './sections/js/SectionIntro';
import SectionNamingConventions from './sections/js/SectionNamingConventions';
import SectionVariableDeclaration from './sections/js/SectionVariableDeclaration';
import SectionNoNull from './sections/js/SectionNoNull';
import SectionFurtherReading from './sections/js/SectionFurtherReading';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';
import { getDevelopersTitle } from '../../../utils/storiesConfigUtils';

const StoryJSBestPractices = () => {
    const baseCls = genSBBaseCls('js-best-practices');

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale('stories.developers.bestPractices.js.title')}
            subTitle={getDevelopersTitle(getLocale('titles.bestPracices'))}
        >
            <SectionIntro />
            <SectionVariableDeclaration />
            <SectionNoNull />
            <SectionNamingConventions />
            <SectionFurtherReading />
        </StoryLayout>
    );
};

export default StoryJSBestPractices;
