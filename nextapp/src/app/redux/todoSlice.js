const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  todolist: [],
};
const Slice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addtask: (state, action) => {
      const data = { id: nanoid(), name: action.payload };
      state.todolist.push(data);
    },
  },
});

export const { addtask } = Slice.actions;
export default Slice.reducer;
