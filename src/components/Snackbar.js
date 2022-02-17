import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useAuth } from 'src/contexts/auth';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const { alert, hideAlert } = useAuth();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    hideAlert();
  };

  return (
    <Snackbar
      open={alert.isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity={alert.severity || 'info'} sx={{ width: '100%' }}>
        {alert.msg}
      </Alert>
    </Snackbar>
  );
}
