import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import CompImportAndUsage from '../../../../sb-components/docblocks/CompImportAndUsage';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const ICONS = {
    Affirmative: 'BankaiCircleCheck',
    Cautionary: 'BankaiTriangleAlert',
    Danger: 'BankaiTriangleAlert',
    Info: 'BankaiCircleInfo',
    Default: 'BankaiCloud',
};

/**
 * @param {Object} props
 * @param {string} [props.variant] - Component variant name (e.g. "Affirmative") appended to the import/usage code strings
 * @param {boolean} [props.isCallout] - When true, generates code for a Callout component; otherwise generates Banner code
 */
const SectionImplementation = (props) => {
    const { variant = '', isCallout = false } = props;
    const icon = ICONS[variant] || ICONS.Default;
    const compName = isCallout ? 'Callout' : 'Banner';
    const importCodeStr = `import { ${compName}${variant} } from '@driponfleek/bankai-ui-callouts';\nimport { ${icon} } from '@driponfleek/bankai-ui-icons';`;
    const usageCodeStr = `<${compName}${variant}\n    title="${compName} Title"\n    msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit."\n    renderIcon={${icon}}\n/>`;

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
