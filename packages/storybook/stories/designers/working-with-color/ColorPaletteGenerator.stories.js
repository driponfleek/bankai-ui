import StoryColorPaletteGenerator from './StoryColorPaletteGenerator';

export default {
    title: 'Designers/Working With Color',
};

export const ColorPaletteGenerator = {
    name: 'Color Palette Generator',
    render: StoryColorPaletteGenerator,
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
