import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/auth';
import { init } from 'kd-web';
import config from './config.json';
import { DataProvider } from './contexts/data';
import { CukroProvider } from './contexts/cukro';
init(config);

ReactDOM.render(
  <AuthProvider>
    <CukroProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CukroProvider>
  </AuthProvider>,
  document.getElementById('root')
);
