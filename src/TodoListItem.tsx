import React from 'react'

interface props {
    toDo: Todo,
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<props> = ({ toDo, toggleTodo }) => {
    return (
        <li>
            <label style={{ textDecoration: toDo.complete ? 'line-through' : undefined }}>
                <input type="checkbox" checked={toDo.complete} onClick={() => {
                    toggleTodo(toDo);
                }} />{' '} {toDo.text}
            </label>
        </li>
    )
}
