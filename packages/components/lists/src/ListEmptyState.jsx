import { Callout } from '@driponfleek/bankai-ui-callouts';
import { BankaiTextBulletList } from '@driponfleek/bankai-ui-icons';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.msg] - Body text for the empty state
 * @param {string} [props.title] - Heading text for the empty state
 * @param {number} [props.headingLvl] - Heading level for the empty state title
 */
const ListEmptyState = (props) => {
    const { contextCls, msg, title, headingLvl } = props;

    return (
        <Callout
            contextCls={contextCls}
            msg={msg}
            title={title}
            headingLvl={headingLvl}
            renderIcon={BankaiTextBulletList}
        />
    );
};

export default ListEmptyState;
