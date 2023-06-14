export default (userFormData) => {
  if (Object.values(userFormData).some((v) => !v)) return false;

  return true;
};
