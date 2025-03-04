import StoryColorCore from './StoryColorCore';
import StoryColorSemantic from './StoryColorSemantic';

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
    title: 'Foundation/Color',
};

export const Core = {
    name: 'Core',
    render: StoryColorCore,
    parameters,
};

export const Semantic = {
    name: 'Semantic',
    render: StoryColorSemantic,
    parameters,
};
