import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';

// Code Strings
import { examplesCodeStr } from './codeStr/codeStrBtn';

// Styles
import './styles/button-guide.scss';

const { PRIMARY, PRIMARY_DESTRUCTIVE, SECONDARY, SECONDARY_DESTRUCTIVE } =
    VARIANTS;

const { bankaiUI: locale } = strings;

class ButtonGuide extends PureComponent {
    static defaultProps = {
        type: 'button',
        isBusy: false,
        isDisabled: false,
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        iconCls: PropTypes.string,
        text: PropTypes.string,
        type: PropTypes.string,
        variant: PropTypes.string,
        isBusy: PropTypes.bool,
        isDisabled: PropTypes.bool,
        data: PropTypes.object,
        onClick: PropTypes.func,
        renderIcon: PropTypes.func,
        renderBusyIcon: PropTypes.func,
    };

    static displayName = locale.stories.components.buttons.button.title;

    render() {
        return (
            <StoryLayout
                title={locale.stories.components.buttons.button.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.buttons.categoryTitle,
                )}
            >
                {this.renderDemo()}
                {this.renderExamples()}
            </StoryLayout>
        );
    }

    renderDemo() {
        const { props } = this;

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <Button {...props} />
                </ComponentPreview>
                <Paragraph>
                    Buttons allow users to take action in your UI. Well-formed
                    buttons help users understand what action will be performed
                    when they are interacted with.
                </Paragraph>
            </StorySection>
        );
    }

    renderExamples = () => {
        return (
            <StorySection>
                <SectionTitle>Examples</SectionTitle>
                <ComponentPreviewWithCodeBlock
                    contextCls={`${this.baseCls}__examples-preview`}
                    codeString={examplesCodeStr}
                >
                    <Button text="Default Button" />
                    <Button text="Primary Button" variant={PRIMARY} />
                    <Button text="Secondary Button" variant={SECONDARY} />
                    <Button
                        text="Primary Destructive Button"
                        variant={PRIMARY_DESTRUCTIVE}
                    />
                    <Button
                        text="Secondary Destructive Button"
                        variant={SECONDARY_DESTRUCTIVE}
                    />
                </ComponentPreviewWithCodeBlock>
            </StorySection>
        );
    };

    baseCls = 'bankai-sb-buttons-guide';
}

export default ButtonGuide;
