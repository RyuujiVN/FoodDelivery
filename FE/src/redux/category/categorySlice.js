import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { API_ADMIN } from '~/api/adminApi'

const initialState = {
  currentCategory: []
}

export const fetchAddCategory = createAsyncThunk(
  'category/fetchAddCategory',
  async (data) => {
    const response = await API_ADMIN.post('/category/create', data)
    return response.data
  }
)

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(fetchAddCategory.fulfilled, (state, action) => {
      state.currentCategory = action.payload
      toast.success('Thêm loại thành công')
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = categorySlice.actions

export default categorySlice.reducer