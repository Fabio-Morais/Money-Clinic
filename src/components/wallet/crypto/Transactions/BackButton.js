import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const GreyButton = styled(Button)(({ theme }) => ({
    '&:hover': { backgroundColor: theme.palette.grey['300'] }
}));

function BackButton({ backClickHandle }) {
    return (
        <GreyButton
            variant="contained"
            startIcon={<KeyboardArrowLeftIcon />}
            sx={{ backgroundColor: 'grey.300', color: 'grey.900' }}
            onClick={backClickHandle}
        >
            Back
        </GreyButton>
    );
}

export default BackButton;
