import { Todo } from "../types";
import { CreateTodo } from "./CreateTodo";

interface Props{
    onAddTodo: (title:Todo['title'])=> void;
}


export const Header:React.FC<Props> = ({onAddTodo}) => {
  return (
    <header>
        <h1> <strong>To-Do</strong> List</h1>
        <CreateTodo onAddTodo={onAddTodo} />
    </header>
  )
}
