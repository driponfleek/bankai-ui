import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
    BankaiDeviceDesktop,
    BankaiDeviceSmartphone,
} from '@epr0t0type/bankai-ui-icons';
import SBTable from './SBTable';
import SBTableBody from './SBTableBody';
import SBTableBodyCell from './SBTableBodyCell';
import SBTableHead from './SBTableHead';
import SBTableHeadCell from './SBTableHeadCell';
import SBTableRow from './SBTableRow';
import TokenName from '../content/TokenName';
import strings from '../../i18n/strings.json';

// Constants
import { PLATFORM } from '../../const/platformConst';

// Styles
import './styles/sb-design-tokens-table.scss';

const { bankaiUI: locale } = strings;

class SBDesignTokensTable extends PureComponent {
    static defaultProps = {
        data: [],
    };

    static propTypes = {
        contextCls: PropTypes.string,
        data: PropTypes.arrayOf(PropTypes.object),
    };

    render() {
        const { contextCls, data } = this.props;

        return (
            <SBTable contextCls={cx(this.baseCls, contextCls)}>
                {this.renderTableHead()}
                <SBTableBody>
                    {data.map((tableRow, idx) =>
                        this.renderTableRow(tableRow, this.getIsAlt(idx)),
                    )}
                </SBTableBody>
            </SBTable>
        );
    }

    renderTableHead = () => {
        const hasMobile = this.getHasMobileVals();

        return (
            <SBTableHead>
                <SBTableRow isHeaderRow>
                    <SBTableHeadCell>
                        {locale.shared.designTokens.table.headings.token}
                    </SBTableHeadCell>
                    <SBTableHeadCell>
                        {locale.shared.designTokens.table.headings.value}
                    </SBTableHeadCell>
                    {hasMobile && (
                        <SBTableHeadCell>
                            {
                                locale.shared.designTokens.table.headings
                                    .valueMobile
                            }
                        </SBTableHeadCell>
                    )}
                </SBTableRow>
            </SBTableHead>
        );
    };

    renderTableRow = (rowData = {}, isAlt = false) => {
        const {
            description,
            id,
            name,
            platform,
            tokenName,
            value,
            valueMobile,
        } = rowData;
        const hasPlatform = this.getHasPlatform(platform);
        const hasMobile = this.getHasMobileVals();
        const modCls = this.getModCls(hasPlatform);

        return (
            <SBTableRow key={id} isAlt={isAlt}>
                <SBTableBodyCell contextCls={cx(modCls)}>
                    <div className={`${this.baseCls}__token-name-container`}>
                        {hasPlatform && this.renderIcon(platform)}
                        <span className={`${this.baseCls}__token-name`}>
                            {name}
                        </span>
                    </div>
                    {tokenName && (
                        <div className={`${this.baseCls}__token`}>
                            <TokenName tokenName={tokenName} />
                        </div>
                    )}
                </SBTableBodyCell>
                <SBTableBodyCell>
                    <div className={`${this.baseCls}__token-value`}>
                        {value}
                    </div>
                    {description && (
                        <div className={`${this.baseCls}__token-value-desc`}>
                            {description}
                        </div>
                    )}
                </SBTableBodyCell>
                {hasMobile && (
                    <SBTableBodyCell>
                        <div className={`${this.baseCls}__token-value`}>
                            {valueMobile}
                        </div>
                    </SBTableBodyCell>
                )}
            </SBTableRow>
        );
    };

    renderIcon = (platform) => {
        const isMobile = platform === PLATFORM.MOBILE;
        const Icon = isMobile ? BankaiDeviceSmartphone : BankaiDeviceDesktop;
        const title = isMobile ? 'Mobile Only' : 'Web Only';

        return (
            <span className={`${this.baseCls}__platform-icon-container`}>
                <Icon
                    contextCls={`${this.baseCls}__platform-icon`}
                    title={title}
                />
            </span>
        );
    };

    getHasPlatform = (platform) => {
        if (
            !platform ||
            (platform !== PLATFORM.MOBILE && platform !== PLATFORM.WEB)
        ) {
            return false;
        }

        return true;
    };

    getModCls = (hasPlatform) => {
        return {
            [`${this.baseCls}--has-platform`]: hasPlatform,
        };
    };

    getHasMobileVals = () => {
        const { data } = this.props;
        let hasMobileVals = false;

        for (let i = 0; i < data.length; i += 1) {
            const tokenData = data[i];
            hasMobileVals = tokenData.valueMobile !== undefined;

            if (hasMobileVals) {
                break;
            }
        }

        return hasMobileVals;
    };

    getIsAlt = (index) => {
        return index % 2 !== 0;
    };

    baseCls = 'bankai-sb-design-tokens-table';
}

export default SBDesignTokensTable;
