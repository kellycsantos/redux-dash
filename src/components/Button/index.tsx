import { IButton } from "./IButton";

export default function Button({text, icon, type, click} : IButton) {
    return (
        <>
            <button onClick={click} type={type}>
                <img src={icon}/>
                {text}</button>
        </>
    )
}