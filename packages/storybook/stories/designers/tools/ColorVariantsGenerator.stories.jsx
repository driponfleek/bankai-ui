import StoryColorVariantsGen from './StoryColorVariantsGen';

export default {
    title: 'Designers/Tools',
};

export const ColorVariantsGenerator = {
    name: 'Color Variants Generator',
    render: StoryColorVariantsGen,
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
