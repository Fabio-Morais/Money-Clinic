import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

const MonthlyExpenses = Loadable(lazy(() => import('views/monthly-expenses')));

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
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/monthly-expenses',
            element: <MonthlyExpenses />
        }
    ]
};

export default MainRoutes;
