import StoryAccessibleColorPalettes from './StoryAccessibleColorPalettes';

export default {
    title: 'Foundation/Accessibility',
};

export const AccessibleColorPalettes = {
    name: 'Accessible Color Palettes',
    render: StoryAccessibleColorPalettes,
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
