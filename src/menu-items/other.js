// assets
import { IconBrandChrome, IconReceiptTax } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconReceiptTax };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Sample Page',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'monthly-expenses',
            title: 'Expenses',
            type: 'item',
            url: '/monthly-expenses',
            icon: icons.IconReceiptTax,
            breadcrumbs: false
        }
    ]
};

export default other;
