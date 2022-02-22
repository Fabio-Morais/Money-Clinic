// assets
import { IconReceiptTax } from '@tabler/icons';

// constant
const icons = { IconReceiptTax };

// ==============================|| WALLET MENU ITEMS ||============================== //

const expenseswrap = {
    id: 'expenseswrap',
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

export default expenseswrap;
