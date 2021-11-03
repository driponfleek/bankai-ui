import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MenuButton } from '@epr0t0type/bankai-ui-buttons';
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

        return (
            <StorySection>
                <ComponentPreview shouldCheckA11Y>
                    <MenuButton {...props} />
                </ComponentPreview>
                <Paragraph>Coming soon.</Paragraph>
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
