// material-ui
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import { typographyDefault } from './commonDesign';

function RenderHolding({ rows, currency }) {
    return (
        <Box sx={{ flexDirection: 'row' }}>
            <Typography sx={typographyDefault}>
                {rows.row.holding}
                {currency}
            </Typography>

            <Typography sx={{ fontSize: '12px', fontWeight: '500' }} color="grey.500">
                {rows.row.holdingCoin} {rows.row.shortName}
            </Typography>
        </Box>
    );
}

export default RenderHolding;
