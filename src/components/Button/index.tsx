import { IButton } from "./IButton";

export default function Button({text, icon, click} : IButton) {
    return (
        <>
            <button onClick={click}>
                <img src={icon}/>
                {text}</button>
        </>
    )
}