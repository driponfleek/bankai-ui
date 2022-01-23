import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-icons/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-icons/README.md';
import Guide from './guides/IconographyGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';

const { bankaiUI: locale } = strings;

const IconographyStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(IconographyStory, {
    storyName: locale.stories.components.iconography.icons.title,
    hasA11Y: false,
    hasInfo: false,
    shouldShowPanel: false,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default IconographyStory;
