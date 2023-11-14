import PropTypes from 'prop-types';
import cx from 'classnames';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import CodeBlock from './CodeBlock';

// Styles
import './styles/comp-import-and-usage.scss';

const CompImportAndUsage = (props) => {
    const {
        contextCls,
        importCodeStr,
        importDesc,
        usageCodeStr,
        usageDesc,
        shouldShowImportCopy,
        shouldShowUsageCopy,
    } = props;
    const baseCls = genSBBaseCls('comp-import-and-usage');

    return (
        <div className={cx(baseCls, contextCls)}>
            <div className={`${baseCls}__import-container`}>
                <Paragraph>{importDesc}</Paragraph>
                <CodeBlock
                    codeString={importCodeStr}
                    shouldShowCopy={shouldShowImportCopy}
                />
            </div>
            <div className={`${baseCls}__usage-container`}>
                <Paragraph>{usageDesc}</Paragraph>
                <CodeBlock
                    codeString={usageCodeStr}
                    shouldShowCopy={shouldShowUsageCopy}
                />
            </div>
        </div>
    );
};

CompImportAndUsage.defaultProps = {
    importDesc: 'To get started first you will need to import the following:',
    usageDesc: 'Then to use:',
    shouldShowImportCopy: true,
    shouldShowUsageCopy: true,
};

CompImportAndUsage.propTypes = {
    contextCls: PropTypes.string,
    importCodeStr: PropTypes.string,
    importDesc: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    usageCodeStr: PropTypes.string,
    usageDesc: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    shouldShowImportCopy: PropTypes.bool,
    shouldShowUsageCopy: PropTypes.bool,
};

export default CompImportAndUsage;
