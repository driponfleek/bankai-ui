import pkgJSON from '@driponfleek/bankai-ui-buttons/package.json';
import { genPageBreadcrumb } from '@driponfleek/bankai-lib-storybook';
import { getLocale } from '../../../../utils/localeUtils';
import { getComponentsTitle } from '../../../../utils/storiesConfigUtils';

export const STORY_SUB_TITLE = getComponentsTitle(
    getLocale('stories.components.buttons.categoryTitle'),
);

export const BTNS_STORY_SUB_TITLE = genPageBreadcrumb([
    STORY_SUB_TITLE,
    getLocale('stories.components.buttons.button.categoryTitle'),
]);

export const MENU_BTNS_STORY_SUB_TITLE = genPageBreadcrumb([
    STORY_SUB_TITLE,
    getLocale('stories.components.buttons.menuButton.categoryTitle'),
]);

export const SPLIT_BTNS_STORY_SUB_TITLE = genPageBreadcrumb([
    STORY_SUB_TITLE,
    getLocale('stories.components.buttons.splitButton.categoryTitle'),
]);

export const PKG_JSON = pkgJSON;

export const BUTTON_VARIANTS = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
};
