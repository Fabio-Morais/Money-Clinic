// material-ui
import { DataGrid } from '@mui/x-data-grid';

// Column configuration
import getColumn from './Helpers/getColumnsConfiguration';

// react
import { useState } from 'react';
import ViewTransaction from '../../Common/Dialogs/ViewTransaction';

/**
 * @param rows - {id, name, image, price, var, holding, avg, profit}
 * @param currency - € or $
 * @param transactionCoin - {coin:{...}} selected coin
 * */
function DataGridTransactions({ rows, currency, transactionCoin }) {
    const [transactions, setTransactions] = useState(rows);
    const [openTransaction, setOpenTransaction] = useState({ isEnabled: false, coin: {} });

    const handleOnCellClick = (params) => {
        console.log(params.row);
        setOpenTransaction({ ...openTransaction, isEnabled: true });
    };

    function handleOnDelete(e, clickedTransaction) {
        const newTransactions = transactions.filter((transaction) => transaction.id !== clickedTransaction.id);
        setTransactions(newTransactions);
    }
    const handleClose = () => {
        setOpenTransaction({ ...openTransaction, isEnabled: false });
    };
    return (
        <>
            <DataGrid
                rows={transactions}
                columns={getColumn(currency, handleOnDelete, transactionCoin)}
                rowsPerPageOptions={[]}
                autoHeight
                disableColumnFilter
                disableColumnMenu
                disableSelectionOnClick
                hideFooter
                rowHeight={65}
                columnBuffer={10}
                onCellClick={handleOnCellClick}
                sx={{ mt: '40px' }}
            />

            {openTransaction.isEnabled && <ViewTransaction open={openTransaction.isEnabled} handleClose={handleClose} />}
        </>
    );
}

export default DataGridTransactions;
