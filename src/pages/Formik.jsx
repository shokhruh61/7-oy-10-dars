import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Ism kamida 3 harf bo‘lishi kerak.")
    .required("Ism kiritish majburiy."),
  email: yup
    .string()
    .email("To‘g‘ri email kiriting.")
    .required("Email kiritish majburiy."),
  password: yup
    .string()
    .min(8, "Parol kamida 8 ta belgidan iborat bo‘lishi kerak.")
    .matches(/[a-zA-Z]/, "Parolda harflar bo‘lishi kerak.")
    .matches(/\d/, "Parolda raqamlar bo‘lishi kerak.")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Parolda maxsus belgilar bo‘lishi kerak.")
    .required("Parol kiritish majburiy."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Parol bir xil bo‘lishi kerak.")
    .required("Parolni tasdiqlash majburiy."),
});

const Formik = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Ro‘yxatdan o‘tish</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Ism</label>
          <input
            type="text"
            {...register("name")}
            className={`w-full px-3 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email")}
            className={`w-full px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Parol</label>
          <input
            type="password"
            {...register("password")}
            className={`w-full px-3 py-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
       
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Parolni tasdiqlash</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className={`w-full px-3 py-2 border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>
       
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default Formik;
