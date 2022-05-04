import { useState } from "react";

export default function useForm({initialValues, validate}){

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState(initialValues);
  
    const handleChange = e => {
      const fieldName = e.target.getAttribute('name');
      const {value} = e.target;
      const newValues = {
        ...values,
        [fieldName]: value,
      };
      setValues(newValues);
    }
    
    const validateValues = () => {
      setErrors(validate);
    }
  
    return {
      values,
      handleChange,
      errors,
      validateValues,
    }
  }