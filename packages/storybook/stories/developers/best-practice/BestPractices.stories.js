import StoryCSSBestPractices from './StoryCSSBestPractices';
import StoryFolderAndFileBestPractices from './StoryFolderAndFileBestPractices';
import StoryJSBestPractices from './StoryJSBestPractices';
import StoryReactBestPractices from './StoryReactBestPractices';

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
    title: 'Developers/Best Practices',
};

export const CSSBestPractices = {
    name: 'CSS Best Practices',
    render: StoryCSSBestPractices,
    parameters,
};

export const FolderAndFileBestPractices = {
    name: 'Folder & File Best Practices',
    render: StoryFolderAndFileBestPractices,
    parameters,
};

export const JSBestPractices = {
    name: 'JavaScript Best Practices',
    render: StoryJSBestPractices,
    parameters,
};

export const ReactBestPractices = {
    name: 'React Best Practices',
    render: StoryReactBestPractices,
    parameters,
};
