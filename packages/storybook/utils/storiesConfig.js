/* eslint-disable no-param-reassign */
import React from 'react';
import { Description } from '@storybook/addon-docs';
import { CgReadme } from 'react-icons/cg';
import { AiOutlineHistory } from 'react-icons/ai';
import DocsTabs from '../sb-components/content/DocsTabs';
import strings from '../i18n/strings.json';

const { bankaiUI: locale } = strings;
const CHANGELOG_ID = 'CHANGELOG';
const README_ID = 'README';
const renderMarkdown = (markdown) => <Description>{markdown}</Description>;
const renderReadmeIcon = (iconCls) => (
    <CgReadme className={`bankai-icon ${iconCls}`} />
);
const renderChangelogIcon = (iconCls) => (
    <AiOutlineHistory className={`bankai-icon ${iconCls}`} />
);

export const getComponentsTitle = (title = '') =>
    `${locale.categories.components}/${title}`;

export const getIntroTitle = (title = '') =>
    `${locale.categories.introduction}/${title}`;

export const getLibsUtilsTitle = (title = '') =>
    `${locale.categories.libsUtils}/${title}`;

export const getStyleGuideTitle = (title = '') =>
    `${locale.categories.styleGuide}/${title}`;

export const storyConfig = (Story, config) => {
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
                    <DocsTabs
                        initialActiveTabId={ReadMe ? README_ID : CHANGELOG_ID}
                        tabs={[
                            ...(ReadMe
                                ? [
                                      {
                                          id: README_ID,
                                          text: locale.shared.readme,
                                          renderIcon: renderReadmeIcon,
                                          doc: renderMarkdown(ReadMe),
                                      },
                                  ]
                                : []),
                            ...(Changelog
                                ? [
                                      {
                                          id: CHANGELOG_ID,
                                          text: locale.shared.changelog,
                                          renderIcon: renderChangelogIcon,
                                          doc: renderMarkdown(Changelog),
                                      },
                                  ]
                                : []),
                        ]}
                    >
                        {ReadMe && <Description>{ReadMe}</Description>}
                        {Changelog && <Description>{Changelog}</Description>}
                    </DocsTabs>
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
