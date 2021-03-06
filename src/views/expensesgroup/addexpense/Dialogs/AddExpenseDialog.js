// material ui
import { Button, Dialog, DialogContent, DialogTitle, Typography, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function AddExpenseDialog(props) {
    const { fullScreen, handleClose, open, name } = props;

    const handleSubmit = (e) => {
        e.preventDefault();

        handleClose();
    };

    return (
        <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title" maxWidth="sm" fullWidth>
            <DialogTitle id="responsive-dialog-title">
                <Typography variant="h2">Add Expense</Typography>
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
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Description
                </Typography>
                <TextField type="text" name="quantity" fullWidth />
                <Typography variant="body2" sx={{ mt: '32px', fontWeight: 600 }}>
                    Amount
                </Typography>
                <TextField type="number" name="quantity" fullWidth />
                <Typography variant="body2" sx={{ mt: '32px', fontWeight: 600 }}>
                    Budget
                </Typography>
                <TextField type="text" defaultValue={name} name="quantity" fullWidth disabled />
                <Button variant="contained" fullWidth onClick={handleSubmit} sx={{ mt: '32px', p: 1.5, borderRadius: 2 }}>
                    Add
                </Button>
            </DialogContent>
        </Dialog>
    );
}

export default AddExpenseDialog;
