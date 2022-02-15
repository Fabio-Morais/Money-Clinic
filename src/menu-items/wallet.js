// assets
import { IconBrandChrome } from '@tabler/icons';

// constant
const icons = { IconBrandChrome };

// ==============================|| WALLET MENU ITEMS ||============================== //

const wallet = {
    id: 'wallet',
    title: 'Wallet',
    type: 'group',
    children: [
        {
            id: 'crypto',
            title: 'Crypto',
            type: 'item',
            url: '/crypto',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        }
    ]
};

export default wallet;
