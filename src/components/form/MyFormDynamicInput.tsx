// MyDynamicFormInput.tsx
"use client";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils"; // Utility function for conditional classNames

interface MyDynamicFormInputProps {
  name: string; // Dynamic field name
  label?: string;
  placeholder?: string;
  required?: boolean;
  inputClassName?: string; // Custom class for input
  labelClassName?: string; // Custom class for label
}

const MyDynamicFormInput = ({
  name,
  label,
  placeholder,
  required = true,
  inputClassName,
  labelClassName,
}: MyDynamicFormInputProps) => {
  const { control } = useFormContext(); // Get form context and control
  const { append, fields } = useFieldArray({ control, name }); // Dynamically manage fields

  // Handle input field changes
  const handleAdd = () => {
    append({ value: "" }); // Append an empty field when "Add" is clicked
  };

  return (
    <div className="flex flex-col gap-4">
      {label && (
        <label htmlFor={name} className={cn("text-sm font-medium", labelClassName)}>
          {label}
        </label>
      )}

      {/* Render dynamic fields */}
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col gap-2">
          <Controller
            name={`${name}[${index}].value`} // Use dynamic name for fields
            control={control}
            defaultValue={field.value}
            rules={required ? { required: `${label || "This field"} is required` } : {}}
            render={({ field }) => (
              <div className="relative">
                <input
                  {...field}
                  id={name}
                  placeholder={placeholder}
                  type="text"
                  className={cn(
                    "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2",
                    inputClassName
                  )}
                />
                <div className="h-4 my-1">
                  {field?.error && (
                    <small className="text-red-500 text-xs">{field?.error.message}</small>
                  )}
                </div>
              </div>
            )}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={handleAdd}
        className="bg-green-300 px-6 py-2 mt-2"
      >
        Add {label || "Field"}
      </button>
    </div>
  );
};

export default MyDynamicFormInput;
