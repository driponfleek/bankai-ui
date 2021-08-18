import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import { Button } from '@epr0t0type/bankai-ui-buttons';
import StoryLayout from '../../../../sb-components/layout/StoryLayout';
import IconographyList from '../../../../sb-components/lists/IconographyList';
// import StorySection from '../../../../sb-components/layout/StorySection';
import strings from '../../../../i18n/strings.json';
import { getStyleGuideTitle } from '../../../../utils/storiesConfig';

// Utils
import cssClasses from '../utils/iconCSSClassesUtil';

const { bankaiUI: locale } = strings;

class IconographyGuide extends PureComponent {
    render() {
        return (
            <StoryLayout
                title={locale.stories.styleGuide.iconography.icons.title}
                subTitle={getStyleGuideTitle(
                    locale.stories.styleGuide.iconography.categoryTitle,
                )}
            >
                {this.renderIcons()}
            </StoryLayout>
        );
    }

    renderIcons = () => {
        const messages = {
            copyText: locale.stories.styleGuide.iconography.icons.clickToCopy,
            copiedText:
                locale.stories.styleGuide.iconography.icons.copiedToClipboard,
        };

        return <IconographyList icons={cssClasses} locale={messages} />;
    };
}

export default IconographyGuide;
