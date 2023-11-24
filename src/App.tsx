import { useState } from "react"
import { Todos } from "./Components/Todos";
import { Todo } from "./types";
import { TODO_FILTER } from "./consts";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";


// > > > > CSS styles FROM:  https://github.com/tastejs/todomvc-app-css    < < < < < < <


const mockTodo = [
  {
    id: '1',
    title: 'Test 1',
    completed: false
  },
  {
    id: '2',
    title: 'Test 2',
    completed: false
  },
  {
    id: '3',
    title: 'Test 3',
    completed: false
  }
]

//no recive props '<>' porque solo estamos diciendo lo que devuelve; no esta reciviendo nada.
export function App():JSX.Element {

  const [todos, setTodos] = useState<Array<Todo>>(mockTodo)

  //entre <> pongo los valores q puede tener y entre () pongo el valor dentro de los <> con el que comienza.       <> = 'estado generico'
  const [filterSelected, setFilterSelected] = useState<typeof TODO_FILTER[keyof typeof TODO_FILTER]>(TODO_FILTER.ALL)
                                            //solo pueda tener valores válidos de TODO_FILTER



                                                      //selecciona los valores dentro de la key dentro de:
                                                             //selecciona la cadena dentro de TODO_FILTER
  const handleFilterChange = (filter: typeof TODO_FILTER[keyof typeof TODO_FILTER]) => {
    setFilterSelected(filter)  
  }

  const activeCount = todos.filter(todo => todo.completed === false).length

  const completedCount = todos.length - activeCount


  //aca activo el filtro y lo renderizo con el componente <Todo>. Filtro lo que esta en el estado 'todos' segun lo que este en el estado del 'filterSelected'.
  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTER.ACTIVE) return !todo.completed 
    if (filterSelected === TODO_FILTER.COMPLETED) return todo.completed 
    return todo})



  //id:Todo['id'] => hace referencia al tipo de elemento 'id' dentro de la interfas que exporto de 'Todo'. 
  //Sirve por si hay algun cambio, poder hacerlo de forma global modificando una cosa sola.
  const handleRemove = (id: Todo['id']) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    // en newTodos quedan todos los id que no se hayan seleccionado
    setTodos(newTodos)
  }



  const handleRemoveAll = () => {
    //filtra los todos del useState
    const newTodos = todos.filter(todo =>!todo.completed)
    setTodos(newTodos)}


  const handleCompleted = (id: Todo['id'], completed: Todo['completed']) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !completed}
        
        
      }
      return todo
    }) 
    setTodos(newTodos)
  }

  const handleAddTodo = (title: Todo['title']) => {
    const newTodos = [
    ...todos,
      {
        title,
        id: crypto.randomUUID(),
        completed: false
      }
    ]
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>

      <Todos todos={filteredTodos} handleRemove={handleRemove} onToggleClick={handleCompleted} />

      <Footer 
      filterSelected={filterSelected} 
      handlefilterChange={handleFilterChange} 
      activeCount={activeCount} 
      completedCount={completedCount} 
      onClearCompleted={handleRemoveAll}/>
      
      
      </div>
  )
}


