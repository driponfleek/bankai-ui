import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SBTable from './SBTable';
import SBTableBody from './SBTableBody';
import SBTableBodyCell from './SBTableBodyCell';
import SBTableHead from './SBTableHead';
import SBTableHeadCell from './SBTableHeadCell';
import SBTableRow from './SBTableRow';
import strings from '../../i18n/strings.json';

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
                    {data.map((tableRow) => this.renderTableRow(tableRow))}
                </SBTableBody>
            </SBTable>
        );
    }

    renderTableHead = () => {
        return (
            <SBTableHead>
                <SBTableRow isHeaderRow>
                    <SBTableHeadCell>
                        {locale.shared.designTokens.table.headings.token}
                    </SBTableHeadCell>
                    <SBTableHeadCell>
                        {locale.shared.designTokens.table.headings.value}
                    </SBTableHeadCell>
                </SBTableRow>
            </SBTableHead>
        );
    };

    renderTableRow = (rowData = {}) => {
        const { id, description, name, value, valueDesc, isAlt } = rowData;

        return (
            <SBTableRow key={id} isAlt={isAlt}>
                <SBTableBodyCell>
                    <div className={`${this.baseCls}__token-name`}>{name}</div>
                    {description && (
                        <div className={`${this.baseCls}__token-description`}>
                            {description}
                        </div>
                    )}
                </SBTableBodyCell>
                <SBTableBodyCell>
                    <div className={`${this.baseCls}__token-value`}>
                        {value}
                    </div>
                    {valueDesc && (
                        <div className={`${this.baseCls}__token-value-desc`}>
                            {valueDesc}
                        </div>
                    )}
                </SBTableBodyCell>
            </SBTableRow>
        );
    };

    baseCls = 'bankai-sb-design-tokens-table';
}

export default SBDesignTokensTable;
