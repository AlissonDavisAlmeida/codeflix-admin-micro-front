import {
  Box, Button, Link,
} from '@mui/material';
import { GridRowsProp, DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAppSelector } from '../../app/hooks';
import { selectCategories } from './categorySlice';

export const ListCategory = () => {
  const categories = useAppSelector(selectCategories);

  const rows: GridRowsProp = categories.map((category) => {
    return {
      id: category.id,
      name: category.name,
      description: category.description,
    };
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'description', headerName: 'Description', width: 200 },
  ];

  return (

    <Box
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4,
      }}
    >

      <Box
        display="flex"
        justifyContent="flex-end"
        sx={{
          mt: 4,
          mb: 4,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          href="/categories/create"
        >
          New Category
        </Button>
      </Box>

      {/* {categories.map((category) => (
        <Typography key={category.id}>{category.name}</Typography>
      ))} */}
      <div style={{
        width: '100%',
      }}
      >

        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          rowsPerPageOptions={[2, 10, 20, 50, 100]}
        />
      </div>
    </Box>
  );
};
