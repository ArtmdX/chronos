import { toast } from 'react-toastify';
import { Dialog } from '../Dialog';

export const showMessage = {
  success: (msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  info: (msg: string) => toast.info(msg),
  warning: (msg: string) => toast.warning(msg),
  warn: (msg: string) => toast.warn(msg),
  dismiss: () => toast.dismiss(),
  confirm: (data: string, onClosing: (confirmation: boolean) => void) =>
    toast(Dialog, {
      onClose: confirmation => {
        if (confirmation) return onClosing(true);
        return onClosing(false);
      },
      data,
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
    }),
};
