import { Avatar, Button, Dialog, DialogContent, DialogTitle, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

/*
 * TODO - get from the backend the "10" coins when the users types something in the search bar
 * */
function AddExpenseDialog(props) {
    const { fullScreen, handleClose, open } = props;

    return <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title" />;
}

export default AddExpenseDialog;
