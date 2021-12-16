import { CONTROL_TYPE_NAMES, CONTROL_TYPES } from '../const/controlsConst';
import PROP_TYPES from '../const/reactPropTypesConst';

// https://storybook.js.org/docs/react/writing-docs/doc-blocks#argstable
// https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-controloptions
export const genArgType = (config) => {
    const {
        /**
         * Used for function type props, typically event handlers etc.
         */
        action,
        /**
         * Used to provide text labels for options provided.
         */
        controlLabels,
        /**
         * Use to provide additional config to controls.
         */
        controlOps,
        /**
         * Used to define tye control type to show in the Controls
         * panel. Leave undefined if not applicable.
         */
        controlType,
        /** Used to display the default value of the prop. */
        defaultValue,
        /** Used to provide more detail about the default value. */
        defaultValueDetail,
        /**
         * Used to provide a description of the prop. Supports
         * Markdown syntax.
         */
        description,
        /** Indicates control is disabled for prop. */
        isDisabled,
        /** Indicates prop is required. */
        isRequired,
        /**
         * Used to indicate possible options for a property. Should
         * be used with an ENUM type control.
         */
        options = [],
        /** Name of the property. */
        propName,
        /**
         * Used to provide a short description of the prop type,
         * ex: string, number, shape, oneOfType.
         */
        propType,
        /**
         * Used to provide more detail about the prop type.
         */
        propTypeDetail,
    } = config || {};
    const hasTableConfig = !!propType || !!defaultValue;

    if (!propName) {
        return {};
    }

    return {
        [propName]: {
            ...(action && { action }),
            ...(controlType && {
                control: {
                    type: controlType,
                    ...controlOps,
                    ...(controlLabels &&
                        options.length > 0 && { labels: controlLabels }),
                },
            }),
            ...(description && { description }),
            ...(options.length > 0 && { options }),
            name: propName,
            ...(hasTableConfig && {
                table: {
                    ...(isDisabled && { disable: isDisabled }),
                    ...(defaultValue && {
                        defaultValue: {
                            ...(defaultValueDetail && {
                                detail: defaultValueDetail,
                            }),
                            summary: defaultValue,
                        },
                    }),
                    ...(propType && {
                        type: {
                            ...(propTypeDetail && { detail: propTypeDetail }),
                            summary: propType,
                        },
                    }),
                },
            }),
            ...(isRequired && { type: { required: isRequired } }),
        },
    };
};

export const stringArg = (config) => {
    return genArgType({
        ...config,
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        propType: PROP_TYPES.STRING,
    });
};

export const dateArg = (config) => {
    return genArgType({
        ...config,
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.DATE],
        propType: `${PROP_TYPES.INSTANCE_OF}: Date`,
    });
};

export const numberArg = (config) => {
    return genArgType({
        ...config,
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.NUMBER],
        propType: PROP_TYPES.NUMBER,
    });
};

export const selectArg = (config) => {
    return genArgType({
        ...config,
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.SELECT],
        propType: PROP_TYPES.STRING,
    });
};

export const boolArg = (config) => {
    return genArgType({
        ...config,
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        propType: PROP_TYPES.BOOL,
    });
};

export const arrayArg = (config) => {
    return genArgType({
        ...config,
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.ARRAY],
        propType: PROP_TYPES.ARRAY,
    });
};

export const objectArg = (config) => {
    return genArgType({
        ...config,
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJECT],
        propType: PROP_TYPES.OBJECT,
    });
};

export const shapeArg = (config) => {
    return genArgType({
        ...config,
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJECT],
        propType: PROP_TYPES.SHAPE,
    });
};

export const funcArg = (config) => {
    return genArgType({
        ...config,
        propType: PROP_TYPES.FUNC,
    });
};
