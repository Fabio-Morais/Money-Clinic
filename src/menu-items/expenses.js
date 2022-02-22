// assets
import { IconReceiptTax } from '@tabler/icons';

// constant
const icons = { IconReceiptTax };

// ==============================|| WALLET MENU ITEMS ||============================== //

const expenses = {
    id: 'expenses',
    title: 'Expenses',
    type: 'group',
    children: [
        {
            id: 'expenses',
            title: 'Expenses',
            type: 'item',
            url: '/expenses',
            icon: icons.IconReceiptTax,
            breadcrumbs: false
        }
    ]
};

export default expenses;
