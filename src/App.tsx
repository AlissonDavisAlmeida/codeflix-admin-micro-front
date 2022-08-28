import { Typography } from '@mui/material';
import { ThemeProvider, Box } from '@mui/system';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Layout } from './components/layout/Layout';
import { appTheme } from './config/theme';

const Home = () => {
  return (
    <Typography variant="h1" component="h1">
      Home
    </Typography>
  );
};

function App() {
  return (

    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: '100vh',
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
