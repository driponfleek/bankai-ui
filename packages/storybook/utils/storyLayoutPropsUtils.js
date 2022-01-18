/* eslint-disable import/prefer-default-export */
export const getSanatizedStoryProps = (props = {}, isComponent = true) => {
    const { isDarkMode, ...rest } = props;

    return isComponent ? { ...rest } : { isDarkMode };
};
