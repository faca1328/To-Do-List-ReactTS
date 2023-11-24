// Utilizamos una constante para poder mapear el filtro y que las modificaciones sean externas (al componente) y mas faciles.
import {FILTERS_BTNS , TODO_FILTER} from '../consts'


interface Props {
    
    //el filterSelected tiene que ser uno de los filtros del TODO_FILTER.
    //el tipo que vamos a seleccionar es una key seleccionada[] del TODO_FILTER
    filterSelected: typeof TODO_FILTER[keyof typeof TODO_FILTER];
                                    //accedemos al valor dentro de la key.
    onFilterChange: (filterSelected: typeof TODO_FILTER[keyof typeof TODO_FILTER]) => void
}                                   


export const Filters: React.FC<Props> = ({filterSelected, onFilterChange}) => {
  return (
    <ul className="filters">
        {//mapea los botones dentro de Filters_btns y selecciona el filtro seleccionado.
            Object.entries(FILTERS_BTNS).map(([key , {href , literal}]) => {
            //sirve para iterar objetos (el map mapea arrays). > transforma el objto en un array.

                //extraemos el filtro fuera del return para hacer una condicion sobre una classname
                                 //key del BTN > ver si coincide con el filtro seleccionado.
                const isSelected = key  === filterSelected;
                //esto resalta el filtro seleccionado.
                const className = isSelected ? 'selected' : '';

                return (
                    <li key={key}>
                        <a className={className} href={href} 
                        onClick={(e) => {
                            e.preventDefault();
                            
                            //Aca sucede el filtro cada vez q se selecciona.
                            //Recive el valor de la Key del filtro seleccionado. ('active' o 'completed')                            
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
