import {createSlice} from '@reduxjs/toolkit'

export const createTheme = createSlice({
    name: 'colorTheme',
    initialState: {
        value: true
    },
    reducers: {
      toggleTheme: (state, payload) => {
          console.log('clickp', payload)
          state.value = payload
      }
    }
});

export default createTheme.reducer;
export const {toggleTheme} = createTheme.actions;