const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
};
const Slice = createSlice({
  initialState,
  reducers: {
    adduser: (state, action) => {
      const data = { id: nanoid(), name: action.name };
      state.users.push(data);
    },
  },
});

export const { adduser } = slice.actions;
export default Slice.reducer;
