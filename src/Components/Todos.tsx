// me chocan los nombres de el 'type Todo' con el 'componente Todo', asi que cambio el nombre del type.

import { ListOfTodos, Todo as TodoType} from "../types"
import { Todo } from "./Todo"


//Se crea esta interfaz para poder pasar los props mas facil
interface Props {
    //Se crea este array para que pueda ser mapeado mas abajo.
    todos: ListOfTodos

    onToggleClick: (id: TodoType['id'], completed: TodoType['completed']) => void
    handleRemove: (id:TodoType['id']) => void
}



//Hay que tipar la prop porque sino TS dice que no existe.
//Tenemos que usar un FC (esto significa que la contante 'Todos' devuelve un FC) para poder indicarle a nuestro componente las formas que tienen nuestras props (<Props> son los elementos que va a usar).
export const Todos:React.FC<Props> = ({todos , handleRemove , onToggleClick}) => {
  return (
    <ul className="todo-list">
        {todos.map(todo => (
            <li key={todo.id}>
                <Todo key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} handleRemove={handleRemove} onToggleClick={onToggleClick}/>
            </li> 
        ))}
    </ul>
  )
}


