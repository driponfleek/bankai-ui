import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiFolderOpen } from '@driponfleek/bankai-ui-icons';
import { SectionTitle, genSBBaseCls } from '@driponfleek/bankai-lib-storybook';

// Styles
import './styles/folder-structure-heading.scss';

const FolderStructureHeading = (props) => {
    const { contextCls, children, headingLvl = 3, ...rest } = props;
    const baseCls = genSBBaseCls('folder-structure-heading');

    return (
        <SectionTitle
            {...rest}
            headingLvl={headingLvl}
            contextCls={cx(baseCls, contextCls)}
        >
            <BankaiFolderOpen />{' '}
            <span className={`${baseCls}__text`}>{children}</span>
        </SectionTitle>
    );
};

FolderStructureHeading.propTypes = {
    contextCls: PropTypes.string,
    headingLvl: PropTypes.number,
};

export default FolderStructureHeading;
