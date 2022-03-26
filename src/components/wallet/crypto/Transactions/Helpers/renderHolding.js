// material-ui
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { typographyDefault } from './commonDesign';

function getHoldingFormat(amount, type, currency) {
    if (type.toLowerCase() === 'buy') {
        return `+ ${amount} ${currency}`;
    }
    if (type.toLowerCase() === 'sell') {
        return `- ${amount} ${currency}`;
    }
    return '--';
}
function getHoldingCoinFormat(amount, shortName, type) {
    if (type.toLowerCase() === 'buy' || type.toLowerCase() === 'transfer in') {
        return `+ ${amount} ${shortName}`;
    }
    if (type.toLowerCase() === 'sell' || type.toLowerCase() === 'transfer out') {
        return `- ${amount} ${shortName}`;
    }
    return '--';
}

function RenderHolding({ rows, currency, transactionCoin }) {
    return (
        <Box sx={{ flexDirection: 'row' }}>
            <Typography sx={typographyDefault}>{getHoldingFormat(rows.row.totalAmount, rows.row.type, currency)}</Typography>

            <Typography
                sx={{ fontSize: '12px', fontWeight: '500' }}
                color={
                    rows.row.type.toLowerCase() === 'buy' || rows.row.type.toLowerCase() === 'transfer in' ? 'success.dark' : 'error.main'
                }
            >
                {getHoldingCoinFormat(rows.row.totalAmountCoin, transactionCoin.coin.shortName, rows.row.type)}
            </Typography>
        </Box>
    );
}

export default RenderHolding;
