import pkgJSON from '@driponfleek/bankai-ui-accordions/package.json';
import { getLocale } from '../../../../utils/localeUtils';
import { getComponentsTitle } from '../../../../utils/storiesConfigUtils';

export const STORY_SUB_TITLE = getComponentsTitle(
    getLocale('stories.components.accordions.categoryTitle'),
);

export const PKG_JSON = pkgJSON;
