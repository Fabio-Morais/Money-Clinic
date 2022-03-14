import MainCard from 'ui-component/cards/MainCard';
import DataGrid from '../../../components/wallet/crypto/DataGridWallet/DataGridWallet';
import BalanceOptions from '../../../components/wallet/crypto/BalanceOptionsWallet/BalanceOptions';

const rows = [
    {
        id: 1,
        name: 'Ethereum',
        shortName: 'ETH',
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
        price: '235',
        var: '3.1',
        holding: '1542',
        holdingCoin: '0.11',
        avg: '35',
        profit: '35',
        profitPercent: '2'
    },
    {
        id: 2,
        name: 'Bitcoin',
        shortName: 'BTC',
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        price: '1235',
        var: '-0.3',
        holding: '152',
        holdingCoin: '324',
        avg: '15€',
        profit: '-15',
        profitPercent: '-2'
    }
];
function WalletCrypto() {
    return (
        <MainCard title="Kraken">
            <BalanceOptions profitPercent={-21.2} profit={-40.2} currency="€" />
            <DataGrid rows={rows} currency="€" />
        </MainCard>
    );
}

export default WalletCrypto;
