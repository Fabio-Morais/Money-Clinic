import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const Expenses = Loadable(lazy(() => import('views/expensesgroup/expenses')));
const AddExpense = Loadable(lazy(() => import('views/expensesgroup/addexpense')));

const Crypto = Loadable(lazy(() => import('views/wallet/Crypto')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
        {
            path: '/expenses',
            element: <Expenses />
        },
        {
            path: '/crypto',
            element: <Crypto />
        },
        {
            path: '/addexpense',
            element: <AddExpense />
        }
    ]
};

export default MainRoutes;
