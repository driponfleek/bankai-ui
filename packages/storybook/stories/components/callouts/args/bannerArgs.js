// import { getLocale } from '../../../../utils/localeUtils';
import { stringArg, numberArg } from '@driponfleek/bankai-lib-storybook';
import { contextClsArgType, contextClsArg } from '../../../../args/sharedArgs';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

export const args = {
    ...contextClsArg,
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Banner',
    headingLvl: 2,
};

export const argTypes = {
    ...contextClsArgType,
    ...stringArg({
        //     description: '',
        propName: 'msg',
    }),
    ...stringArg({
        //     description: '',
        propName: 'title',
    }),
    ...numberArg({
        //     description: '',
        propName: 'headingLvl',
        controlOps: {
            min: 1,
            max: 6,
        },
    }),
    // ...funcArg({
    //     description: '',
    //     propName: 'renderIcon',
    // }),
};
