/* eslint-disable import/prefer-default-export */
import {
    getRecommendedColorFromVariants,
    getControlVsOptionsA11yEvals,
    genColorAndVariantsWithMetadata,
} from '@driponfleek/bankai-lib-color-utils';
import { getIdenticalIds } from './dataEvalUtils';

const genLinkDataEasy = (sourceColor = {}, shouldUnderlineLinks = false) => {
    const { recommendedColor = {} } = sourceColor;

    return {
        linkColor: recommendedColor,
        shouldUnderline: shouldUnderlineLinks,
    };
};

export const genLinkData = ({ sourceColor = {}, textColor, config = {} }) => {
    const { shouldAutoCorrectColors = true, shouldUnderlineLinks = false } =
        config;

    if (!shouldAutoCorrectColors || shouldUnderlineLinks) {
        return genLinkDataEasy(sourceColor, shouldUnderlineLinks);
    }

    const shouldUnderline = shouldUnderlineLinks;
    const textColorData = genColorAndVariantsWithMetadata({ hex: textColor });
    const { bgColor, recommendedColor = {}, variants } = sourceColor;
    const testOps = [
        recommendedColor,
        ...variants.filter((variant) => variant.hex !== recommendedColor.hex),
    ];
    const { controlColor: evalTextColor = {} } = getControlVsOptionsA11yEvals(
        textColorData?.baseColor,
        testOps,
    );
    const { controlColor: evalBgColor = {} } = getControlVsOptionsA11yEvals(
        bgColor,
        testOps,
    );

    // Color only needs 3:1 contrast ratio against text
    const { compatibleNonTextColors = [] } = evalTextColor;
    // Color needs 4.5:1 contrast ratio against background
    const { compatibleTextColors = [] } = evalBgColor;
    const identicalIds = getIdenticalIds(
        compatibleTextColors,
        compatibleNonTextColors,
    );

    if (identicalIds.length === 0) {
        return {
            linkColor: recommendedColor,
            shouldUnderline: true,
        };
    }

    const canUseRecommended = identicalIds.includes('recommended');

    if (canUseRecommended) {
        return {
            linkColor: recommendedColor,
            shouldUnderline: shouldUnderlineLinks,
        };
    }

    const compatibleColors = identicalIds.map((id) =>
        testOps.find((op) => op.id === id),
    );

    const recommendedLinkColor = getRecommendedColorFromVariants(
        recommendedColor,
        compatibleColors,
    );

    return {
        linkColor: recommendedLinkColor || recommendedColor,
        shouldUnderline,
    };
};
