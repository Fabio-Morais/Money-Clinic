// assets
import { IconReceiptTax, IconSquarePlus } from '@tabler/icons';

// constant
const icons = { IconReceiptTax, IconSquarePlus };

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
        },
        {
            id: 'addexpense',
            title: 'Add Expenses',
            type: 'item',
            url: '/addexpense',
            icon: icons.IconSquarePlus,
            breadcrumbs: false
        }
    ]
};

export default expenses;
