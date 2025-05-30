import {
    storyConfig as storyConfigUtil,
    genSBBaseCls,
    genPageBreadcrumb,
} from '@driponfleek/bankai-lib-storybook';
import { getLocale } from './localeUtils';
import Markdown from '../sb-components/docblocks/Markdown';

export const getComponentsTitle = (title = '') =>
    genPageBreadcrumb([getLocale('titles.components'), title]);
// export const getComponentsTitle = (title = '') =>
//     `${getLocale('titles.components')} > ${title}`;

export const getDevelopersTitle = (title = '') =>
    genPageBreadcrumb([getLocale('titles.developers'), title]);

// export const getDevelopersTitle = (title = '') =>
//     `${getLocale('titles.developers')}/${title}`;

export const getDesignersTitle = (title = '') =>
    genPageBreadcrumb([getLocale('titles.designers'), title]);

export const getEveryoneTitle = (title = '') =>
    genPageBreadcrumb([getLocale('titles.everyone'), title]);
// export const getDesignersTitle = (title = '') =>
//     `${getLocale('titles.designers')}/${title}`;

export const getFoundationTitle = (title = '') =>
    genPageBreadcrumb([getLocale('titles.foundation'), title]);
// export const getFoundationTitle = (title = '') =>
//

// export const getComponentsMobileTitle = (title = '') =>
//     `${getLocale('categories.componentsMobile')}/${title}`;

// export const getComponentsWebTitle = (title = '') =>
//     `${getLocale('categories.componentsWeb')}/${title}`;

// export const getIntroTitle = (title = '') =>
//     `${getLocale('titles.introduction')}/${title}`;

// export const getLibsUtilsMoreTitle = (title = '') =>
//     `${getLocale('titles.libsUtils')}/${title}`;    `${getLocale('titles.foundation')}/${title}`;

export const storyConfig = (renderStory, config) => {
    storyConfigUtil(renderStory, {
        ...config,
        locale: {
            readMe: getLocale('shared.readme'),
            changeLog: getLocale('shared.changelog'),
        },
        renderMarkdown: Markdown,
    });
};

export const getIsDarkMode = () => {
    const htmlDOM = document.getElementsByTagName('html')[0];

    return htmlDOM.classList.contains(`${genSBBaseCls()}-dark`);
};
