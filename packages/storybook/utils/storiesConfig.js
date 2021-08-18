/* eslint-disable no-param-reassign */
// import { withInfo } from '@storybook/addon-info';
// import withInfoConfig from './infoConfig';
import strings from '../i18n/strings.json';

const { bankaiUI: locale } = strings;

export const getComponentsTitle = (title = '') =>
    `${locale.categories.components}/${title}`;

export const getIntroTitle = (title = '') =>
    `${locale.categories.introduction}/${title}`;

export const getLibsUtilsTitle = (title = '') =>
    `${locale.categories.libsUtils}/${title}`;

export const getStyleGuideTitle = (title = '') =>
    `${locale.categories.styleGuide}/${title}`;

export const storyConfig = (Story, config) => {
    // const ComposedStory = Story;
    const {
        hasA11Y = true,
        // hasInfo = true,
        shouldShowPanel = true,
        storyName,
        // notes,
        args,
        argTypes,
    } = config || {};
    const decorators = [];

    if (storyName) {
        Story.storyName = storyName;
    }

    if (args) {
        Story.args = args;
    }

    if (argTypes) {
        Story.argTypes = argTypes;
    }

    const parameters = {
        options: {
            showPanel: shouldShowPanel,
        },
        a11y: {
            disable: !hasA11Y,
            element: '.bankai-sb-component-preview--check-a11y',
        },
        // ...(notes && { notes }),
        // ...(hasInfo && { info: withInfoConfig.info }),
    };

    // if (hasInfo) {
    //     decorators.push(withInfo);
    // }

    if (decorators.length > 0) {
        Story.decorators = decorators;
    }

    Story.parameters = parameters;
};
