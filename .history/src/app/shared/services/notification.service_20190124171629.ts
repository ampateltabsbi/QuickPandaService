import { Injectable } from "@angular/core";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";

@Injectable()
export class NotificationService {
  toastposition = "top-right";

  constructor(private toastyService: ToastyService) {}

  notify(title, msg, type) {
    this.toastposition = "top-right";
    const toastOptions: ToastOptions = {
      title: "Success",
      msg: "Record successfully save.",
      showClose: true,
      timeout: 5000,
      theme: "bootstrap",
      onAdd: (toast: ToastData) => {
        console.log("Toast " + toast.id + " has been added!");
      },
      onRemove: (toast: ToastData) => {
        console.log("Toast " + toast.id + " has been added removed!");
      }
    };
    this.toastyService.success(toastOptions);
  }
}
