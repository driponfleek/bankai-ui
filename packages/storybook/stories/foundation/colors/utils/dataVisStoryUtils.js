/* eslint-disable import/prefer-default-export */
import {
    genBrewerDivergingTokens,
    genBrewerQualitativeTokens,
    genBrewerSequentialTokens,
} from '@driponfleek/bankai-lib-theme-utils';

export const getFoundationalTokenVals = () => {
    const htmlDOM = document.getElementsByTagName('html')[0];
    const styles = window.getComputedStyle(htmlDOM);
    const axisColor = styles.getPropertyValue(
        '--bankai-utility-color-data-axis',
    );
    const canvasColor = styles.getPropertyValue(
        '--bankai-utility-color-data-canvas',
    );
    const gridColor = styles.getPropertyValue(
        '--bankai-utility-color-data-grid',
    );

    return {
        axisColor,
        canvasColor,
        gridColor,
    };
};

export const getDivergingTokenVals = () => {
    const tokens = genBrewerDivergingTokens();
    const tokenNames = Object.keys(tokens);

    return tokenNames.reduce(
        (acc, tokenName) => {
            const accClone = { ...acc };
            const val = { mainContent: tokenName, color: tokens[tokenName] };

            switch (true) {
                case tokenName.includes('brbg'):
                    accClone.brbg.push(val);
                    break;
                case tokenName.includes('piyg'):
                    accClone.piyg.push(val);
                    break;
                case tokenName.includes('prgn'):
                    accClone.prgn.push(val);
                    break;
                case tokenName.includes('puor'):
                    accClone.puor.push(val);
                    break;
                case tokenName.includes('rdbu'):
                    accClone.rdbu.push(val);
                    break;
                case tokenName.includes('rdylbu'):
                    accClone.rdylbu.push(val);
                    break;
                default:
                    break;
            }

            return accClone;
        },
        {
            brbg: [],
            piyg: [],
            prgn: [],
            puor: [],
            rdbu: [],
            rdylbu: [],
        },
    );
};

export const getQualitativeTokenVals = () => {
    const tokens = genBrewerQualitativeTokens();
    const tokenNames = Object.keys(tokens);

    return tokenNames.reduce(
        (acc, tokenName) => {
            const accClone = { ...acc };
            const val = { mainContent: tokenName, color: tokens[tokenName] };

            switch (true) {
                case tokenName.includes('dark2'):
                    accClone.dark2.push(val);
                    break;
                case tokenName.includes('paired'):
                    accClone.paired.push(val);
                    break;
                case tokenName.includes('set2'):
                    accClone.set2.push(val);
                    break;
                default:
                    break;
            }

            return accClone;
        },
        {
            dark2: [],
            paired: [],
            set2: [],
        },
    );
};

export const getSequentialTokenVals = () => {
    const tokens = genBrewerSequentialTokens();
    const tokenNames = Object.keys(tokens);

    return tokenNames.reduce(
        (acc, tokenName) => {
            const accClone = { ...acc };
            const val = { mainContent: tokenName, color: tokens[tokenName] };
            let palette;

            switch (true) {
                case tokenName.includes('blues'):
                    palette = 'blues';
                    break;
                case tokenName.includes('.bugn.'):
                    palette = 'bugn';
                    break;
                case tokenName.includes('bupu'):
                    palette = 'bupu';
                    break;
                case tokenName.includes('.gnbu.'):
                    palette = 'gnbu';
                    break;
                case tokenName.includes('greens'):
                    palette = 'greens';
                    break;
                case tokenName.includes('greys'):
                    palette = 'greys';
                    break;
                case tokenName.includes('oranges'):
                    palette = 'oranges';
                    break;
                case tokenName.includes('.orrd.'):
                    palette = 'orrd';
                    break;
                case tokenName.includes('.pubu.'):
                    palette = 'pubu';
                    break;
                case tokenName.includes('pubugn'):
                    palette = 'pubugn';
                    break;
                case tokenName.includes('purd'):
                    palette = 'purd';
                    break;
                case tokenName.includes('purples'):
                    palette = 'purples';
                    break;
                case tokenName.includes('rdpu'):
                    palette = 'rdpu';
                    break;
                case tokenName.includes('reds'):
                    palette = 'reds';
                    break;
                case tokenName.includes('.ylgn.'):
                    palette = 'ylgn';
                    break;
                case tokenName.includes('ylgnbu'):
                    palette = 'ylgnbu';
                    break;
                case tokenName.includes('ylorbr'):
                    palette = 'ylorbr';
                    break;
                case tokenName.includes('ylorrd'):
                    palette = 'ylorrd';
                    break;
                default:
                    break;
            }

            if (palette) {
                accClone[palette].push(val);
            }

            return accClone;
        },
        {
            blues: [],
            bugn: [],
            bupu: [],
            gnbu: [],
            greens: [],
            greys: [],
            oranges: [],
            orrd: [],
            pubu: [],
            pubugn: [],
            purd: [],
            purples: [],
            rdpu: [],
            reds: [],
            ylgn: [],
            ylgnbu: [],
            ylorbr: [],
            ylorrd: [],
        },
    );
};
