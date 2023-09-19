import { useState } from "react";
import { Todo } from "../types";

interface Props{
    onAddTodo: (title:Todo['title'])=> void;
}

export const CreateTodo:React.FC<Props> = ({onAddTodo}) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddTodo(inputValue);
        setInputValue('');
    }

  return (
      <form className="new-todo-form" onSubmit={handleSubmit}>
      <input type="text" onChange={(e)=> {setInputValue(e.target.value)}} className="new-todo" value={inputValue} placeholder="What do you have To Do?" autoFocus/>
      </form>
  )
}
