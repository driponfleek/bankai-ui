import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import { Button } from '@epr0t0type/bankai-ui-buttons';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import IconographyList from '../../../../sb-components/lists/IconographyList';
// import StorySection from '../../../../sb-components/layout/StorySection';
import strings from '../../../../i18n/strings.json';

// Utils
import { getComponentsTitle } from '../../../../utils/storiesConfig';
import iconData from '../utils/icons';

const { bankaiUI: locale } = strings;

class IconographyGuide extends PureComponent {
    render() {
        return (
            <StoryLayout
                title={locale.stories.components.iconography.icons.title}
                subTitle={getComponentsTitle(
                    locale.stories.components.iconography.categoryTitle,
                )}
            >
                {this.renderIcons()}
            </StoryLayout>
        );
    }

    renderIcons = () => {
        const messages = {
            copyText: locale.stories.components.iconography.icons.clickToCopy,
            copiedText:
                locale.stories.components.iconography.icons.copiedToClipboard,
        };

        return <IconographyList icons={iconData} locale={messages} />;
    };
}

export default IconographyGuide;
