import PropTypes from 'prop-types';
import { LinkButton } from '@driponfleek/bankai-ui-buttons';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { StorySection, SectionTitle } from '@driponfleek/bankai-lib-storybook';
import { linkTo } from '@storybook/addon-links';
import CodeBlock from '../../../../sb-components/docblocks/CodeBlock';

// Utils
import { getLocale } from '../../../../utils/localeUtils';

const SectionImplementation = (props) => {
    const { variant } = props;

    // TODO: Add Dynamic Text example
    return (
        <StorySection>
            <SectionTitle>{getLocale('titles.implementation')}</SectionTitle>
            <StorySection>
                <Paragraph>
                    To use the Button component first you&apos;ll need to import
                    it&#58;
                </Paragraph>
                <CodeBlock codeString="import { Button, VARIANTS } from '@driponfleek/bankai-ui-buttons';" />
                <Paragraph>Then to use it&#58;</Paragraph>
                <CodeBlock
                    codeString={`const { ${variant} } = VARIANTS;\n\n<Button text="Button Text" variant={${variant}} />`}
                />
                <Paragraph>
                    To see the full usage please visit the{' '}
                    <LinkButton
                        text={`${getLocale(
                            'stories.components.buttons.buttonDefault.title',
                        )} documentation`}
                        onClick={linkTo('Components/Buttons', 'Default')}
                    />
                    .
                </Paragraph>
            </StorySection>
        </StorySection>
    );
};

SectionImplementation.propTypes = {
    variant: PropTypes.string,
};

export default SectionImplementation;
