import pkgJSON from '@driponfleek/bankai-ui-tabs/package.json';
import { getLocale } from '../../../../utils/localeUtils';
import { getComponentsTitle } from '../../../../utils/storiesConfigUtils';

export const STORY_SUB_TITLE = getComponentsTitle(
    getLocale('stories.components.tabViews.categoryTitle'),
);

export const PKG_JSON = pkgJSON;
