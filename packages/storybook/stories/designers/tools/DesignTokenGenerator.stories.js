import StoryDesignTokenGen from './StoryDesignTokenGen';

export default {
    title: 'Designers/Tools',
};

export const DesignTokenGenerator = {
    name: 'Design Token Generator',
    render: StoryDesignTokenGen,
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
