// material-ui
import { Box } from '@mui/system';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';

// react icons
import { RiAddLine, RiDeleteBin5Line } from 'react-icons/ri';
import { FiMoreVertical } from 'react-icons/fi';
import { GrTransaction } from 'react-icons/gr';

// Events
import AddTransactionDialog from '../../../Common/Dialogs/AddEditTransactionDialog';
import ConfirmationDialogDelete from '../../../Common/Dialogs/ConfirmationDialogDelete';

import { useState } from 'react';

function RenderAction({ rows, currency, handleOnDelete, transactionHandle }) {
    const [open, setOpen] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [coin, setCoin] = useState();

    const handleClickOpen = (event, param) => {
        setOpen(true);
        setCoin(param.row);
    };

    const handleClickOpenDeleteDialog = (event, data, popupState) => {
        setOpenDeleteDialog(true);
        setCoin(data.row);
        popupState.close();
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };
    const addTransactionHandle = () => {
        /* Intentionally blank */
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
                            <MenuItem onClick={(e) => transactionHandle(e, rows)}>
                                <GrTransaction size={16} />
                                <Typography sx={{ fontSize: '15px', fontWeight: '600', marginLeft: '10px' }}>Transations</Typography>
                            </MenuItem>
                            <MenuItem onClick={(e) => handleClickOpenDeleteDialog(e, rows, popupState)}>
                                <RiDeleteBin5Line size={16} />
                                <Typography sx={{ fontSize: '15px', fontWeight: '600', marginLeft: '10px' }}>Delete Asset</Typography>
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </PopupState>
            {open && (
                <AddTransactionDialog
                    handleClose={handleClose}
                    open={open}
                    coin={coin}
                    currency={currency}
                    addTransactionHandle={addTransactionHandle}
                />
            )}
            {openDeleteDialog && (
                <ConfirmationDialogDelete
                    handleClose={handleCloseDeleteDialog}
                    open={openDeleteDialog}
                    onDelete={(e) => handleOnDelete(e, rows)}
                />
            )}
        </Box>
    );
}

export default RenderAction;
