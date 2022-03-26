import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CurrentBalance from '../BalanceOptionsWallet/CurrentBalance';
import Options from './Options';

function BalanceOptionsTransactions(props) {
    const { coin, currency } = props;
    return (
        <Stack sx={{ mt: '24px' }}>
            <Typography variant="caption" color="primary.caption">
                {coin.name} ({coin.shortName}) Balance:
            </Typography>
            {/* Top side */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    mt: 1
                }}
            >
                {/* Balance and profit */}
                <CurrentBalance currency="€" profitPercent={2} image={coin.image} currentBalance={coin.holding} />
                {/* Button - add  */}
                <Options coin={coin} currency={currency} />
            </Box>
            {/* Bottom side */}
        </Stack>
    );
}

export default BalanceOptionsTransactions;
