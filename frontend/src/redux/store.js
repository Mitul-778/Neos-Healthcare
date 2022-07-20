import {
    legacy_createStore as creatStore,
    applyMiddleware,
  } from "redux";
  
  import thunk from "redux-thunk";
  import { composeWithDevTools } from "redux-devtools-extension";
  import { todoReducer } from "./todo/reducer";
  
  export const store = creatStore(
    todoReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );