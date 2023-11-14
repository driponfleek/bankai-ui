import PropTypes from 'prop-types';
import cx from 'classnames';
import { BankaiFolderOpen } from '@driponfleek/bankai-ui-icons';
import { SectionTitle, genSBBaseCls } from '@driponfleek/bankai-lib-storybook';

// Styles
import './styles/folder-structure-heading.scss';

const FolderStructureHeading = (props) => {
    const { contextCls, children, ...rest } = props;
    const baseCls = genSBBaseCls('folder-structure-heading');

    return (
        <SectionTitle {...rest} contextCls={cx(baseCls, contextCls)}>
            <BankaiFolderOpen />{' '}
            <span className={`${baseCls}__text`}>{children}</span>
        </SectionTitle>
    );
};

FolderStructureHeading.defaultProps = {
    headingLvl: 3,
};

FolderStructureHeading.propTypes = {
    contextCls: PropTypes.string,
    headingLvl: PropTypes.number,
};

export default FolderStructureHeading;
