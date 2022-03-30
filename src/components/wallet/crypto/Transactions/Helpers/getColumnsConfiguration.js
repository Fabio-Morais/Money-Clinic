// material ui
import { Typography } from '@mui/material';

import { typographyDefault } from './commonDesign';

// Helper
import RenderDate from './renderDate';
import RenderAction from './renderAction';
import RenderHolding from './renderHolding';
import helperAvatarText from './renderAvatarText';

/**
 * @param currency - € or $
 * @param transactionCoin - {coin:{...}} selected coin
 * */
function getColumnsConfiguration(currency, handleOnDelete, transactionCoin) {
    return [
        {
            field: 'type',
            headerName: 'Type',
            flex: 2,
            renderCell: (param) => helperAvatarText({ rows: param })
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1,
            renderCell: (param) => <RenderDate rows={param} />
        },
        {
            field: 'price',
            headerName: 'Price',
            flex: 1,
            renderCell: (param) => (
                <>
                    <Typography sx={typographyDefault}>
                        {param.row.price}
                        {currency}
                    </Typography>
                </>
            )
        },

        {
            field: 'amount',
            headerName: 'Amount',
            flex: 1,
            renderCell: (param) => <RenderHolding rows={param} currency={currency} transactionCoin={transactionCoin} />
        },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            flex: 1,
            renderCell: (param) => <RenderAction rows={param} handleOnDelete={handleOnDelete} transactionCoin={transactionCoin.coin} />
        }
    ];
}

export default getColumnsConfiguration;
