// material-ui
import { Typography } from '@mui/material';

import { typographyDefault } from './commonDesign';

function RenderDate(param) {
    const { rows } = param;
    return (
        <>
            <Typography sx={typographyDefault}>{rows.row.date}</Typography>
        </>
    );
}

export default RenderDate;
