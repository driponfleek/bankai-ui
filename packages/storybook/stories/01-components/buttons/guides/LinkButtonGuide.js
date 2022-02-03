import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { linkTo } from '@storybook/addon-links';
import { LinkButton } from '@epr0t0type/bankai-ui-buttons';
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

class LinkButtonGuide extends PureComponent {
    static defaultProps = {
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        contextCls: PropTypes.string,
        text: PropTypes.string,
        data: PropTypes.object,
        onClick: PropTypes.func,
        renderIcon: PropTypes.func,
    };

    static displayName = locale.stories.components.buttons.linkButton.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                packageVer={packageJSON.version}
                title={locale.stories.components.buttons.linkButton.title}
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

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <LinkButton {...props} />
                </ComponentPreview>
                <Paragraph>
                    Link Buttons are used when the desired visual appearance,
                    usability and context in which it is placed are similar to
                    what a user would expect from a hyperlink. Users interpret
                    links as navigational, so when using Link Buttons you should
                    consider the intent and try not to stray too much from this
                    purpose. For example, a common use cases for using a Link
                    Button would be needing to handle the click in some way
                    before allowing the user to continue on to their
                    destination.
                </Paragraph>
                <Paragraph>
                    As a rule of thumb, use Link Buttons as a last resort when
                    you need functionality you cannot get from a native
                    hyperlink.{' '}
                    <LinkButton
                        text={`See ${locale.designSystemName}'s native Hyperlink
                    component`}
                        onClick={linkTo(
                            getComponentsTitle(
                                locale.stories.components.typography
                                    .categoryTitle,
                            ),
                            locale.stories.components.typography.hyperlink
                                .title,
                        )}
                    />{' '}
                    and consider using this instead of Link Buttons whenever
                    possible.
                </Paragraph>
                <CalloutMemoInfo
                    title="Note"
                    msg="Because Link Buttons are designed to mimic native hyperlinks
                    they cannot be disabled."
                />
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

    baseCls = 'bankai-sb-link-button-guide';
}

export default LinkButtonGuide;
