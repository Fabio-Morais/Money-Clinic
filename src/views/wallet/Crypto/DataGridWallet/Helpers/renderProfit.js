// material-ui
import { Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { typographyDefault, colorPick } from './commonDesign';

function RenderProfit({ rows, currency }) {
    return (
        <>
            {rows.row.profitPercent > 0 ? (
                <ArrowDropUpIcon sx={{ color: 'success.dark' }} />
            ) : (
                <ArrowDropDownIcon sx={{ color: 'error.main' }} />
            )}
            <Typography sx={typographyDefault}>
                {Math.abs(rows.row.profit)}
                {currency} (
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: '900', marginLeft: '5px', marginRight: '5px' }} color={colorPick(rows.row.var)}>
                {rows.row.profitPercent}%
            </Typography>
            <Typography sx={typographyDefault}> )</Typography>
        </>
    );
}

export default RenderProfit;
