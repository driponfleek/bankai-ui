import StoryGuidingPrinciples from './StoryGuidingPrinciples';

export default {
    title: 'Foundation',
};

export const GuidingPrinciples = {
    name: 'Guiding Principles',
    render: StoryGuidingPrinciples,
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
