import { ChangeEventHandler, useState } from 'react';
import {
  Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Link, Paper, Switch, TextField, Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectCategory } from './categorySlice';

export const EditCategory = () => {
  const { id } = useParams();

  const [isDisabled, setIsDisabled] = useState(false);

  const category = useAppSelector((state) => selectCategory(state, id));

  const handleChange = (event: any) => {

  };

  const handleToogle = (event: any) => {

  };
  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>

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
                    value={category.description}
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

      </Paper>
    </Box>
  );
};
