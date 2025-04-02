const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  users: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
};
const Slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addusers: (state, action) => {
      const data = { id: nanoid(), name: action.payload };
      state.users.push(data);
      let userdatares = JSON.stringify(current(state.users));
      localStorage.setItem("users", userdatares);
    },
    removeusers: (state, action) => {
      const data = state.users.filter((item) => item.id !== action.payload);
      state.users = data;
    },
  },
});

export const { addusers, removeusers } = Slice.actions;
export default Slice.reducer;
