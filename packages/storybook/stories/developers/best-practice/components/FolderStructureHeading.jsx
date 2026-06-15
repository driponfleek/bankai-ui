import cx from 'classnames';
import { BankaiFolderOpen } from '@driponfleek/bankai-ui-icons';
import { SectionTitle, genSBBaseCls } from '@driponfleek/bankai-lib-storybook';

// Styles
import './styles/folder-structure-heading.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the heading element
 * @param {number} [props.headingLvl] - Heading level passed to SectionTitle
 */
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

export default FolderStructureHeading;
