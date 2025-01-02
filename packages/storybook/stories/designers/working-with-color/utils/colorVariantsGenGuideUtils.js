/* eslint-disable import/prefer-default-export */
import { genColorAndVariantsWithMetadata } from '@driponfleek/bankai-lib-color-utils';

export const getColorData = (hex, step = 5) =>
    genColorAndVariantsWithMetadata({ hex, step });
