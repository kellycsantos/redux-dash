export interface IButton{
    text: string;
    icon? : string;
    type? : "button" | "reset" | "submit" | undefined;
    click?: (e : any) => void
 }