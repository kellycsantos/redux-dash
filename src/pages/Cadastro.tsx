import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import { useDispatch } from 'react-redux'
import  {doLogin}  from '../redux/userSlice'

export default function Cadastro() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()


    function isRegistering(data : object){
        dispatch(doLogin(data))
        console.log('Fazendo login', data)
    }
    return (
        <div className="cadastro-container">
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit(isRegistering)}>
                <Input type="text"
                    label="Nome"
                    {...register('name', { required: true })}
                    name="name"
                    placeholder="Maria J. dos Santos"
                />
                <Input type="email"
                    label="E-mail"
                    {...register('email', { required: true })}
                    name="email"
                    placeholder="m_santos@exemple.com"
                />
                <Input type="password"
                    label="Password"
                    {...register('password', { required: true })}
                    name="password"
                    placeholder="******"
                />
                <Button text="Cadastrar" type="submit" />
            </form>
        </div>
    );
}