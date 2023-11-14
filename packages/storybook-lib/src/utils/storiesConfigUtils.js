/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import { SB_BASE_CLS_PREFIX } from '../const/baseClsConst';
// import { BankaiHistory, BankaiReadme } from '@driponfleek/bankai-ui-icons';
// import { Description } from '@storybook/addon-docs';
// import DocsTabs from '../components/content/DocsTabs';

// const CHANGELOG_ID = 'CHANGELOG';
// const README_ID = 'README';
// const renderReadmeIcon = (iconCls) => (
//     <BankaiReadme contextCls={`${iconCls}`} />
// );
// const renderChangelogIcon = (iconCls) => (
//     <BankaiHistory contextCls={`${iconCls}`} />
// );

export const genSBBaseCls = (suffix = '') => `${SB_BASE_CLS_PREFIX}${suffix}`;

export const storyConfig = (Story, config) => {
    const {
        hasA11Y = true,
        hasActions = true,
        shouldShowPanel = true,
        storyName,
        args,
        argTypes,
        docs,
        // locale = {},
        // renderMarkdown = (markdown) => markdown,
    } = config || {};
    // const { readMe, changeLog } = locale;
    const decorators = [];
    // const { Changelog, ReadMe } = docs || {};

    if (storyName) {
        // console.log('storyName: ', storyName);
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
            element: '.bankai--sb-component-preview--check-a11y',
        },
        actions: {
            disable: !hasActions,
        },
        // ...(docs && {
        //     docs: {
        //         page: () => (
        //             <DocsTabs
        //                 initialActiveTabId={ReadMe ? README_ID : CHANGELOG_ID}
        //                 tabs={[
        //                     ...(ReadMe
        //                         ? [
        //                               {
        //                                   id: README_ID,
        //                                   text: readMe,
        //                                   renderIcon: renderReadmeIcon,
        //                                   doc: renderMarkdown(ReadMe),
        //                               },
        //                           ]
        //                         : []),
        //                     ...(Changelog
        //                         ? [
        //                               {
        //                                   id: CHANGELOG_ID,
        //                                   text: changeLog,
        //                                   renderIcon: renderChangelogIcon,
        //                                   doc: renderMarkdown(Changelog),
        //                               },
        //                           ]
        //                         : []),
        //                 ]}
        //             >
        //                 {ReadMe && <Description>{ReadMe}</Description>}
        //                 {Changelog && <Description>{Changelog}</Description>}
        //             </DocsTabs>
        //         ),
        //     },
        // }),
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

    // console.log('parameters: ', parameters);

    Story.parameters = parameters;
};

// // export const storyConfig = (renderStory, config) => {
// //     const {
// //         hasA11Y = true,
// //         hasActions = true,
// //         shouldShowPanel = true,
// //         storyName,
// //         args,
// //         argTypes,
// //         docs,
// //         // locale = {},
// //         // renderMarkdown = (markdown) => markdown,
// //     } = config || {};

// //     const parameters = {
// //         a11y: {
// //             disable: !hasA11Y,
// //             element: genSBBaseCls('component-preview--check-a11y'),
// //         },
// //         actions: {
// //             disable: !hasActions,
// //         },
// //         // ...(docs && {
// //         //     docs: {
// //         //         page: () => (
// //         //             <DocsTabs
// //         //                 initialActiveTabId={ReadMe ? README_ID : CHANGELOG_ID}
// //         //                 tabs={[
// //         //                     ...(ReadMe
// //         //                         ? [
// //         //                               {
// //         //                                   id: README_ID,
// //         //                                   text: readMe,
// //         //                                   renderIcon: renderReadmeIcon,
// //         //                                   doc: renderMarkdown(ReadMe),
// //         //                               },
// //         //                           ]
// //         //                         : []),
// //         //                     ...(Changelog
// //         //                         ? [
// //         //                               {
// //         //                                   id: CHANGELOG_ID,
// //         //                                   text: changeLog,
// //         //                                   renderIcon: renderChangelogIcon,
// //         //                                   doc: renderMarkdown(Changelog),
// //         //                               },
// //         //                           ]
// //         //                         : []),
// //         //                 ]}
// //         //             >
// //         //                 {ReadMe && <Description>{ReadMe}</Description>}
// //         //                 {Changelog && <Description>{Changelog}</Description>}
// //         //             </DocsTabs>
// //         //         ),
// //         //     },
// //         // }),
// //         options: {
// //             showPanel: shouldShowPanel,
// //         },
// //         previewTabs: {
// //             canvas: {
// //                 hidden: false,
// //             },
// //             'storybook/docs/panel': {
// //                 hidden: !docs,
// //             },
// //         },
// //         viewMode: 'story',
// //     };

// //     console.log('config: ', {
// //         ...(storyName && { name: storyName }),
// //         render: renderStory,
// //         ...(args && { args }),
// //         ...(argTypes && { argTypes }),
// //         parameters,
// //     });

// //     return {
// //         ...(storyName && { name: storyName }),
// //         // render: renderStory,
// //         // // ...(args && { args }),
// //         // // ...(argTypes && { argTypes }),
// //         parameters,
// //     };
// // };

