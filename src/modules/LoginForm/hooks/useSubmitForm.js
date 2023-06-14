import { useState } from "react";
import { useNavigate } from "react-router-dom";

import isFormDataValid from "../helpers/isFormDataValid";

const useSubmitForm = (initialButtonState) => {
  const navigate = useNavigate();
  const [submitButtonTitle, setSubmitButtonTitle] =
    useState(initialButtonState);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e, userFormData) => {
    e.preventDefault();

    if (isFormDataValid(userFormData)) {
      setSubmitButtonTitle("Loading...");

      setTimeout(() => {
        localStorage.setItem("user", JSON.stringify(userFormData));
        navigate("/", { replace: true });
      }, 1000);
    } else {
      setErrorMessage("All fields are required!");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return {
    submitButtonTitle,
    errorMessage,
    handleSubmit,
  };
};

export default useSubmitForm;
