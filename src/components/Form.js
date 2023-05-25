import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
export default function Form() {

    const { register, handleSubmit,  formState: { errors } } = useForm()
    const onSubmit = async (data) => {
      try {
        const formData = { ...data ,lead_types_id: ["sandbox"] };
        console.log(formData);
        const response = await axios.post('https://dashboard.omnisellcrm.com/api/store', formData);
        console.log(response.data);
        alert('Form submitted successfully!');
      } 
      catch (error) {
        console.error(error);
        alert('Form submission failed. Please try again later.');
      } 
        }
    
    
 
  
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name",{required: true,maxLength: 20})} placeholder='name' />
                    {errors.name?.type === "required" && "this field is required"}
                    <input type="text" {...register("email")} placeholder='email' />
                    {errors.email?.type === "required" && "this field  is required"}
                    <input type="text" {...register("companyname")} placeholder='company name' />
                    {errors.companyname?.type === "required" && "this field is required"}
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='phone number' />
                    {errors.mobile?.type === "required" && "this field is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <input type="text" {...register("requirement")} placeholder='requirement' />
                       {errors.requirement?.type === "required" && " this field required"}
                       <input type="text" name="lead_types_id" value="sandbox" />

                  
                    <button className='btn'>Sign In</button>
                </form>

            </div>
            <div className="col-2">
              
            </div>
        </div>
    </section>
  )
}