// export const storyConfig = (Story, config) => {
//     const {
//         hasA11Y = true,
//         hasActions = true,
//         shouldShowPanel = true,
//         storyName,
//         args,
//         argTypes,
//         docs,
//         // locale = {},
//         // renderMarkdown = (markdown) => markdown,
//     } = config || {};
//     // const { readMe, changeLog } = locale;
//     const decorators = [];
//     // const { Changelog, ReadMe } = docs || {};

//     const parameters = {
//         a11y: {
//             disable: !hasA11Y,
//             element: '.bankai--sb-component-preview--check-a11y',
//         },
//         actions: {
//             disable: !hasActions,
//         },
//         // ...(docs && {
//         //     docs: {
//         //         page: () => (
//         //             <DocsTabs
//         //                 initialActiveTabId={ReadMe ? README_ID : CHANGELOG_ID}
//         //                 tabs={[
//         //                     ...(ReadMe
//         //                         ? [
//         //                               {
//         //                                   id: README_ID,
//         //                                   text: readMe,
//         //                                   renderIcon: renderReadmeIcon,
//         //                                   doc: renderMarkdown(ReadMe),
//         //                               },
//         //                           ]
//         //                         : []),
//         //                     ...(Changelog
//         //                         ? [
//         //                               {
//         //                                   id: CHANGELOG_ID,
//         //                                   text: changeLog,
//         //                                   renderIcon: renderChangelogIcon,
//         //                                   doc: renderMarkdown(Changelog),
//         //                               },
//         //                           ]
//         //                         : []),
//         //                 ]}
//         //             >
//         //                 {ReadMe && <Description>{ReadMe}</Description>}
//         //                 {Changelog && <Description>{Changelog}</Description>}
//         //             </DocsTabs>
//         //         ),
//         //     },
//         // }),
//         options: {
//             showPanel: shouldShowPanel,
//         },
//         previewTabs: {
//             canvas: {
//                 hidden: false,
//             },
//             'storybook/docs/panel': {
//                 hidden: !docs,
//             },
//         },
//         viewMode: 'story',
//     };

//     // if (args) {
//     //     Story.args = args;
//     // }

//     // if (argTypes) {
//     //     Story.argTypes = argTypes;
//     // }

//     // if (decorators.length > 0) {
//     //     Story.decorators = decorators;
//     // }

//     const storyWithConfig = {
//         // render: Story,
//         ...(args && { args }),
//         ...(argTypes && { argTypes }),
//         parameters,
//     };

//     console.log('storyWithConfig: ', storyWithConfig);

//     return storyWithConfig;
// };

// export const storyConfig = (renderStory, config) => {
//     const {
//         hasA11Y = true,
//         hasActions = true,
//         shouldShowPanel = true,
//         storyName,
//         args,
//         argTypes,
//         docs,
//         // locale = {},
//         // renderMarkdown = (markdown) => markdown,
//     } = config || {};

//     const parameters = {
//         a11y: {
//             disable: !hasA11Y,
//             element: genSBBaseCls('component-preview--check-a11y'),
//         },
//         actions: {
//             disable: !hasActions,
//         },
//         // ...(docs && {
//         //     docs: {
//         //         page: () => (
//         //             <DocsTabs
//         //                 initialActiveTabId={ReadMe ? README_ID : CHANGELOG_ID}
//         //                 tabs={[
//         //                     ...(ReadMe
//         //                         ? [
//         //                               {
//         //                                   id: README_ID,
//         //                                   text: readMe,
//         //                                   renderIcon: renderReadmeIcon,
//         //                                   doc: renderMarkdown(ReadMe),
//         //                               },
//         //                           ]
//         //                         : []),
//         //                     ...(Changelog
//         //                         ? [
//         //                               {
//         //                                   id: CHANGELOG_ID,
//         //                                   text: changeLog,
//         //                                   renderIcon: renderChangelogIcon,
//         //                                   doc: renderMarkdown(Changelog),
//         //                               },
//         //                           ]
//         //                         : []),
//         //                 ]}
//         //             >
//         //                 {ReadMe && <Description>{ReadMe}</Description>}
//         //                 {Changelog && <Description>{Changelog}</Description>}
//         //             </DocsTabs>
//         //         ),
//         //     },
//         // }),
//         options: {
//             showPanel: shouldShowPanel,
//         },
//         previewTabs: {
//             canvas: {
//                 hidden: false,
//             },
//             'storybook/docs/panel': {
//                 hidden: !docs,
//             },
//         },
//         viewMode: 'story',
//     };

//     console.log('config: ', {
//         ...(storyName && { name: storyName }),
//         render: renderStory,
//         ...(args && { args }),
//         ...(argTypes && { argTypes }),
//         parameters,
//     });

//     return {
//         ...(storyName && { name: storyName }),
//         // render: renderStory,
//         // // ...(args && { args }),
//         // // ...(argTypes && { argTypes }),
//         parameters,
//     };
// };
