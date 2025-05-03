import { toast, ToastPosition } from "react-toastify";

class ToastUtils {
  static success(message: string, position: ToastPosition = "top-right"): void {
    toast.success(message, { position });
  }

  static error(message: string, position: ToastPosition = "top-right"): void {
    toast.error(message, { position });
  }

  static info(message: string, position: ToastPosition = "top-right"): void {
    toast.info(message, { position });
  }

  static warning(message: string, position: ToastPosition = "top-right"): void {
    toast.warning(message, { position });
  }
}

export default ToastUtils;