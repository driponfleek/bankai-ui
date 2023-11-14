import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import CompImportAndUsage from '../../../../sb-components/docblocks/CompImportAndUsage';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const importCodeStr = `import { BankaiCheck } from '@driponfleek/bankai-ui-icons';`;
const usageCodeStr = `<BankaiCheck />`;

const SectionImplementation = () => {
    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.implementation')}</SectionTitle>
            <StorySection>
                <CompImportAndUsage
                    importCodeStr={importCodeStr}
                    usageCodeStr={usageCodeStr}
                />
            </StorySection>
        </StorySection>
    );
};

export default SectionImplementation;
