// material-ui
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';

// react icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

// Events
import ConfirmationDialogDelete from '../../../Common/Dialogs/ConfirmationDialogDelete';
import { useState } from 'react';

function RenderAction({ rows, handleOnDelete }) {
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const handleClickOpenDeleteDialog = () => {
        setOpenDeleteDialog(true);
    };
    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };
    return (
        <>
            <Box style={{ outline: 'none' }}>
                <IconButton aria-label="add" size="small" sx={{ outline: 'none' }}>
                    <EditIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                    aria-label="add"
                    size="small"
                    sx={{ outline: 'none' }}
                    onClick={() => {
                        handleClickOpenDeleteDialog();
                    }}
                >
                    <DeleteOutlineIcon fontSize="inherit" />
                </IconButton>
            </Box>
            {openDeleteDialog && (
                <ConfirmationDialogDelete
                    handleClose={handleCloseDeleteDialog}
                    open={openDeleteDialog}
                    onDelete={(e) => handleOnDelete(e, rows)}
                    title="Remove Transaction"
                    description="Are you sure you want to remove this transaction?"
                />
            )}
        </>
    );
}

export default RenderAction;
