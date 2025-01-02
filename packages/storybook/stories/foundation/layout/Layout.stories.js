import StoryUILayout from './StoryUILayout';

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

export default {
    title: 'Foundation/Structure',
};

export const ColorPalette = {
    name: 'Layout',
    render: StoryUILayout,
    parameters,
};
