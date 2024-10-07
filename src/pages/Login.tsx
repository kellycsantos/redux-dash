import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';

export default function Login(){
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch()
    const userData = useSelector((state: any) => state.user)

    function isLogin(){
        console.log('Login sendo realizado')
        console.log('Pegando os dados do state',userData)
    }
    return(
        <div className='login-container'>
            <form onSubmit={handleSubmit(isLogin)}>
                <Input placeholder="email" label="Email" name="email"
                 type='email'
                 />
                <Input placeholder="password" label="Password" name="password"
                 type='password'
                 />
                <Button type='submit' text='Login'/>
            </form>

            <ul>
                {
                    [userData].map((user, id)  =>
                        <li key={id}>{user[0]?.name}</li>
                    )
                }
            </ul>
        </div>
    )
}