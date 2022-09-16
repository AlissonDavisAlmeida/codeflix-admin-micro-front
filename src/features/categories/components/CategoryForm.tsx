import {
  Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Link, Switch, TextField,
} from '@mui/material';
import {
  ChangeEvent, FC, FormEvent,
} from 'react';
import { Category } from '../categorySlice';

type CategoryFormProps = {
  category: Category,
  isDisabled: boolean,
  isLoading: boolean,
  onSubmit: (event: FormEvent<HTMLFormElement>) => void,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  onToogle: (event: ChangeEvent<HTMLInputElement>) => void,
};

export const CategoryForm: FC<CategoryFormProps> = ({
  category,
  isDisabled,
  onChange,
  onSubmit,
  onToogle,
  isLoading,
}) => {
  return (
    <Box p={2}>
      <form>
        <Grid spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                required
                name="name"
                label="Name"
                value={category.name}
                disabled={isDisabled}
                onChange={onChange}
              />

            </FormControl>

          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                required
                name="description"
                label="Description"
                value={category.description}
                disabled={isDisabled}
                onChange={onChange}
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
                    onChange={onToogle}
                    checked={category.is_active}
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

  );
};
