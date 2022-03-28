import { Button, Dialog, DialogContent, DialogTitle, Stack, TextField, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

// icons
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { useRef, useState } from 'react';

function EditPortfolioDialog({ portfolioName, open, closeEditDialogHandle, portfolioHandle }) {
    const [name, setName] = useState('');
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const formRef = useRef();

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={closeEditDialogHandle}
            aria-labelledby="responsive-dialog-title"
            maxWidth="xs"
            fullWidth
        >
            <DialogTitle id="responsive-dialog-title" variant="h2">
                Edit Portfolio
                <IconButton
                    aria-label="close"
                    onClick={closeEditDialogHandle}
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
                <form ref={formRef}>
                    <Stack spacing={2}>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Name"
                            defaultValue={portfolioName}
                            sx={{ mt: 1 }}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            startIcon={<SaveAltIcon />}
                            onClick={(e) => {
                                e.preventDefault();
                                portfolioHandle(name);
                                closeEditDialogHandle();
                            }}
                        >
                            Save
                        </Button>
                    </Stack>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default EditPortfolioDialog;
