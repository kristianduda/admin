import { Navigate } from 'react-router-dom';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  Folder as FolderIcon,
  PenTool as PenToolIcon,
  Calendar as CalendarIcon
} from 'react-feather';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Account from './pages/Account';
import CustomerList from './pages/CustomerList';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Settings from './pages/Settings';
import EnumList from './pages/EnumList';
import PostList from './pages/PostList';
import EventList from './pages/EventList';
import Calendar from './pages/Calendar';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      {
        path: 'posts',
        element: <PostList />,
        icon: PenToolIcon,
        title: 'Posts'
      },
      {
        path: 'events',
        element: <EventList />,
        icon: CalendarIcon,
        title: 'Events',
        permission: 32
      },
      {
        path: 'calendar',
        element: <Calendar />,
        icon: CalendarIcon,
        title: 'Calendar',
        permission: 32
      },
      {
        path: 'enums',
        element: <EnumList />,
        icon: FolderIcon,
        title: 'Enums'
      },
      {
        path: 'customers',
        element: <CustomerList />,
        icon: UsersIcon,
        title: 'Customers'
      },
      {
        path: 'account',
        element: <Account />,
        icon: UserIcon,
        title: 'Account'
      },
      {
        path: 'settings',
        element: <Settings />,
        icon: SettingsIcon,
        title: 'Settings'
      },
      // {
      //   path: 'dashboard',
      //   element: <Dashboard />,
      //   icon: BarChartIcon,
      //   title: 'Dashboard'
      // },
      // {
      //   path: 'products',
      //   element: <ProductList />,
      //   icon: ShoppingBagIcon,
      //   title: 'Products'
      // },
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/posts" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
