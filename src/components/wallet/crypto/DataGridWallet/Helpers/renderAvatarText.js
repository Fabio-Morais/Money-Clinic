// material-ui
import { Box } from '@mui/system';
import { Avatar, Typography } from '@mui/material';

function RenderAvatarText(param) {
    const { rows } = param;
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >
            <Avatar sx={{ width: 24, height: 24 }} alt="image" src={rows.row.image || ''} />
            <Typography
                sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    margin: '0px 0px 0px 5px'
                }}
            >
                {rows.row.name}
            </Typography>
            <Typography sx={{ fontSize: '14px', fontWeight: '600', margin: '0px 0px 0px 5px' }} color="grey.500">
                {rows.row.shortName}
            </Typography>
        </Box>
    );
}

export default RenderAvatarText;
