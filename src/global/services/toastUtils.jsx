import { toast } from "react-toastify";

class ToastUtils {
  static success(message, position = "top-right") {
    toast.success(message, { position });
  }

  static error(message, position = "top-right") {
    toast.error(message, { position });
  }

  static info(message, position = "top-right") {
    toast.info(message, { position });
  }

  static warning(message, position = "top-right") {
    toast.warning(message, { position });
  }
}

export default ToastUtils;