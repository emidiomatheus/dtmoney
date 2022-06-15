import { Container } from "./styles";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastOptions } from "react-toastify";

interface ToastProps {
  type: 'success' | 'warn' | 'error' | 'info';
  message: string
}

const toastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  icon: false,
}

export function showToast({ type, message }: ToastProps) {
  switch (type) {
    case 'success':
      toast.success(message, toastOptions)
      break;
    case 'warn':
      toast.warn(message, toastOptions)
      break
    case 'error':
      toast.error(message, toastOptions)
      break
    default:
      toast.info(message, toastOptions);
      break
  }
}

export function Toast() {
  return (
    <Container />
  )
}