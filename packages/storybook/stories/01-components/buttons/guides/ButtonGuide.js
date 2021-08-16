import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@epr0t0type/bankai-ui-buttons';
import ComponentPreview from '../../../../sb-components/content/ComponentPreview';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import StorySection from '../../../../sb-components/layout/StorySection';
import strings from '../../../../i18n/strings.json';
import { getComponentsTitle } from '../../../../utils/storiesConfig';

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
            </StorySection>
        );
    }

    baseCls = 'bankai-sb-buttons-guide';
}

export default ButtonGuide;
