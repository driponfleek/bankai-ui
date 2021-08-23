import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@epr0t0type/bankai-ui-buttons';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import SectionTitle from '../../../../sb-components/content/SectionTitle';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import strings from '../../../../i18n/strings.json';
import { getComponentsTitle } from '../../../../utils/storiesConfig';

// Code Strings
import { examplesCodeStr } from './codeStr/codeStrBtn';

// Styles
import './styles/button-guide.scss';

const { bankaiUI: locale } = strings;

class ButtonGuide extends PureComponent {
    static defaultProps = {
        type: 'button',
        isDestructive: false,
        isDisabled: false,
        isLink: false,
        isPrimary: false,
        isSecondary: false,
    };

    static propTypes = {
        busyIconCls: PropTypes.string,
        contextCls: PropTypes.string,
        iconCls: PropTypes.string,
        text: PropTypes.string,
        type: PropTypes.string,
        isBusy: PropTypes.bool,
        isDestructive: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isLink: PropTypes.bool,
        isPrimary: PropTypes.bool,
        isSecondary: PropTypes.bool,
        data: PropTypes.object,
        onClick: PropTypes.func,
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
                    <Button text="Primary Button" isPrimary />
                    <Button text="Secondary Button" isSecondary />
                    <Button
                        text="Primary Destructive Button"
                        isDestructive
                        isPrimary
                    />
                    <Button
                        text="Secondary Destructive Button"
                        isDestructive
                        isSecondary
                    />
                </ComponentPreviewWithCodeBlock>
            </StorySection>
        );
    };

    baseCls = 'bankai-sb-buttons-guide';
}

export default ButtonGuide;
