export const GET_TODO = "GET_TODO";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FAILURE = "FAILURE";

export const getTodo = (payload) => {
  return {
    type: GET_TODO,
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const failure = (payload) => {
  return {
    type: FAILURE,
    payload,
  };
};

export const getTodoList = () => {
  return (dispatch) => {
    fetch("http://localhost:5000/todos")
      .then((response) => response.json())
      .then((data) => {
        dispatch(getTodo(data));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };
};

export const addATodo = (todoData) => {
  return (dispatch) => {
    dispatch(addTodo(todoData));
    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getTodo(data));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };
};

export const deleteATodo = (todoData) => {
  return (dispatch) => {
    dispatch(deleteTodo(todoData));
    fetch(`http://localhost:5000/todos/${todoData.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getTodo(data));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };
};

export const updateATodo = (todoData) => {
  return (dispatch) => {
    dispatch(updateTodo(todoData));
    fetch(`http://localhost:5000/todos/${todoData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getTodo(data));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };
};
