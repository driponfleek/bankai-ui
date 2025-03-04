import PropTypes from 'prop-types';
import cx from 'classnames';
import DoAndDoNotDoList from './DoAndDoNotDoList';

// Utils
import { genSBBaseCls } from '../../utils/storiesConfigUtils';

// Styles
import './styles/do-and-do-not-do.scss';

const DoAndDoNotDo = (props) => {
    const {
        contextCls,
        doNotDoTitle,
        doTitle,
        isSideBySide,
        doList,
        doNotDoList,
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

DoAndDoNotDo.defaultProps = {
    isSideBySide: false,
    doList: [],
    doNotDoList: [],
};

DoAndDoNotDo.propTypes = {
    contextCls: PropTypes.string,
    doNotDoTitle: PropTypes.string,
    doTitle: PropTypes.string,
    isSideBySide: PropTypes.bool,
    doList: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    ),
    doNotDoList: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    ),
};

export default DoAndDoNotDo;
