/* eslint-disable import/prefer-default-export */
import { getLocale } from '../../../../utils/localeUtils';
import { getDesignersTitle } from '../../../../utils/storiesConfigUtils';

export const STORY_SUB_TITLE = getDesignersTitle(
    getLocale('stories.designers.tools.categoryTitle'),
);
