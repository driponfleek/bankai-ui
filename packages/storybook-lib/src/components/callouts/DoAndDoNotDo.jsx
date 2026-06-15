import cx from 'classnames';
import DoAndDoNotDoList from './DoAndDoNotDoList';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Styles
import './styles/do-and-do-not-do.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.doTitle] - Title for the "do" list
 * @param {string} [props.doNotDoTitle] - Title for the "do not do" list
 * @param {boolean} [props.isSideBySide] - Renders the do/do-not-do lists side by side
 * @param {Array<string|React.ReactElement>} [props.doList] - Items for the "do" list
 * @param {Array<string|React.ReactElement>} [props.doNotDoList] - Items for the "do not do" list
 */
const DoAndDoNotDo = (props) => {
    const {
        contextCls,
        doNotDoTitle,
        doTitle,
        isSideBySide = false,
        doList = [],
        doNotDoList = [],
    } = props;
    const baseCls = genSBBaseCls('do-and-do-not-do');
    const hasDoList = doList.length > 0;
    const hasDoNotDoList = doNotDoList.length > 0;
    const modCls = {
        [`${baseCls}--side-by-side`]: isSideBySide,
    };

    return (
        <div className={cx(baseCls, modCls, contextCls)}>
            <div className={`${baseCls}__inner`}>
                {hasDoList && (
                    <div className={`${baseCls}__list-container`}>
                        <DoAndDoNotDoList
                            title={doTitle}
                            list={doList}
                            isAffirmative
                        />
                    </div>
                )}
                {hasDoNotDoList && (
                    <div className={`${baseCls}__list-container`}>
                        <DoAndDoNotDoList
                            title={doNotDoTitle}
                            list={doNotDoList}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DoAndDoNotDo;
