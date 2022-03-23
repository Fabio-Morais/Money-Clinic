// material-ui
import { Avatar, Stack, Typography } from '@mui/material';

function RenderAvatarText(param) {
    const { rows } = param;
    return (
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
            <Avatar sx={{ width: 24, height: 24, color: 'white', fontWeight: 400 }} alt={`portfolio ${rows.row.type}`}>
                {rows.row.type.charAt(0)}
            </Avatar>
            <Typography
                sx={{
                    fontSize: 14,
                    fontWeight: 600
                }}
            >
                {rows.row.type}
            </Typography>
        </Stack>
    );
}

export default RenderAvatarText;
