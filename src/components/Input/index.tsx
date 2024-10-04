import { IInput } from "./IInput"
import './index.scss'
export default function Input({ change, label, placeholder }: IInput) {
    return (
        <>
            <label>{label}</label>
            <input type="text" placeholder={placeholder}
             onChange={change} />
        </>
    )
}