import { useState } from 'react';

const useForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInput = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const reset = (newForm = initialState) => {
    setFormValues(newForm);
  };

  return {
    formValues,
    handleInput,
    reset,
  };
};

export default useForm;
