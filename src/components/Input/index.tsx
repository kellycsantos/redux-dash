// import { forwardRef } from "react"
// import { IInput } from "./IInput"
// import './index.scss'
// const Input = forwardRef<HTMLInputElement, IInput>(
//     ({ change, name, label, placeholder }, ref) => {
//         return (
//             <>
//                 <label>{label}</label>
//                 <input type="text" name={name} placeholder={placeholder}
//                     onChange={change}
//                     ref={ref} // Passa o ref diretamente
//                 />
//             </>
//         )
//     })


//     export default Input;

import { forwardRef } from "react";
import { IInput } from "./IInput";
import './index.scss';

const Input = forwardRef<HTMLInputElement, IInput>(
    ({ change, name, label, placeholder, type, ...rest }, ref) => {
        return (
            <>
                <label>{label}</label>
                <input
                    type={type }
                    name={name}
                    placeholder={placeholder}
                    onChange={change}
                    ref={ref} // Ref passado diretamente aqui
                    {...rest}
                />
            </>
        );
    }
);

export default Input;