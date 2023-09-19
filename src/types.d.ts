//La interfas es mas facil de extender que el 'type'
export interface Todo {
    id: string
    title: string
    completed: boolean
}


//es la interfas 'Todo' en un array
export type ListOfTodos = Todo[];
