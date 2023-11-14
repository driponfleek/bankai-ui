import { Callout, VARIANTS } from '@driponfleek/bankai-ui-callouts';
import StoryCalloutDefault from './StoryCalloutDefault';
import StoryCalloutAffirmative from './StoryCalloutAffirmative';
import StoryCalloutCautionary from './StoryCalloutCautionary';
import StoryCalloutDanger from './StoryCalloutDanger';
import StoryCalloutInfo from './StoryCalloutInfo';
import { args, argTypes } from './args/calloutArgs';

const { AFFIRMATIVE, CAUTIONARY, DANGER, INFO } = VARIANTS;

export default {
    title: 'Components/Callouts',
    component: Callout,
    args,
    argTypes,
};

export const Default = {
    name: 'Callout (Default)',
    render: StoryCalloutDefault,
};

export const Affirmative = {
    name: 'Callout (Affirmative)',
    render: StoryCalloutAffirmative,
    args: {
        variant: AFFIRMATIVE,
    },
};

export const Cautionary = {
    name: 'Callout (Cautionary)',
    render: StoryCalloutCautionary,
    args: {
        variant: CAUTIONARY,
    },
};

export const Danger = {
    name: 'Callout (Danger)',
    render: StoryCalloutDanger,
    args: {
        variant: DANGER,
    },
};

export const Info = {
    name: 'Callout (Info)',
    render: StoryCalloutInfo,
    args: {
        variant: INFO,
    },
};
