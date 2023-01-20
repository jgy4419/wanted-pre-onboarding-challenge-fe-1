export interface PostTodoType {
    id?: string,
    title: string,
    content: string
}

export interface modalStateFuncType {
    modalStateFunc: (type: string) => void
}

export interface IEditProps {
    todoClickedData: PostTodoType,
    editStateFunc(): void
}