import {type Todo as TodoType } from "../types"

 
interface Props extends TodoType{

    //este 'propDrilling se puede facilitar con el useContext()
    onToggleClick: (id: TodoType['id'], completed: TodoType['completed']) => void
    handleRemove: (id: TodoType['id']) => void
}





export const Todo: React.FC<Props> = ({title,completed,handleRemove,id,onToggleClick}) => {
  return (
    <div className="view">
        <input className="toggle" type="checkbox" checked={completed}
        onChange={()=>{onToggleClick(id,completed)}} /> 
        <label> {title} </label>
        <button className="destroy" onClick={()=> {handleRemove(id)}} />

    </div>
  )
}
