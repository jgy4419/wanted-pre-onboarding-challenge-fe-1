export type TodoType = {
    content: string,
    createdAt: string,
    id: string,
    title: string,
    updateAt: string
}

export type modalPropsType = {
    modalStateFunc(type: string): void
    modalState?: string
    clickedTodo: string
}