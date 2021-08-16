import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Table from './SBTable';
import TableHead from './SBTableHead';
import TableHeadCell from './SBTableHeadCell';
import TableBody from './SBTableBody';
import TableBodyCell from './SBTableBodyCell';
import TableRow from './SBTableRow';
import strings from '../../i18n/strings.json';

// Utils
import {
    checkIfDeprecated,
    getSortedPropDefs,
    getPropTypeName,
} from '../../utils/propsTableUtils';

// Constants
import { PROPS_BASE_CSS_CLASS } from './const/tabelConst';

// Styles
import './styles/sb-prop-types-table.scss';

const getPropDescription = (desc) => {
    const isDeprecated = checkIfDeprecated(desc);
    const { bankaiUI: locale } = strings;

    return isDeprecated ? (
        <Fragment>
            <strong className={`${PROPS_BASE_CSS_CLASS}__prop-deprecated-lbl`}>
                {locale.shared.deprecated}
            </strong>{' '}
            <span className={`${PROPS_BASE_CSS_CLASS}__prop-deprecated-text`}>
                {desc.replace(`${locale.shared.deprecated}. `, '')}
            </span>
        </Fragment>
    ) : (
        desc
    );
};

const SBPropTypesTable = ({ propDefinitions }) => {
    const { bankaiUI: locale } = strings;
    const sortedPropDefs = getSortedPropDefs(propDefinitions);

    const tableRows = sortedPropDefs.map((def, idx) => (
        <TableRow key={def.property} isAlt={idx % 2 !== 0}>
            <TableBodyCell contextCls={`${PROPS_BASE_CSS_CLASS}__prop`}>
                <p className={`${PROPS_BASE_CSS_CLASS}__prop-name`}>
                    {def.property}
                </p>
                <p className={`${PROPS_BASE_CSS_CLASS}__prop-desc-text`}>
                    {getPropDescription(def.description)}
                </p>
            </TableBodyCell>
            <TableBodyCell
                contextCls={`${PROPS_BASE_CSS_CLASS}__default-val-cell`}
            >
                {def.defaultValue ? def.defaultValue : ''}
            </TableBodyCell>
            <TableBodyCell
                contextCls={`${PROPS_BASE_CSS_CLASS}__prop-type`}
                isCentered
            >
                {getPropTypeName(def)}
            </TableBodyCell>
            <TableBodyCell
                contextCls={`${PROPS_BASE_CSS_CLASS}__prop-required`}
                isCentered
            >
                {!def.required ? '-' : <span className="bankai-icon-check" />}
            </TableBodyCell>
        </TableRow>
    ));

    return (
        <Table contextCls={`${PROPS_BASE_CSS_CLASS} mt-30`}>
            <TableHead>
                <TableRow isHeaderRow>
                    <TableHeadCell>{locale.propsTable.propDesc}</TableHeadCell>
                    <TableHeadCell>{locale.propsTable.default}</TableHeadCell>
                    <TableHeadCell
                        contextCls={`${PROPS_BASE_CSS_CLASS}__prop-type-header`}
                        isCentered
                    >
                        {locale.propsTable.propType}
                    </TableHeadCell>
                    <TableHeadCell
                        contextCls={`${PROPS_BASE_CSS_CLASS}__prop-required-header`}
                        isCentered
                    >
                        {locale.propsTable.required}
                    </TableHeadCell>
                </TableRow>
            </TableHead>
            <TableBody>{tableRows}</TableBody>
        </Table>
    );
};

SBPropTypesTable.propTypes = {
    propDefinitions: PropTypes.array,
};

export default SBPropTypesTable;
