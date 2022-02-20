import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

const TotalCustomers = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            POČET ZÁKAZNÍKOV
          </Typography>
          <Typography color="textPrimary" variant="h3">
            99
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: indigo[600],
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default TotalCustomers;
