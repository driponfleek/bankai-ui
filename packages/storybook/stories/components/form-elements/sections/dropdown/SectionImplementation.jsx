import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import CompImportAndUsage from '../../../../../sb-components/docblocks/CompImportAndUsage';
import menuMocks from '../../mocks/menuMocks';

// Utils
import { getLocale } from '../../../../../utils/localeUtils';

const SectionImplementation = () => {
    const menuOpsStr = JSON.stringify(
        [menuMocks[0], menuMocks[1]],
        undefined,
        4,
    );
    const importCodeStr = `import { Dropdown } from '@driponfleek/bankai-ui-form-elements-rw';`;
    const usageCodeStr = `const menuOps = ${menuOpsStr}\n\n<Dropdown\n    data={menuOps}\n    dataKey="id"\n    textField="text"\n/>`;

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
