import { Box, Dialog, DialogContent, DialogTitle, Divider, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function ViewTransaction({ open, handleClose, transactionInfo }) {
    const viewData = {
        Type: ['Type', transactionInfo.type],
        Date: ['Date', transactionInfo.date],
        Price: ['Price Per Coin', transactionInfo.price],
        TotalAmountCoin: ['Quantity', `${transactionInfo.totalAmountCoin} ${transactionInfo.shortName}`],
        TotalAmount: ['Total Spent', transactionInfo.totalAmount],
        Fees: ['Fees', transactionInfo.fees]
    };
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog maxWidth="xs" fullWidth fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
            <DialogTitle id="responsive-dialog-title" variant="h2">
                Transaction Details
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
                <Stack sx={{ pl: '32px', pr: '32px' }}>
                    {Object.keys(viewData).map((keyName, i) => (
                        <Box key={i}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '16px' }}>
                                <Typography variant="body1">{viewData[keyName][0]}</Typography>
                                <Typography variant="body2">{viewData[keyName][1] ? viewData[keyName][1] : '- -'}</Typography>
                            </Box>
                            <Divider key={i} />
                        </Box>
                    ))}
                </Stack>
            </DialogContent>
        </Dialog>
    );
}

export default ViewTransaction;
