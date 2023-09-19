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

export function App() {

  const [todos, setTodos] = useState(mockTodo)

  //entre <> pongo los valores q puede tener y entre () pongo el valor dentro de los <> con el que comienza.       <> = 'estado generico'
  const [filterSelected, setFilterSelected] = useState<typeof TODO_FILTER[keyof typeof TODO_FILTER]>(TODO_FILTER.ALL)


  const handleFilterChange = (filter: typeof TODO_FILTER[keyof typeof TODO_FILTER]) => {
    setFilterSelected(filter)  
  }

  const activeCount = todos.filter(todo => todo.completed === false).length

  const completedCount = todos.length - activeCount


  //aca activo el filtro y lo renderizo con el componente <Todo>
  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTER.ACTIVE) return !todo.completed 
    if (filterSelected === TODO_FILTER.COMPLETED) return todo.completed 
    return todo})



  //id:Todo['id'] => hace referencia al tipo de elemento 'id' dentro de la interfas que exporto de 'Todo'. 
  //Sirve por si hay algun cambio, poder haverlo de forma global modificando una cosa sola.
  const handleRemove = (id: Todo['id']) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleRemoveAll = () => {
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


  const handleEditTitle = (id: Todo['id'], title: Todo['title']) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
        ...todo,
          title
        }
      }
      return todo
    }) 
    setTodos(newTodos) }


  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>

      <Todos todos={filteredTodos} handleRemove={handleRemove} onToggleClick={handleCompleted} handleEditTitle/>

      <Footer 
      filterSelected={filterSelected} 
      handlefilterChange={handleFilterChange} 
      activeCount={activeCount} 
      completedCount={completedCount} 
      onClearCompleted={handleRemoveAll}/>
      
      
      </div>
  )
}


