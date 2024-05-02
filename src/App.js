import { createContext, useReducer } from "react";
import "./App.css";
import AllRoutes from "./pages/AllRoutes";

export const loginAuth = createContext();
const initialState = {
  login: false,
  movies: [],
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
