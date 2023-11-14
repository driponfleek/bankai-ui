import pkgJSON from '@driponfleek/bankai-ui-form-elements/package.json';
import pkgJSONRW from '@driponfleek/bankai-ui-form-elements-rw/package.json';
import { getLocale } from '../../../../utils/localeUtils';
import { getComponentsTitle } from '../../../../utils/storiesConfigUtils';

export const STORY_SUB_TITLE = getComponentsTitle(
    getLocale('stories.components.formElements.categoryTitle'),
);

export const PKG_JSON = pkgJSON;

export const PKG_JSON_RW = pkgJSONRW;

export const INPUTS = {
    PROTECTED: 'PROTECTED',
    TEXTAREA: 'TEXTAREA',
};
