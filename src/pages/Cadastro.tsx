import Button from "../components/Button";
import Input from "../components/Input";


export default function Cadastro(){
    return(
        <div className="cadastro-container">
      <h1>Cadastro</h1>
         <form>
            <Input label="Nome" placeholder="Maria J. dos Santos" />
            <Input label="E-mail" placeholder="m_santos@exemple.com" />
            <Input label="Password" placeholder="******" />
           <Button text="Cadastrar" />
         </form>
        </div>
    )
}