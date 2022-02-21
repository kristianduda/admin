import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterMoment';

const App = () => {
  const content = useRoutes(routes);

  return (
    <StyledEngineProvider injectFirst>
      <LocalizationProvider dateAdapter={DateAdapter}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {content}
      </ThemeProvider>
      </LocalizationProvider>
    </StyledEngineProvider>
  );
};

export default App;
