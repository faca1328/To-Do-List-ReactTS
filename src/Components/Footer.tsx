
import { TODO_FILTER } from "../consts";
import { Filters } from "./Filters"


interface Props {
    activeCount: number;
    completedCount: number;
    filterSelected: typeof TODO_FILTER[keyof typeof TODO_FILTER];
    onClearCompleted: () => void;
    handlefilterChange: (filter: typeof TODO_FILTER[keyof typeof TODO_FILTER]) => void;

}


export const Footer: React.FC<Props> = (
    { completedCount, activeCount=0, filterSelected, handlefilterChange, onClearCompleted}
    ) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> item left
            </span>

            <Filters
                filterSelected={filterSelected}
                onFilterChange={handlefilterChange}
            />

            {completedCount>0 && (
                <button
                    className="clear-completed"
                    onClick={onClearCompleted}
                >
                    Clear completed
                </button>
            )}
        </footer>
    )
}

