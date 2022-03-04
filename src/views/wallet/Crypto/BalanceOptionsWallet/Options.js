import { Button, Menu, MenuItem, Stack, Typography, useMediaQuery } from '@mui/material';
import { MdAddCircleOutline } from 'react-icons/md';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { styled, useTheme } from '@mui/material/styles';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { GrEdit } from 'react-icons/gr';
import AddCoinDialog from './Dialogs/AddCoinDialog';
import { useState } from 'react';

const GreyButton = styled(Button)(({ theme }) => ({
    '&:hover': { backgroundColor: theme.palette.grey['300'] }
}));
function Options() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Stack direction="row" spacing={1}>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <>
                        <GreyButton
                            variant="contained"
                            startIcon={<BiDotsHorizontalRounded />}
                            sx={{ backgroundColor: 'grey.300', color: 'grey.900' }}
                            {...bindTrigger(popupState)}
                        >
                            More
                        </GreyButton>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>
                                <GrEdit size={16} />
                                <Typography sx={{ fontSize: '15px', fontWeight: '600', marginLeft: '10px' }}> Edit Portfolio</Typography>
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </PopupState>
            <Button
                variant="contained"
                startIcon={<MdAddCircleOutline />}
                sx={{ backgroundColor: 'primary.800' }}
                onClick={handleClickOpen}
            >
                Add new
            </Button>
            <AddCoinDialog fullScreen={fullScreen} handleClose={handleClose} open={open} />
        </Stack>
    );
}

export default Options;
