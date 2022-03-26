// material-ui
import { DataGrid } from '@mui/x-data-grid';

// Column configuration
import getColumn from './Helpers/getColumnsConfiguration';
import { useState } from 'react';

// TODO - On click do something....
const handleOnCellClick = (params) => {
    if (params.field !== 'action') console.log(params);
};

/**
 * @param rows - {id, name, image, price, var, holding, avg, profit}
 * @param currency - € or $
 * */
function DataGridWallet({ rows, currency, transactionHandle }) {
    const [coins, setCoins] = useState(rows);
    function handleOnDelete(e, clickedCoin) {
        const newCoins = coins.filter((coin) => coin.id !== clickedCoin.id);
        setCoins(newCoins);
    }
    return (
        <DataGrid
            rows={coins}
            columns={getColumn(currency, handleOnDelete, transactionHandle)}
            rowsPerPageOptions={[]}
            autoHeight
            disableColumnFilter
            disableColumnMenu
            disableSelectionOnClick
            hideFooter
            rowHeight={65}
            columnBuffer={10}
            onCellClick={handleOnCellClick}
        />
    );
}

export default DataGridWallet;
