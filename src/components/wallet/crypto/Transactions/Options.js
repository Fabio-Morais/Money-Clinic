// material ui
import { Button, Stack } from '@mui/material';

// icons
import { MdAddCircleOutline } from 'react-icons/md';
import AddEditTransactionDialog from '../../Common/Dialogs/AddEditTransactionDialog';
import { useState } from 'react';

function Options({ currency, coin }) {
    const [openTransaction, setOpenTransaction] = useState(false);
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
                <AddEditTransactionDialog handleClose={closeHandle} open={openTransaction} coin={coin} currency={currency} />
            )}
        </>
    );
}

export default Options;
