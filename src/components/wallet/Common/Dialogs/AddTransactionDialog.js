import {
    Avatar,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    InputAdornment,
    MenuItem,
    Paper,
    Select,
    Stack,
    Tab,
    Tabs,
    TextField,
    Typography
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';
import { Box } from '@mui/system';

import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

import { switchPriceIntoTotal, TRANSFER } from '../../../../utils/wallet/common/SwitchPriceToTotal';

function AddTransactionDialog(props) {
    const { fullScreen, handleClose, open } = props;
    const { coin, currency } = props;
    const [value, setValue] = useState(0);
    const [transferOption, setTransferOption] = useState('0');
    const [switchSpent, setSwitchSpent] = useState('price');
    const [total, setTotal] = useState(0);
    const [input, setInput] = useState({
        quantity: '',
        pricePerCoin: ''
    });

    const calcTotal = (newValues) => {
        const { quantity, pricePerCoin } = newValues;
        let PricePerCoin = 0;
        if (quantity > 0) {
            PricePerCoin = Number(pricePerCoin) / Number(quantity);
        }
        const newTotal = switchSpent === 'price' ? Number(quantity) * Number(pricePerCoin) : PricePerCoin;
        setTotal(newTotal);
    };
    const changeValues = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newValues = {
            ...input,
            [name]: value
        };
        setInput(newValues);
        calcTotal(newValues);
    };

    const onSwitchHandle = () => {
        const newValues = {
            ...input,
            pricePerCoin: total.toString()
        };
        if (switchSpent === 'price') {
            setSwitchSpent('totalSpent');
            setTotal(total / input.quantity || 0);
        } else {
            setSwitchSpent('price');
            setTotal(total * input.quantity || 0);
        }

        setInput(newValues);
    };
    return (
        <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
            <DialogTitle id="responsive-dialog-title" variant="h2">
                Add Transaction
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
                {/* Menu to choose between BUY, SELL, TRANSFER */}
                <Tabs variant="fullWidth" value={value} onChange={(event, value) => setValue(value)} aria-label="basic tabs example">
                    <Tab label="Buy" />
                    <Tab label="Sell" />
                    <Tab label="Transfer" />
                </Tabs>

                {/* Display the logo and name of the Coin / Stock */}
                <Paper variant="outlined" sx={{ p: 1.5, mt: '24px', borderRadius: 2 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Avatar sx={{ width: 24, height: 24 }} alt="image" src={coin.image || ''} />
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 600,
                                margin: '0px 0px 0px 5px'
                            }}
                        >
                            {coin.name}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: '500', margin: '0px 0px 0px 5px' }} color="grey.500">
                            {coin.shortName}
                        </Typography>
                    </Box>
                </Paper>

                {/* Switch between price per coin and total spend */}
                {value !== TRANSFER && (
                    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', mt: '5px' }}>
                        <Button variant="text" startIcon={<HiOutlineSwitchHorizontal />} onClick={onSwitchHandle}>
                            {switchPriceIntoTotal(value, switchSpent)[0]}
                        </Button>
                    </Box>
                )}
                {/* Select between Transfer In and Out */}
                {value === TRANSFER && (
                    <>
                        <Typography variant="body2" sx={{ fontWeight: 600, mt: '16px' }}>
                            Transfer
                        </Typography>
                        <Select
                            id="selectTransfer"
                            value={transferOption}
                            label="Transfer In"
                            fullWidth
                            onChange={(e) => setTransferOption(e.target.value)}
                        >
                            <MenuItem value="0">Transfer In</MenuItem>
                            <MenuItem value="1">Transfer Out</MenuItem>
                        </Select>
                    </>
                )}

                {/* Quantity and Price */}
                <Stack direction="row" spacing={2} sx={{ mt: value === TRANSFER ? '16px' : '0px' }}>
                    {/* Quantity */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            ...(value === TRANSFER && { width: 1 })
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            Quantity
                        </Typography>
                        {value === TRANSFER ? (
                            <TextField
                                id="standard-number"
                                type="number"
                                name="quantity"
                                fullWidth
                                value={input.quantity}
                                onChange={changeValues}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">{coin.shortName}</InputAdornment>,
                                    inputProps: { min: 0 }
                                }}
                            />
                        ) : (
                            <TextField
                                id="standard-number"
                                type="number"
                                name="quantity"
                                value={input.quantity}
                                onChange={changeValues}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">{coin.shortName}</InputAdornment>,
                                    inputProps: { min: 0 }
                                }}
                            />
                        )}
                    </Box>
                    {/* Price */}
                    {value !== TRANSFER && (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column'
                            }}
                        >
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                {switchPriceIntoTotal(value, switchSpent)[1]}
                            </Typography>
                            <TextField
                                id="standard-number"
                                type="number"
                                name="pricePerCoin"
                                value={input.pricePerCoin}
                                onChange={changeValues}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                                    inputProps: { min: 0 }
                                }}
                            />
                        </Box>
                    )}
                </Stack>

                {value !== TRANSFER && (
                    <Stack spacing={1} sx={{ mt: '16px', backgroundColor: 'grey.100', p: 2, pb: 1.5, borderRadius: 2 }}>
                        <Typography variant="body2">{switchPriceIntoTotal(value, switchSpent)[0]}</Typography>
                        <Typography variant="h2">
                            {currency} {total}{' '}
                        </Typography>
                    </Stack>
                )}
                {/* Button to submit the transaction */}
                <Button variant="contained" fullWidth sx={{ mt: '32px', p: 1.5, borderRadius: 2 }}>
                    Add Transaction
                </Button>
            </DialogContent>
        </Dialog>
    );
}

export default AddTransactionDialog;
