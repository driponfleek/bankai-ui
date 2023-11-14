import PropTypes from 'prop-types';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import CompImportAndUsage from '../../../../sb-components/docblocks/CompImportAndUsage';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const getIcon = (variant) => {
    switch (variant) {
        case 'Affirmative':
            return 'BankaiCircleCheck';
        case 'Cautionary':
        case 'Danger':
            return 'BankaiTriangleAlert';
        case 'Info':
            return 'BankaiCircleInfo';
        default:
            return 'BankaiCloud';
    }
};

const SectionImplementation = (props) => {
    const { variant, isCallout } = props;
    const icon = getIcon(variant);
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

SectionImplementation.defaultProps = {
    variant: '',
    isCallout: false,
};

SectionImplementation.propTypes = {
    variant: PropTypes.string,
    isCallout: PropTypes.bool,
};

export default SectionImplementation;
