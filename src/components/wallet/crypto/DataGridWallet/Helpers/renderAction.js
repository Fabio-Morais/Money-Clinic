// material-ui
import { Box } from '@mui/system';
import { IconButton, Menu, MenuItem, Typography, useMediaQuery } from '@mui/material';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';

// react icons
import { RiAddLine, RiDeleteBin5Line } from 'react-icons/ri';
import { FiMoreVertical } from 'react-icons/fi';
import { GrTransaction } from 'react-icons/gr';

// Events
import AddTransactionDialog from '../../../Common/Dialogs/AddTransactionDialog';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

function RenderAction({ rows, currency }) {
    const [open, setOpen] = useState(false);
    const [coin, setCoin] = useState();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = (event, param) => {
        setOpen(true);
        setCoin(param.row);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box style={{ outline: 'none' }}>
            <IconButton
                aria-label="add"
                size="small"
                sx={{ outline: 'none' }}
                onClick={(event) => {
                    handleClickOpen(event, rows);
                }}
            >
                <RiAddLine />
            </IconButton>
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <>
                        <IconButton aria-label="option" size="small" {...bindTrigger(popupState)}>
                            <FiMoreVertical />
                        </IconButton>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>
                                <GrTransaction size={16} />
                                <Typography sx={{ fontSize: '15px', fontWeight: '600', marginLeft: '10px' }}> Transations</Typography>
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                                <RiDeleteBin5Line size={16} />
                                <Typography sx={{ fontSize: '15px', fontWeight: '600', marginLeft: '10px' }}>Delete Asset</Typography>
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </PopupState>
            {open && <AddTransactionDialog fullScreen={fullScreen} handleClose={handleClose} open={open} coin={coin} currency={currency} />}
        </Box>
    );
}

export default RenderAction;
