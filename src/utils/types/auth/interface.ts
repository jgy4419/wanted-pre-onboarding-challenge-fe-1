export interface IAuthPostType {
    email: string,
    password: string
}

export interface ILoginCheck {
    email: string,
    password: string,
    passwordConfirmed: string
}