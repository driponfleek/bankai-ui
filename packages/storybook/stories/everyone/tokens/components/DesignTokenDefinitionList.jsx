import PropTypes from 'prop-types';
import cx from 'classnames';
import { BASE_CLS_NAMING_CONVENTION_STRAT } from '../const/storyConst';

// Styles
import './styles/design-token-definition-list.scss';

const DesignTokenDefinitionList = (props) => {
    const { contextCls, term, children } = props;
    const baseCls = `${BASE_CLS_NAMING_CONVENTION_STRAT}__dl`;

    return (
        <dl className={cx(baseCls, contextCls)}>
            <dt className={`${baseCls}-dt`}>
                <strong>{term}</strong>
            </dt>
            <dd className={`${baseCls}-dd`}>{children}</dd>
        </dl>
    );
};

DesignTokenDefinitionList.propTypes = {
    contextCls: PropTypes.string,
};

export default DesignTokenDefinitionList;
