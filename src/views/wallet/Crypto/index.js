import MainCard from 'ui-component/cards/MainCard';
import DataGrid from '../../../components/wallet/crypto/DataGridWallet/DataGridWallet';
import BalanceOptions from '../../../components/wallet/crypto/BalanceOptionsWallet/BalanceOptions';

// Fake data
import { coinsData } from '../../../fakeData/coins';
import { transactionCoinsData } from '../../../fakeData/transactionCoins';

import { useState } from 'react';

import BackButton from '../../../components/wallet/crypto/Transactions/BackButton';
import BalanceOptionsTransactions from '../../../components/wallet/crypto/Transactions/BalanceOptionsTransactions';
import DataGridTransaction from '../../../components/wallet/crypto/Transactions/DataGridTransaction';

function WalletCrypto() {
    const [transaction, setTransaction] = useState({ isEnabled: false, coin: {} });
    const [coins, setCoins] = useState(coinsData);
    const [portfolio, setPortfolio] = useState({ name: 'Wallet' });

    const transactionHandle = (event, data) => {
        setTransaction({ isEnabled: true, coin: data.row });
    };
    const backClickHandle = () => {
        setTransaction({ ...transaction, isEnabled: false });
    };

    const handleOnDelete = (e, clickedCoin) => {
        const newCoins = coins.filter((coin) => coin.id !== clickedCoin.id);
        setCoins(newCoins);
    };
    const addTransactionHandle = (e, clickedCoin) => {
        const index = coins.findIndex((coin) => coin.id === clickedCoin.id);
        if (index === -1) {
            setCoins([...coins, clickedCoin]);
        }
    };

    const portfolioHandle = (nameString) => {
        setPortfolio({ ...portfolio, name: nameString });
    };
    return (
        <>
            {/* PORFOLIO PAGE - Page that shows all the porfolio */}
            {!transaction.isEnabled && (
                <MainCard title={portfolio.name}>
                    <BalanceOptions
                        profitPercent={-21.2}
                        profit={-40.2}
                        currency="€"
                        portfolioHandle={portfolioHandle}
                        addTransactionHandle={addTransactionHandle}
                    />
                    <DataGrid rows={coins} currency="€" transactionHandle={transactionHandle} handleOnDelete={handleOnDelete} />
                </MainCard>
            )}

            {/* TRANSACTION PAGE - Page to show the Transaction for a specific coin */}
            {transaction.isEnabled && (
                <MainCard title="Transactions">
                    <BackButton backClickHandle={backClickHandle} />
                    <BalanceOptionsTransactions coin={transaction.coin} currency="€" />
                    <DataGridTransaction rows={transactionCoinsData} currency="€" transactionCoin={transaction} />
                </MainCard>
            )}
        </>
    );
}

export default WalletCrypto;
