import React from 'react';
import Guide from './guides/LoadingSpheresGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/loadingSpheresArgs';

const { bankaiUI: locale } = strings;

const LoadingSpheresStory = (props) => <Guide {...props} />;

storyConfig(LoadingSpheresStory, {
    storyName: locale.stories.components.loading.loadingSpheres.title,
    args,
    argTypes,
});

export default LoadingSpheresStory;
