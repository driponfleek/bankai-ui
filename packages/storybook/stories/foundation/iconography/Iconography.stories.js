import StoryIconGuidelines from './StoryIconGuidelines';
import StoryIcons from './StoryIcons';

export default {
    title: 'Foundation/Iconography',
};

const parameters = {
    a11y: {
        disable: true,
    },
    actions: {
        disable: true,
    },
    options: {
        showPanel: false,
    },
};

export const IconGuidelines = {
    name: 'Icon Guidelines',
    render: StoryIconGuidelines,
    parameters,
};

export const Icons = {
    name: 'Icons',
    render: StoryIcons,
    parameters,
};
