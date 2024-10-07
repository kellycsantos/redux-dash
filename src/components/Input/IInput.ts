export interface IInput {
    change ?: any,
    label: string,
    placeholder: string
    name?: string,
    type : 'text' | 'password' | 'email'
}