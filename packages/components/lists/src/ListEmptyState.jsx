import PropTypes from 'prop-types';
import { Callout } from '@driponfleek/bankai-ui-callouts';
import { BankaiTextBulletList } from '@driponfleek/bankai-ui-icons';

const ListEmptyState = (props) => {
    const { contextCls, msg, title, headingLvl } = props;
    // const renderIcon = ({ iconCls }) => {
    //     return <BankaiTextBulletList contextCls={iconCls} />;
    // };

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

ListEmptyState.propTypes = {
    contextCls: PropTypes.string,
    msg: PropTypes.string,
    title: PropTypes.string,
    headingLvl: PropTypes.number,
};

export default ListEmptyState;
