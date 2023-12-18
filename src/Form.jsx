import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Name is required"),
    Email: yup.string().email().required("Email is required"),
    age: yup.number().positive().integer().min(18).required("Age is required"),
    password: yup.string().min(4).max(20).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const { register, handleSubmit ,formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Enter your name"
        {...register("fullName")}
      />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email" {...register("Email")} />
      <p>{errors.Email?.message}</p>
      <input type="number" placeholder="Age" {...register("age")} />
      <p>{errors.age?.message}</p>
      <input type="text" placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>
      <input
        type="text"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      <p>{errors.password?.message}</p>
      <input type="submit" value="Submit" />
    </form>
  );
};
