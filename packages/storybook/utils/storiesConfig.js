/* eslint-disable no-param-reassign */
import React from 'react';
import { Description } from '@storybook/addon-docs';
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
        hasActions = true,
        shouldShowPanel = true,
        storyName,
        args,
        argTypes,
        docs,
    } = config || {};
    const decorators = [];
    const { Changelog, ReadMe } = docs || {};

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
        a11y: {
            disable: !hasA11Y,
            element: '.bankai-sb-component-preview--check-a11y',
        },
        actions: {
            disable: !hasActions,
        },
        ...(docs && {
            docs: {
                page: () => (
                    <>
                        {ReadMe && <Description>{ReadMe}</Description>}
                        {Changelog && <Description>{Changelog}</Description>}
                    </>
                ),
            },
        }),
        options: {
            showPanel: shouldShowPanel,
        },
        previewTabs: {
            canvas: {
                hidden: false,
            },
            'storybook/docs/panel': {
                hidden: !docs,
            },
        },
        viewMode: 'story',
    };

    if (decorators.length > 0) {
        Story.decorators = decorators;
    }

    Story.parameters = parameters;
};
