import { useState } from "react";

const useFormState = () => {
  const [userFormData, setUserFormData] = useState({ userName: "", email: "" });

  const handleUpdateFormData = (newData) =>
    setUserFormData({ ...userFormData, ...newData });

  return {
    userFormData,
    handleUpdateFormData,
  };
};

export default useFormState;
