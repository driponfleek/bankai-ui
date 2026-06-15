import cx from 'classnames';
import { BASE_CLS_NAMING_CONVENTION_STRAT } from '../const/storyConst';

// Styles
import './styles/design-token-definition-list.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the definition list element
 */
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

export default DesignTokenDefinitionList;
