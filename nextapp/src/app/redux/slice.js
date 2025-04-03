const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

const initialState = {
  userapidata: [],
  users:[],
};
export const fetchUserApi = createAsyncThunk("fetchUserApi", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  return data.json();
});
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
  extraReducers: (builder) => {
    builder.addCase(fetchUserApi.fulfilled, (state, action) => {
      state.isloading = false;
      state.userapidata = action.payload;
    });
  },
});

export const { addusers, removeusers } = Slice.actions;
export default Slice.reducer;
