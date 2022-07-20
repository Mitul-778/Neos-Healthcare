import { useDispatch, useSelector } from "react-redux";
import { deleteATodo } from "../redux/todo/action";

export const AllTodo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((store) => store.todo);
  console.log(todo);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        {todo?.map((e) => (
          <div style={{"display":"flex","justifyContent":"center"}}>
            <p>{e.title}</p>
            <p>
              {e.status}
            </p>
            <button
              onClick={() => dispatch(deleteATodo(e.id))}
            >
              ✗
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};