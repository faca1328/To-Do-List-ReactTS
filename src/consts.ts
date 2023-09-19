export const TODO_FILTER = {
    //lo que esta en rojo es la 'key' y en verde es el valor
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const; // 'as const' is used to make sure the enum is immutable (es solo de lectura, no es modificable)


export const FILTERS_BTNS = {
    [TODO_FILTER.ALL]: {
        literal: 'All',
        href: `/?filter=${TODO_FILTER.ALL}`
    },
    [TODO_FILTER.ACTIVE]: {
        literal: 'Active',
        href: `/?filter=${TODO_FILTER.ACTIVE}`
    },
    [TODO_FILTER.COMPLETED]: {
        literal: 'Completed',
        href: `/?filter=${TODO_FILTER.COMPLETED}`
    }
  }as const