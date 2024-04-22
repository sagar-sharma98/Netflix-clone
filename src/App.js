import { createContext, useReducer } from "react";
import "./App.css";
import AllRoutes from "./pages/AllRoutes";

export const loginAuth = createContext();
const initialState = {
  login: false,
}

export const LoginSuccess =(value)=> {
  return {
      payload : value,
  }
}

const reducer = (state, action) => {
  return{
    ...state,
    login: action.payload,
  };
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <loginAuth.Provider value={{state, dispatch}}>
        <AllRoutes />
      </loginAuth.Provider>
    </div>
  );
}

export default App;
