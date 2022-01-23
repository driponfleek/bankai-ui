import React from 'react';
import Guide from './guides/TypographySystemGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/typographyArgs';

const { bankaiUI: locale } = strings;

const TypographySystemStory = (props) => {
    return <Guide {...props} />;
};

storyConfig(TypographySystemStory, {
    storyName: locale.stories.styleGuide.typography.typographySystem.title,
    args,
    argTypes,
    hasA11Y: false,
    hasActions: false,
});

export default TypographySystemStory;
