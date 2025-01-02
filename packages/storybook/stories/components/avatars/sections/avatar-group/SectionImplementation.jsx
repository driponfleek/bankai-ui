import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import CompImportAndUsage from '../../../../../sb-components/docblocks/CompImportAndUsage';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const importCodeStr = `import { AvatarGroup } from '@driponfleek/bankai-ui-avatars';`;

const usageCodeStr = `const avatars = [
    { imgURL: /media/images/avatars/avatar01.jpg },
    { imgURL: /media/images/avatars/avatar05.jpg },
    { children: 'DY' },
];

<AvatarGroup avatars={avatars} />`;

const SectionImplementation = () => {
    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.implementation')}</SectionTitle>
            <StorySection>
                <CompImportAndUsage
                    importCodeStr={importCodeStr}
                    usageCodeStr={usageCodeStr}
                    shouldShowUsageCopy={false}
                />
            </StorySection>
        </StorySection>
    );
};

export default SectionImplementation;
