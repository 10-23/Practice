import { useState } from "react";

const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setValue(initialValue);
  };

  return { value, handleChange, handleReset };
};

export default useForm;
