import { DoAndDoNotDo as BestPractices } from '@driponfleek/bankai-lib-storybook';

// Utils
import { getLocale } from '../../utils/localeUtils';

const DoAndDoNotDo = (props) => {
    const doTitle = getLocale('titles.do');
    const doNotDoTitle = getLocale('titles.doNot');

    return (
        <BestPractices
            {...props}
            doTitle={doTitle}
            doNotDoTitle={doNotDoTitle}
        />
    );
};

export default DoAndDoNotDo;
