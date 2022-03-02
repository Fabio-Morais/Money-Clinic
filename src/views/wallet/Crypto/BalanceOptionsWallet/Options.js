import { Button, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { MdAddCircleOutline } from 'react-icons/md';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { styled } from '@mui/material/styles';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { GrEdit } from 'react-icons/gr';

const GreyButton = styled(Button)(({ theme }) => ({
    '&:hover': { backgroundColor: theme.palette.grey['300'] }
}));
function Options() {
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
            <Button variant="contained" startIcon={<MdAddCircleOutline />} sx={{ backgroundColor: 'primary.800' }}>
                Add new
            </Button>
        </Stack>
    );
}

export default Options;
