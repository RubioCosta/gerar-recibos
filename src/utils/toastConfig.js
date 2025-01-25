import { toast } from 'react-toastify';

const configDefault = {
  position: "bottom-center",
  autoClose: 5000,
  pauseOnHover: false,
  theme: "light",
  hideProgressBar: false,
}

const toastTypes = {
  warning: toast.warning,
  error: toast.error,
  info: toast.info,
  success: toast.success
}

export default function showToast(type, message, config = {}){
  if (!toastTypes[type]) throw new Error("Type toast não identificado!");

  return toastTypes[type](message, { ...configDefault, ...config })
}