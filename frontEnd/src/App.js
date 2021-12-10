import 'react-toastify/dist/ReactToastify.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './contexts/auth';

import Routes from './routes';

const mdTheme = createTheme();

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={mdTheme}>
          <CssBaseline />
          <ToastContainer autoClose={3000} />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
