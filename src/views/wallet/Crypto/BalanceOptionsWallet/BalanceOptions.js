import { Box } from '@mui/system';
import CurrentBalance from './CurrentBalance';
import Options from './Options';
import { Paper, Typography } from '@mui/material';

function BalanceOptions(param) {
    const { profit, profitPercent, currency } = param;
    return (
        <>
            <Typography variant="caption" color="primary.captation">
                Current Balance:
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}
            >
                <CurrentBalance currency="€" profitPercent={profitPercent} />
                <Options />
            </Box>
            <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <Typography variant="body1" sx={{ color: profit > 0 ? 'success.dark' : 'error.dark', fontWeight: 600, fontSize: '15px' }}>
                    {profit > 0 ? '+' : '-'} {Math.abs(profit)}
                    {currency}
                </Typography>
                <Paper sx={{ backgroundColor: 'grey.300', pl: 0.5, pr: 0.5, ml: 1, borderRadius: 1, fontSize: '12px' }}>24h</Paper>
            </Box>
        </>
    );
}

export default BalanceOptions;
