import strings from '../i18n/strings.json';

export const checkIfDeprecated = (desc) => {
    if (!desc) {
        return false;
    }

    const { bankaiUI: locale } = strings;

    return desc.indexOf(`${locale.shared.deprecated}. `) === 0;
};

export const sortPropDefsByName = (propA, propB) => {
    let comparison = 0;

    const aName = propA.property.toLowerCase();
    const bName = propB.property.toLowerCase();

    if (aName > bName) {
        comparison = 1;
    } else if (aName < bName) {
        comparison = -1;
    }

    return comparison;
};

export const sortPropDefsByType = (propA, propB) => {
    let comparison = 0;

    const {
        propType: { name: aType },
    } = propA;
    const {
        propType: { name: bType },
    } = propB;
    const aPropType = aType.toLowerCase();
    const bPropType = bType.toLowerCase();

    if (aPropType > bPropType) {
        comparison = 1;
    } else if (aPropType < bPropType) {
        comparison = -1;
    }

    return comparison;
};

export const getSortedPropDefs = (propDefinitions = []) => {
    return propDefinitions.sort(sortPropDefsByName).sort(sortPropDefsByType);
};

export const getPropTypeName = (def) => {
    const { propType } = def || {};
    const { name, value } = propType || {};

    if (name === 'union') {
        return (value || []).map((val) => val.name).join(', ');
    }

    if (name === 'instanceOf') {
        return `${name} ${value}`;
    }

    return name;
};
