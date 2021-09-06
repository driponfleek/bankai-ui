/* eslint-disable import/prefer-default-export */

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
