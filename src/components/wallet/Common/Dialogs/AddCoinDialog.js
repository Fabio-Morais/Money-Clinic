import { Avatar, Button, Dialog, DialogContent, DialogTitle, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Fake data
import { coinsData } from '../../../../fakeData/coins';

const typographyDefault = { fontSize: 14, fontWeight: 600 };

/*
 * TODO - get from the backend the "10" coins when the users types something in the search bar
 * */
function AddCoinDialog(props) {
    const { fullScreen, handleAddCoin, handleClose, open } = props;

    return (
        <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
            <DialogTitle id="responsive-dialog-title" variant="h2">
                Select Coin
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
            <DialogContent sx={{ width: '490px' }}>
                <TextField
                    fullWidth
                    id="search"
                    label="Search"
                    variant="outlined"
                    sx={{ mt: 1 }}
                    autoComplete="off"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />
                <Stack sx={{ mt: 2, height: '400px', scrollbarColor: 'red', msScrollbarFaceColor: 'red' }}>
                    {coinsData.map((d) => (
                        <Button
                            key={d.id}
                            variant="text"
                            fullWidth
                            sx={{ justifyContent: 'flex-start', p: 2 }}
                            onClick={(e) => handleAddCoin(e, d)}
                        >
                            <Avatar src={typeof d.image !== 'undefined' ? d.image : ''} sx={{ width: '24px', height: '24px' }} />
                            <Typography variant="body1" sx={{ ...typographyDefault, color: 'grey.600', ml: 0.5 }}>
                                {d.name}
                            </Typography>
                            <Typography sx={{ ...typographyDefault, color: 'grey.500', ml: 1 }}> {d.shortName}</Typography>
                            <ChevronRightIcon sx={{ position: 'absolute', right: 0, color: 'grey.600' }} />
                        </Button>
                    ))}
                </Stack>
            </DialogContent>
        </Dialog>
    );
}

export default AddCoinDialog;
