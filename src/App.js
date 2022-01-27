import 'react-perfect-scrollbar/dist/css/styles.css';
import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';
import { useAuth } from './contexts/auth';

const App = () => {
  const auth = useAuth();
  const content = useRoutes(routes);

  useEffect(() => {
    // Run! Like go get some data from an API.
    // auth.auth('cukro', 'x');
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {content}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
