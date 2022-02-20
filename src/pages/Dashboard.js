import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@mui/material';
import Orders from '../components/dashboard/Orders';
import LatestOrders from '../components/dashboard/LatestOrders';
import LatestProducts from '../components/dashboard/LatestProducts';
import Sales from '../components/dashboard/Sales';
import TotalOrders from '../components/dashboard/TotalOrders';
import TotalProfit from '../components/dashboard/TotalProfit';
import TotalCustomers from '../components/dashboard/TotalCustomers';
import TrafficByDevice from '../components/dashboard/TrafficByDevice';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Cukro</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Orders />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalProfit />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalOrders />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalCustomers sx={{ height: '100%' }} />
          </Grid>
          {/* <Grid item lg={8} md={12} xl={9} xs={12}>
            <Sales />
          </Grid> */}
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
