import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box, Button, IconButton, Link, Typography,
} from '@mui/material';
import {
  GridRowsProp,
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from '@mui/x-data-grid';
import { useAppSelector } from '../../app/hooks';
import { selectCategories } from './categorySlice';

export const ListCategory = () => {
  const categories = useAppSelector(selectCategories);

  const rows: GridRowsProp = categories.map((category) => {
    return {
      id: category.id,
      name: category.name,
      description: category.description,
      is_active: category.is_active,
      createdAt: new Date(category.created_at).toLocaleDateString('en-US'),
    };
  });

  const renderIsActiveCell = (params: GridRenderCellParams<any, any, any>) => {
    return (
      <Typography color={params.value ? 'primary' : 'secondary'}>
        {params.value ? 'Active' : 'Inactive'}
      </Typography>
    );
  };

  const renderActionsCell = (params: GridRenderCellParams<any, any, any>) => {
    return (
      <IconButton
        color="secondary"
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    );
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'is_active',
      headerName: 'Active',
      flex: 1,
      type: 'boolean',
      renderCell: renderIsActiveCell,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      flex: 1,
    },
    {
      field: 'id',
      headerName: 'Actions',
      flex: 1,
      renderCell: renderActionsCell,
    },
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

      <div style={{
        width: '100%',
      }}
      >

        <DataGrid
          components={{ Toolbar: GridToolbar }}
          rows={rows}
          disableColumnSelector
          disableColumnFilter
          disableDensitySelector
          disableSelectionOnClick
          columns={columns}
          autoHeight
          rowsPerPageOptions={[2, 10, 20, 50, 100]}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFiltersProps: {
                debounceMs: 500,
              },
            },
          }}
        />
      </div>
    </Box>
  );
};
