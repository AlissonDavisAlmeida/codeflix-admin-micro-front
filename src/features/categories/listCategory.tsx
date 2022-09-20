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
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteCategory, selectCategories } from './categorySlice';

export const ListCategory = () => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();

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
        onClick={() => dispatch(deleteCategory(params.id as string))}
      >
        <DeleteIcon />
      </IconButton>
    );
  };

  const componentProps = {
    toolbar: {
      showQuickFilter: true,
      quickFiltersProps: {
        debounceMs: 500,
      },
    },
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      renderCell: (params) => {
        return (
          <Link
            underline="none"
            href={`/categories/edit/${params.id}`}
          >
            <Typography color="primary">{params.value}</Typography>
          </Link>
        );
      },
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

      <Box sx={{ display: 'flex', height: 500 }}>
        <DataGrid
          autoHeight
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableSelectionOnClick
          rows={rows}
          rowsPerPageOptions={[2, 10, 20, 50, 100]}
          componentsProps={componentProps}
        />
      </Box>
    </Box>
  );
};
