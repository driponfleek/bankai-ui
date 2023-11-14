import { Callout as BankaiCallout } from '@driponfleek/bankai-ui-callouts';
import StoryCallout from './StoryCallout';
import StoryCalloutAffirmative from './StoryCalloutAffirmative';
import StoryCalloutCautionary from './StoryCalloutCautionary';
import StoryCalloutDanger from './StoryCalloutDanger';
import StoryCalloutInfo from './StoryCalloutInfo';
import { args, argTypes } from './args/calloutArgs';

export default {
    title: 'Components/Callouts/Callout',
    component: BankaiCallout,
    args,
    argTypes,
};

export const Callout = {
    name: 'Default',
    render: StoryCallout,
};

export const CalloutAffirmative = {
    name: 'Affirmative',
    render: StoryCalloutAffirmative,
};

export const CalloutCautionary = {
    name: 'Cautionary',
    render: StoryCalloutCautionary,
};

export const CalloutDanger = {
    name: 'Danger',
    render: StoryCalloutDanger,
};

export const CalloutInfo = {
    name: 'Info',
    render: StoryCalloutInfo,
};
