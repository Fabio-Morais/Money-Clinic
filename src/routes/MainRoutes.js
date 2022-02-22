import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

const Expenses = Loadable(lazy(() => import('views/expensesgroup/expenses')));

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
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/expenses',
            element: <Expenses />
        },
        {
            path: '/crypto',
            element: <Crypto />
        }
    ]
};

export default MainRoutes;
