import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

import ProfitBadget from '../../../../ui-component/profitBadget';

/*
 * Current balance and profit
 * */
function CurrentBalance(param) {
    const { currency, profitPercent } = param;
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography variant="h1">200.13</Typography>
                    <Typography variant="h1">{currency}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <ProfitBadget profit={profitPercent} />
                </Box>
            </Stack>
        </>
    );
}

export default CurrentBalance;
