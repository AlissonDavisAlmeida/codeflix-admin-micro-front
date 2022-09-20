import {
  ChangeEvent, ChangeEventHandler, FormEvent, useState,
} from 'react';
import {
  Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Link, Paper, Switch, TextField, Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Category, selectCategory, updateCategory } from './categorySlice';
import { CategoryForm } from './components/CategoryForm';

export const EditCategory = () => {
  const { id } = useParams();

  const [isDisabled, setIsDisabled] = useState(false);

  const category = useAppSelector((state) => selectCategory(state, id));
  const dispatch = useAppDispatch();

  const [categoryState, setCategoryState] = useState<Category>(category as Category);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(updateCategory(categoryState));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCategoryState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleToogle = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCategoryState((prevState) => ({ ...prevState, [name]: checked }));
  };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>

        {/*  <Box p={2}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    required
                    name="name"
                    label="Name"
                    value={categoryState.name}
                    disabled={isDisabled}
                    onChange={handleChange}
                  />

                </FormControl>

              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    required
                    name="description"
                    label="Description"
                    value={categoryState.description}
                    disabled={isDisabled}
                    onChange={handleChange}
                  />

                </FormControl>

              </Grid>

              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={(
                      <Switch
                        name="is_active"
                        color="secondary"
                        onChange={handleToogle}
                        checked={categoryState.is_active}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                    )}
                    label="Active"

                  />

                </FormGroup>

              </Grid>
              <Grid item xs={12}>
                <Box display="flex" gap={2}>
                  <Button
                    variant="contained"
                    component={Link}
                    href="/categories"
                  >
                    Back
                  </Button>

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={isDisabled}
                  >
                    Save
                  </Button>
                </Box>

              </Grid>

            </Grid>
          </form>
        </Box>
 */}
        <CategoryForm
          category={categoryState}
          isDisabled={isDisabled}
          isLoading={false}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onToogle={handleToogle}
        />
      </Paper>
    </Box>
  );
};
