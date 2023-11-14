import pkgJSON from '@driponfleek/bankai-ui-navigation/package.json';
import { getLocale } from '../../../../utils/localeUtils';
import { getComponentsTitle } from '../../../../utils/storiesConfigUtils';

export const STORY_SUB_TITLE = getComponentsTitle(
    getLocale('stories.components.nav.categoryTitle'),
);

export const PKG_JSON = pkgJSON;
