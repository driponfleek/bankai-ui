import pkgJSON from '@driponfleek/bankai-ui-buttons/package.json';
import { getLocale } from '../../../../utils/localeUtils';
import { getComponentsTitle } from '../../../../utils/storiesConfigUtils';

export const STORY_SUB_TITLE = getComponentsTitle(
    getLocale('stories.components.buttons.categoryTitle'),
);

export const PKG_JSON = pkgJSON;

export const BUTTONS = {
    BUTTON: 'BUTTON',
    LINK_BUTTON: 'LINK_BUTTON',
    MENU_BUTTON: 'MENU_BUTTON',
    SPLIT_BUTTON: 'SPLIT_BUTTON',
};
