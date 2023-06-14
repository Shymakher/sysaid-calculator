import InputField from "../../../../components/InputField/InputField";
import Button from "../../../../components/Button/Button";

import useFormState from "../../hooks/useFormData";
import useSubmitForm from "../../hooks/useSubmitForm";

import "./LoginForm.css";

const LoginForm = () => {
  const { userFormData, handleUpdateFormData } = useFormState();
  const { userName, email } = userFormData;

  const { submitButtonTitle, errorMessage, handleSubmit } =
    useSubmitForm("Login");

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e, userFormData)}>
      <InputField
        label="User Name:"
        inputKey="userName"
        type="text"
        value={userName}
        onChange={handleUpdateFormData}
        className="userName"
      />

      <InputField
        label="Email:"
        inputKey="email"
        type="email"
        value={email}
        onChange={handleUpdateFormData}
        className="email"
      />

      {errorMessage && <div className="error">{errorMessage}</div>}

      <Button
        buttonType="submit"
        name={submitButtonTitle}
        className="submitButton"
      />
    </form>
  );
};
export default LoginForm;
