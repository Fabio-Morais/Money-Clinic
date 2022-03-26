import { Avatar, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

import ProfitBadget from '../../Common/profitBadget';

/*
 * Current balance and profit
 * */
function CurrentBalance(param) {
    const { currency, profitPercent, image, currentBalance } = param;
    return (
        <>
            <Stack direction="row" spacing={2}>
                {typeof image !== 'undefined' && <Avatar src={image} sx={{ width: 32, height: 32 }} />}
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography variant="h1">{currentBalance}</Typography>
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
