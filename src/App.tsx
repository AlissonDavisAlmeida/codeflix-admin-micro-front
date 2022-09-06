import { ThemeProvider, Box } from '@mui/system';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Layout } from './components/layout/Layout';
import { appTheme } from './config/theme';
import { CreateCategory, EditCategory } from './features/categories';

import { ListCategory } from './features/categories/listCategory';

function App() {
  return (

    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: '100vh',
          backgroundColor: (theme) => theme.palette.grey[900],
          color: '#fff',
        }}
      >
        <Header />
        <Layout>

          <Routes>
            <Route path="/" element={<ListCategory />} />
            <Route path="/categories" element={<ListCategory />} />
            <Route path="/categories/create" element={<CreateCategory />} />
            <Route path="/categories/edit/:id" element={<EditCategory />} />

            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
