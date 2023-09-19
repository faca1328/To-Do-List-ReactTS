
import {FILTERS_BTNS , TODO_FILTER} from '../consts'


interface Props {//el tipo que vamos a seleccionar es una key seleccionada[] del TODO_FILTER
    filterSelected: typeof TODO_FILTER[keyof typeof TODO_FILTER];
                                    //accedemos al valor dentro de la key.
    onFilterChange: (filterSelected: typeof TODO_FILTER[keyof typeof TODO_FILTER]) => void
}                                   


export const Filters: React.FC<Props> = ({filterSelected, onFilterChange}) => {
  return (
    <ul className="filters">
        {
            Object.entries(FILTERS_BTNS).map(([key , {href , literal}]) => {

//extraemos el filtro fuera del return para hacer una condicion sobre una classname
                const isSelected = key === filterSelected;
                const className = isSelected ? 'selected' : '';

                return (
                    <li key={key}>
                        <a className={className} href={href} 
                        onClick={(e) => {
                            e.preventDefault();

                            //Aca sucede el filtro seleccionado.
                            onFilterChange(key as typeof TODO_FILTER[keyof typeof TODO_FILTER])}}>
                            {literal}
                        </a>
                    </li>
                )
            })
        }
    </ul>
  )
}
