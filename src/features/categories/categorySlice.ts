import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Category {
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
    is_active: false,
    created_at: '2021-01-07',
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
    updateCategory(state, action) {
      const index = state.findIndex((category) => category.id === action.payload.id);
      state[index] = action.payload;
    },
    createCategory(state, action) {
      state.push(action.payload);
    },
    deleteCategory(state, action) {
      const index = state.findIndex((category) => category.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const selectCategories = (state: RootState) => state.category;
export const selectCategory = (state: RootState, id: string | undefined): Category | Omit<Category, 'created_at' | 'updated_at'> => {
  const categoryFind = state.category.find((category) => category.id === id);

  // eslint-disable-next-line consistent-return
  return categoryFind || {
    id: '',
    name: '',
    description: '',
    is_active: false,
    deleted_at: null,
  };
};

export const { updateCategory, createCategory, deleteCategory } = categorySlice.actions;

export default categorySlice.reducer;
