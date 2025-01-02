import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import CompImportAndUsage from '../../../../../sb-components/docblocks/CompImportAndUsage';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionImplementation = () => {
    const importCodeStr = `import { ToggleSwitch } from '@driponfleek/bankai-ui-form-elements';`;
    const usageCodeStr = `<ToggleSwitch />`;

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
