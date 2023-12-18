import react from 'react';
import { useForm } from 'react-hook-form';

export const Form=()=>{
    const {register,handleSubmit}=useForm()
    const onSubmit=(data)=>{
        console.log(data)

    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Enter your name'{...register("fullName")}></input>
            <input type="text" placeholder='Email'{...register("Email")}></input>
            <input type="text" placeholder='Age'{...register("age")}></input>
            <input type="text" placeholder='Password'{...register("password")}></input>
            <input type='text' placeholder='Confirm Password'{...register("confirm password")}></input>
        </form>
    )
}