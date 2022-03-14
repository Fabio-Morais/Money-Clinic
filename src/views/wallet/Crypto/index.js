import MainCard from 'ui-component/cards/MainCard';
import DataGrid from '../../../components/wallet/crypto/DataGridWallet/DataGridWallet';
import BalanceOptions from '../../../components/wallet/crypto/BalanceOptionsWallet/BalanceOptions';

// Fake data
import { coins } from '../../../fakeData/coins';

function WalletCrypto() {
    return (
        <MainCard title="Kraken">
            <BalanceOptions profitPercent={-21.2} profit={-40.2} currency="€" />
            <DataGrid rows={coins} currency="€" />
        </MainCard>
    );
}

export default WalletCrypto;
