import { Button, Dialog, DialogContent, DialogTitle, Stack, Typography, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

function ConfirmationDialogDelete({ open, handleClose, onDelete }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title" maxWidth="xs" fullWidth>
            <DialogTitle id="responsive-dialog-title" variant="h2">
                Remove Asset
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500]
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography variant="body2">Are you sure you want to remove this coin?</Typography>
                <Typography variant="body2">Any transactions associated with this coin will also be removed.</Typography>
                <Stack spacing={1} sx={{ mt: '32px', mb: '16px' }}>
                    <Button
                        variant="contained"
                        color="error"
                        fullWidth
                        sx={{ p: 1.5, fontWeight: '600', fontSize: '14px' }}
                        onClick={onDelete}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="contained"
                        color="grey"
                        fullWidth
                        sx={{ p: 1.5, backgroundColor: theme.palette.grey['100'], fontWeight: '600', fontSize: '14px' }}
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}

export default ConfirmationDialogDelete;
