import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { linkTo } from '@storybook/addon-links';
import { SplitButton, LinkButton } from '@epr0t0type/bankai-ui-buttons';
import packageJSON from '@epr0t0type/bankai-ui-buttons/package.json';
import CalloutMemoInfo from '../../../../sb-components/callouts/CalloutMemoInfo';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
// import SectionTitle from '../../../../sb-components/content/SectionTitle';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
// import ComponentPreviewWithCodeBlock from '../../../../sb-components/content/ComponentPreviewWithCodeBlock';
import Paragraph from '../../../../sb-components/content/Paragraph';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';

// Code Strings
// import { examplesCodeStr } from './codeStr/codeStrBtn';

// Styles
// import './styles/button-guide.scss';

const { bankaiUI: locale } = strings;

class SplitButtonGuide extends PureComponent {
    static defaultProps = {
        isDisabled: false,
        menuOptions: [],
        onMainButtonClick: () => Promise.resolve(),
        onMenuToggle: () => Promise.resolve(),
        onSelection: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        variant: PropTypes.string,
        menuButtonARIALabel: PropTypes.string.isRequired,
        isDisabled: PropTypes.bool,
        menuOptions: PropTypes.array,
        mainButtonProps: PropTypes.shape({
            isDisabled: PropTypes.bool,
        }),
        menuButtonProps: PropTypes.shape({
            isDisabled: PropTypes.bool,
        }),
        onMainButtonClick: PropTypes.func,
        onMenuToggle: PropTypes.func,
        onSelection: PropTypes.func,
        renderMainButton: PropTypes.func,
        renderMainButtonIcon: PropTypes.func,
        renderMenuButtonIcon: PropTypes.func,
        renderMenuOption: PropTypes.func,
    };

    static displayName = locale.stories.components.buttons.splitButton.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                packageVer={packageJSON.version}
                title={locale.stories.components.buttons.splitButton.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.buttons.categoryTitle,
                )}
            >
                {this.renderDemo()}
                {/* {this.renderExamples()} */}
            </StoryLayout>
        );
    }

    renderDemo() {
        const { props } = this;
        const calloutMemoCls = 'bankai-callout-memo';

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <SplitButton {...props} />
                </ComponentPreview>
                <Paragraph>
                    Split buttons should be used when you a set of related
                    actions and you want to prioritize one of them while
                    consolidating the rest in a menu.
                </Paragraph>
                <CalloutMemoInfo title="Note">
                    <p className={`${calloutMemoCls}__msg`}>
                        The Split Button is composed from{' '}
                        {locale.designSystemName}&apos;s{' '}
                        <LinkButton
                            text="Button"
                            onClick={linkTo(
                                getComponentsTitle(
                                    locale.stories.components.buttons
                                        .categoryTitle,
                                ),
                                locale.stories.components.buttons.button.title,
                            )}
                        />{' '}
                        and{' '}
                        <LinkButton
                            text="Menu Button"
                            onClick={linkTo(
                                getComponentsTitle(
                                    locale.stories.components.buttons
                                        .categoryTitle,
                                ),
                                locale.stories.components.buttons.menuButton
                                    .title,
                            )}
                        />
                        .
                    </p>
                </CalloutMemoInfo>
            </StorySection>
        );
    }

    // renderExamples = () => {
    //     return (
    //         <StorySection>
    //             <SectionTitle>Examples</SectionTitle>
    //             <ComponentPreviewWithCodeBlock
    //                 contextCls={`${this.baseCls}__examples-preview`}
    //                 codeString={examplesCodeStr}
    //             >
    //                 <Button text="Default Button" />
    //                 <Button text="Primary Button" variant={PRIMARY} />
    //                 <Button text="Secondary Button" variant={SECONDARY} />
    //                 <Button
    //                     text="Primary Destructive Button"
    //                     variant={PRIMARY_DESTRUCTIVE}
    //                 />
    //                 <Button
    //                     text="Secondary Destructive Button"
    //                     variant={SECONDARY_DESTRUCTIVE}
    //                 />
    //                 <Button text="Button Styled as a Link" variant={LINK} />
    //             </ComponentPreviewWithCodeBlock>
    //         </StorySection>
    //     );
    // };

    baseCls = 'bankai-sb-split-button-guide';
}

export default SplitButtonGuide;
