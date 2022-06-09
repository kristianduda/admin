import { useState } from 'react';
import { Outlet, Navigate, useLocation, matchPath } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import Snackbar from './Snackbar';
import { useAuth } from 'src/contexts/auth';
import routes from '../routes';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%'
}));

const DashboardLayoutWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 256
  }
}));

const DashboardLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const getRoute = (path, routes) => {
  const p = path.shift();
  const r = routes.find((x) => x.path === p);

  if (p.length > 0 && r.children) {
    return getRoute(path, r.children);
  } else {
    return r;
  }
};

const DashboardLayout = (props) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const { user } = useAuth();
  
  const location = useLocation();
  const path = location.pathname.split('/').slice(1);
  const route = path.reduce((prev, curr) => {
    const r = prev.find((x) => x.path === curr);
    return r.children ? r.children : r;
  }, routes);

  if (!user) {
    return <Navigate to="/login" />;
  } else if (route.permission > 0 && (user.permissions & route.permission) === 0) {
    return <Navigate to="/" />;
  } else {
    return (
      <DashboardLayoutRoot>
        <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
        <DashboardSidebar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
          user={user}
        />
        <DashboardLayoutWrapper>
          <DashboardLayoutContainer>
            <DashboardLayoutContent>
              <Outlet />
            </DashboardLayoutContent>
          </DashboardLayoutContainer>
        </DashboardLayoutWrapper>
        <Snackbar />
      </DashboardLayoutRoot>
    );
  }
};

export default DashboardLayout;
