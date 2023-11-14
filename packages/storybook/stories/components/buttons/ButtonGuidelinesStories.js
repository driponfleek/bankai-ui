import StoryButtonGuidelines from './StoryButtonGuidelines';

export default {
    title: 'Components/Buttons/Button',
};

export const ButtonGuidelines = {
    name: 'Guidelines',
    render: StoryButtonGuidelines,
    parameters: {
        a11y: {
            disable: true,
        },
        actions: {
            disable: true,
        },
        options: {
            showPanel: false,
        },
    },
};
