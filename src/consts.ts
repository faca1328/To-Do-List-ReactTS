//Que filtros vamos a tener?
export const TODO_FILTER = {
    //lo que esta en rojo es la 'key' y en verde es el valor
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const; // 'as const' is used to make sure the enum is immutable (es solo de lectura, no es modificable)


//utiliza los valores del objeto TODO_FILTER para generar objetos que contienen información adicional sobre cada filtro. 
export const FILTERS_BTNS = {
    //claves q se obtienen del objeto TODO_FILTER ("propiedades de objeto computadas").
    [TODO_FILTER.ALL]: {
        //definimos/asosiamos propiedades especificar relacionadas a la key del TODO_FILTER.
        literal: 'All',
        href: `/?filter=${TODO_FILTER.ALL}`
    },
    //utilizamos la KEY
    [TODO_FILTER.ACTIVE]: {
        literal: 'Active',
        href: `/?filter=${TODO_FILTER.ACTIVE}`
    },
    [TODO_FILTER.COMPLETED]: {
        literal: 'Completed',
        href: `/?filter=${TODO_FILTER.COMPLETED}`
    }
  }as const