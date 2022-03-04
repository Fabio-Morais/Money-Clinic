// material ui
import { Typography } from '@mui/material';

import { typographyDefault } from './commonDesign';

// Helper
import RenderVar from './renderVar';
import RenderAction from './renderAction';
import RenderHolding from './renderHolding';
import RenderProfit from './renderProfit';
import helperAvatarText from './renderAvatarText';

/**
 * @param currency - € or $
 * @param pos - -1 ->  negative variation, 1 -> positive variation
 * */
function getColumnsConfiguration(currency) {
    return [
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            renderCell: (param) => helperAvatarText({ rows: param })
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 130,
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
            field: 'var',
            headerName: '24H',
            width: 130,
            renderCell: (param) => RenderVar({ rows: param })
        },
        {
            field: 'holding',
            headerName: 'Holding',
            width: 130,
            renderCell: (param) => RenderHolding({ rows: param }, { currency })
        },
        {
            field: 'avg',
            headerName: 'Avg. Buy Price',
            width: 130,
            renderCell: (param) => (
                <>
                    <Typography sx={typographyDefault}>
                        {param.row.holding}
                        {currency}
                    </Typography>
                </>
            )
        },
        {
            field: 'profit',
            headerName: 'Profit/Loss',
            width: 250,
            renderCell: (param) => RenderProfit({ rows: param }, { currency })
        },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            width: 160,
            renderCell: (param) => RenderAction({ rows: { param } })
        }
    ];
}

export default getColumnsConfiguration;
