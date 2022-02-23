// material-ui
import { Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { typographyDefault, colorPick } from './commonDesign';

function RenderVar(param) {
    const { rows } = param;
    return (
        <>
            {rows.row.var > 0 ? <ArrowDropUpIcon sx={{ color: 'success.dark' }} /> : <ArrowDropDownIcon sx={{ color: 'error.main' }} />}
            <Typography sx={{ ...typographyDefault, fontWeight: 900 }} color={colorPick(rows.row.var)}>
                {Math.abs(rows.row.var)}%
            </Typography>
        </>
    );
}

export default RenderVar;
