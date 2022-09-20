import { ChangeEvent, FormEvent, useState } from 'react';
import {
  Box, Paper, Typography,
} from '@mui/material';
import { Category, createCategory } from './categorySlice';
import { CategoryForm } from './components/CategoryForm';
import { useAppDispatch } from '../../app/hooks';

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
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(createCategory(category));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCategory((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleToogle = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCategory((prevState) => ({ ...prevState, [name]: checked }));
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
