import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MenuButton } from '@epr0t0type/bankai-ui-buttons';
import packageJSON from '@epr0t0type/bankai-ui-buttons/package.json';
import { Hyperlink } from '@epr0t0type/bankai-ui-typography';
import CalloutBannerInfo from '../../../../sb-components/callouts/CalloutBannerInfo';
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

class MenuButtonGuide extends PureComponent {
    static defaultProps = {
        isDisabled: false,
        shouldCloseOnBlur: true,
        shouldCloseOnSelection: true,
        menuOptions: [],
        onSelection: () => Promise.resolve(),
        onMenuToggle: () => Promise.resolve(),
    };

    static propTypes = {
        btnContextCls: PropTypes.string,
        contextCls: PropTypes.string,
        text: PropTypes.string,
        variant: PropTypes.string,
        isDisabled: PropTypes.bool,
        shouldCloseOnBlur: PropTypes.bool,
        shouldCloseOnSelection: PropTypes.bool,
        menuProps: PropTypes.object,
        wrapperProps: PropTypes.object,
        menuOptions: PropTypes.array,
        onSelection: PropTypes.func,
        onMenuToggle: PropTypes.func,
        renderIcon: PropTypes.func,
        renderMenuOption: PropTypes.func,
    };

    static displayName = locale.stories.components.buttons.menuButton.title;

    render() {
        return (
            <StoryLayout
                contextCls={this.baseCls}
                packageVer={packageJSON.version}
                title={locale.stories.components.buttons.menuButton.title}
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
        const calloutBannerCls = 'bankai-callout-banner';

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <MenuButton {...props} />
                </ComponentPreview>
                <Paragraph>
                    Menu Buttons should be used when we need to consolidate
                    related actions to preserve space or to improve the overall
                    user experience. For example, you may want to use a menu
                    button for actions when there isn&apos;t enough space to
                    show all of them, or when there are actions that are not
                    used frequently by users and consolidating them in to a menu
                    button improves the overall UI and experience.
                </Paragraph>
                <CalloutBannerInfo title="Note">
                    <p className={`${calloutBannerCls}__msg`}>
                        {locale.designSystemName}&apos;s Menu Button uses{' '}
                        <Hyperlink
                            href="https://github.com/davidtheclark/react-aria-menubutton"
                            shouldOpenInNewWindow
                        >
                            react-aria-menubutton
                        </Hyperlink>{' '}
                        behind the scenes. Additional information beyond the
                        scope shown here can be found in their documentation.
                    </p>
                </CalloutBannerInfo>
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

    baseCls = 'bankai-sb-menu-button-guide';
}

export default MenuButtonGuide;
