import react from 'react';
import { useForm } from 'react-hook-form';

export const Form=()=>{
    const {register,handleSubmit}=useForm()
    const onSubmit=(data)=>{
        console.log(data)

    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Enter your name'></input>
            <input type="text" placeholder='Email'></input>
            <input type="text" placeholder='Age'></input>
            <input type="text" placeholder='Password'></input>
            <input type='text' placeholder='Confirm Password'></input>
        </form>
    )
}