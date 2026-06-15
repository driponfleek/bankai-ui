import cx from 'classnames';
import { Paragraph } from '@driponfleek/bankai-ui-typography';
import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import CodeBlock from './CodeBlock';

// Styles
import './styles/comp-import-and-usage.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.importCodeStr] - Code string shown in the import code block
 * @param {string|React.ReactElement} [props.importDesc] - Description shown above the import code block
 * @param {string} [props.usageCodeStr] - Code string shown in the usage code block
 * @param {string|React.ReactElement} [props.usageDesc] - Description shown above the usage code block
 * @param {boolean} [props.shouldShowImportCopy] - Whether to show the copy button on the import code block
 * @param {boolean} [props.shouldShowUsageCopy] - Whether to show the copy button on the usage code block
 */
const CompImportAndUsage = (props) => {
    const {
        contextCls,
        importCodeStr,
        importDesc = 'To get started first you will need to import the following:',
        usageCodeStr,
        usageDesc = 'Then to use:',
        shouldShowImportCopy = true,
        shouldShowUsageCopy = true,
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

export default CompImportAndUsage;
