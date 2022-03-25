// material ui
import { Button, Stack, useMediaQuery } from '@mui/material';

// icons
import { MdAddCircleOutline } from 'react-icons/md';
import AddTransactionDialog from '../../Common/Dialogs/AddTransactionDialog';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

function Options({ currency, coin }) {
    const [openTransaction, setOpenTransaction] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const closeHandle = () => {
        setOpenTransaction(false);
    };
    const openHandle = () => {
        setOpenTransaction(true);
    };
    return (
        <>
            <Stack direction="row" spacing={1}>
                <Button variant="contained" startIcon={<MdAddCircleOutline />} onClick={openHandle}>
                    Add Transaction
                </Button>
            </Stack>
            {openTransaction && (
                <AddTransactionDialog
                    fullScreen={fullScreen}
                    handleClose={closeHandle}
                    open={openTransaction}
                    coin={coin}
                    currency={currency}
                />
            )}
        </>
    );
}

export default Options;
