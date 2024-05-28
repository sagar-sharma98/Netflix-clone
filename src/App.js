import { createContext, useReducer } from "react";
import "./App.css";
import AllRoutes from "./pages/AllRoutes";

export const loginAuth = createContext();
const initialState = {
  login: false,
  movies: [],
  wishList: [],
};

export const LoginSuccess = (value) => {
  return {
    type: "LOGIN",
    payload: value,
  };
};

export const addMovies = (value) => {
  console.log(value);
  return {
    type: "MOVIES",
    payload: value,
  };
};

export const addWishList = (value) => {
  return {
    type: "ADD_WISHLIST",
    payload: value,
  };
};

export const removeWishList = (value) => {
  return {
    type: "REMOVE_WISHLIST",
    payload: value,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: action.payload,
      };

    case "MOVIES":
      return {
        ...state,
        movies: action.payload,
      };

    case "ADD_WISHLIST":
      const item = state.movies.find((movie) => movie._id === action.payload);
      const findItem = state.wishList.find((movie) => movie._id === action.payload);
      console.log(item);
      
      if(!findItem) return{
        ...state,
        wishList: [...state.wishList, item],
      }
      return state;

    case "REMOVE_WISHLIST":
      const items = state.wishList.filter((movie) => movie._id !== action.payload);
      return {
        ...state,
        wishList:[...items],
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <loginAuth.Provider value={{ state, dispatch }}>
        <AllRoutes />
      </loginAuth.Provider>
    </div>
  );
}

export default App;
