import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import SectionIntro from './sections/folders-and-files/SectionIntro';
import SectionFolderNaming from './sections/folders-and-files/SectionFolderNaming';
import SectionFolderStructure from './sections/folders-and-files/SectionFolderStructure';
import SectionFileNaming from './sections/folders-and-files/SectionFileNaming';
import SectionFurtherReading from './sections/folders-and-files/SectionFurtherReading';
import StoryLayout from '../../../sb-components/layout/StoryLayout';

// Utils
import { getLocale } from '../../../utils/localeUtils';
import { getDevelopersTitle } from '../../../utils/storiesConfigUtils';

const StoryFolderAndFileBestPractices = () => {
    const baseCls = genSBBaseCls('folder-and-file-best-practices');

    return (
        <StoryLayout
            contextCls={baseCls}
            title={getLocale(
                'stories.developers.bestPractices.foldersAndFiles.title',
            )}
            subTitle={getDevelopersTitle(getLocale('titles.bestPracices'))}
        >
            <SectionIntro />
            <SectionFolderNaming />
            <SectionFolderStructure />
            <SectionFileNaming />
            <SectionFurtherReading />
        </StoryLayout>
    );
};

export default StoryFolderAndFileBestPractices;
