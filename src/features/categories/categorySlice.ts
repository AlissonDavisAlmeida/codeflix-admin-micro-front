import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Category {
  id: string
  name: string
  is_active: boolean
  created_at: string
  updated_at: string
  deleted_at: string | null
  description: string | null
}

// Define the initial state using that type with field id like uuid
const categories: Category[] = [
  {
    id: 'a2fadf9c-7b9f-4b9f-8c9f-2f8b3dcb779e',
    name: 'Category 1',
    is_active: true,
    created_at: '2021-01-01',
    updated_at: '2021-01-01',
    deleted_at: null,
    description: 'Category 1 description',
  },
  {
    id: 'a2fadf9c-7b9f-4b9f-8c9f-2f8b3dcb779f',
    name: 'Category 2',
    is_active: true,
    created_at: '2021-01-01',
    updated_at: '2021-01-01',
    deleted_at: null,
    description: 'Category 2 description',
  },
  {
    id: 'a2fadf9c-7b9f-4b9f-8c9f-2f8b3dcb779g',
    name: 'Category 3',
    is_active: true,
    created_at: '2021-01-01',
    updated_at: '2021-01-01',
    deleted_at: null,
    description: 'Category 3 description',
  },
];

const categorySlice = createSlice({
  name: 'category',
  initialState: categories,
  reducers: {

  },
});

export const selectCategories = (state: RootState) => state.category;

export default categorySlice.reducer;
