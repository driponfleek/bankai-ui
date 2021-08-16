import PropTypesTable from '../sb-components/tables/SBPropTypesTable';

export default {
    info: {
        inline: true,
        header: false,
        source: true,
        styles: {
            infoBody: {
                backgroundColor: '#fff',
                border: 'none',
                color: '#000',
                fontFamily: 'Titillium Web',
                fontSize: '1.6rem',
                margin: '0',
                padding: '0 3rem 3rem',
            },
            source: {
                h1: {
                    fontFamily: 'Exo',
                    fontWeight: 'normal',
                    fontSize: '2.2rem',
                    lineHeight: 1.5,
                    margin: '0 0 15px 0',
                },
                h2: {
                    fontFamily: 'Exo',
                    fontWeight: 'normal',
                    fontSize: '2.2rem',
                    lineHeight: 1.5,
                },
            },
            propTableHead: {
                fontFamily: 'Exo',
                fontWeight: 'normal',
                fontSize: '1.8rem',
                lineHeight: 1.5,
                marginBottom: '10px',
            },
        },
        TableComponent: PropTypesTable,
    },
};
