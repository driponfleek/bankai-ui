import React from 'react';
import Guide from './guides/ComboboxGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/comboboxArgs';

const { bankaiUI: locale } = strings;

const ComboboxStory = (props) => <Guide {...props} />;

storyConfig(ComboboxStory, {
    storyName: locale.stories.components.formElements.combobox.title,
    args,
    argTypes,
});

export default ComboboxStory;
