export type TodoType = {
    content: string,
    createdAt: string,
    id: string,
    title: string,
    updateAt: string
}

export type modalStateType = {
    modalStateFunc(type: string): void
    modalState: string
}


export type modalTypeFunc = {
    modalTypeFunc(type: string): void
}