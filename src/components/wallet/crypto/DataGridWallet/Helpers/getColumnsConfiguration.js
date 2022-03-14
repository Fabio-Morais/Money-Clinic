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
            flex: 2,
            renderCell: (param) => helperAvatarText({ rows: param })
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
            field: 'var',
            headerName: '24H',
            flex: 1,
            renderCell: (param) => <RenderVar rows={param} />
        },
        {
            field: 'holding',
            headerName: 'Holding',
            flex: 1,
            renderCell: (param) => <RenderHolding rows={param} currency={currency} />
        },
        {
            field: 'avg',
            headerName: 'Avg. Buy Price',
            flex: 1,
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
            flex: 1,
            renderCell: (param) => <RenderProfit rows={param} currency={currency} />
        },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            flex: 1,
            renderCell: (param) => <RenderAction rows={param} currency={currency} />
        }
    ];
}

export default getColumnsConfiguration;
