/* eslint-disable import/prefer-default-export */
import { genColorsData } from '@driponfleek/bankai-lib-color-utils';

export const getColorData = (hex, step = 5) => genColorsData({ hex, step });
