const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
};
const Slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addusers: (state, action) => {
      const data = { id: nanoid(), name: action.payload };
      state.users.push(data);
    },
  },
});

export const { addusers } = Slice.actions;
export default Slice.reducer;
