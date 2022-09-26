import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-loading/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-loading/README.md';
import Guide from './guides/LoadingSpheresGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingSpheresArgs';

const { bankaiUI: locale } = strings;

const StoryLoadingSpheres = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryLoadingSpheres, {
    storyName: locale.stories.components.loading.loadingSpheres.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryLoadingSpheres;
