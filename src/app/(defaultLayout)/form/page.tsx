"use client";
import MyDynamicFormInput from "@/components/form/MyFormDynamicInput";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import React from "react";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";

const defaultValue = {
  name: "Jon",
  category: [{ value: "" }],
};

const FromPage = () => {


  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <MyFormWrapper onSubmit={onSubmit} defaultValues={defaultValue}>
        <MyFormInput name="name" type="text" placeholder="Name" />


        <MyDynamicFormInput
          name="category" // This will be used dynamically for the field
          label="Categories"
          placeholder="Enter category"
        />

        <button type="submit" className="bg-green-300 px-20 py-4"> 
          Submit
        </button>
      </MyFormWrapper>
    </div>
  );
};

export default FromPage;
