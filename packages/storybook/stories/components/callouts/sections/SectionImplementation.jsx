import PropTypes from 'prop-types';
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

SectionImplementation.propTypes = {
    variant: PropTypes.string,
    isCallout: PropTypes.bool,
};

export default SectionImplementation;
