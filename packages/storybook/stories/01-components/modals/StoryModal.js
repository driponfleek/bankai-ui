import React from 'react';
import CHANGELOG from '@epr0t0type/bankai-ui-modals/CHANGELOG.md';
import README from '@epr0t0type/bankai-ui-modals/README.md';
import Guide from './guides/ModalGuide';
import { storyConfig } from '../../../utils/storiesConfig';
import strings from '../../../i18n/strings.json';
import { argTypes, args } from './args/modalArgs';

const { bankaiUI: locale } = strings;

const StoryModal = (props) => {
    return <Guide {...props} />;
};

storyConfig(StoryModal, {
    storyName: locale.stories.components.modals.modal.title,
    args,
    argTypes,
    docs: {
        Changelog: CHANGELOG,
        ReadMe: README,
    },
});

export default StoryModal;
