import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import CompImportAndUsage from '../../../../sb-components/docblocks/CompImportAndUsage';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const importCodeStr = `import { Accordion } from '@driponfleek/bankai-ui-accordions';`;
const usageCodeStr = `// MyAccordionItemContent is your custom component, not provided by Bankai

<Accordion>
    <MyAccordionItemContent
        accItemProps={{
            id: '001',
        }}
        accTriggerProps={{
            children: 'Accordion Item Trigger Text',
        }}
    />
</Accordion>`;

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
