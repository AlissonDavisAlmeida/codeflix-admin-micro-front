import { useState } from 'react';
import {
  Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Link, Paper, Switch, TextField, Typography,
} from '@mui/material';
import { Category } from './categorySlice';
import { CategoryForm } from './components/CategoryForm';

export const CreateCategory = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const [category, setCategory] = useState<Category>({
    id: '',
    name: '',
    description: '',
    is_active: false,
    created_at: '',
    deleted_at: null,
    updated_at: '',
  });

  const handleChange = (event: any) => {

  };

  const handleToogle = (event: any) => {

  };

  const handleSubmit = (event: any) => {

  };
  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Category</Typography>
          </Box>
        </Box>

        <CategoryForm
          category={category}
          isDisabled={isDisabled}
          onChange={handleChange}
          onToogle={handleToogle}
          isLoading={false}
          onSubmit={handleSubmit}

        />
      </Paper>
    </Box>
  );
};
