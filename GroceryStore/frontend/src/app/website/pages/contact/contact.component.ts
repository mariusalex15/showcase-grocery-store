import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ContactService } from "../../service/contact/contact.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  constructor(
    private formBuilder: FormBuilder,
    private contact: ContactService,
    private toaster: ToastrService,
  ) {}

  contactform: FormGroup | any;

  contactWidgets = [
    {
      icon: "icon_phone",
      title: "Phone Number",
      text: "+4073521412",
    },
    {
      icon: "icon_pin_alt",
      title: "Address",
      text: "190, Baleni, Dambovita, Romania",
    },
    {
      icon: "icon_clock_alt",
      title: "Opening Hours",
      text: "Mon - Fri: 9:00 - 18:00",
    },
    {
      icon: "icon_mail_alt",
      title: "Email Address",
      text: "info@gmail.com",
    },
  ];

  ngOnInit() {
    this.forms();
  }

  forms() {
    this.contactform = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      message: ["", Validators.required],
    });
  }

  async submitForm() {
    try {
      const data = this.contactform.value;

      // {name:'',email:'',message:''}

      const response = await this.contact.createContact(data);
      if (response) {
        this.toaster.success("Message sent successfully");
      }

      // Handle the response as needed, e.g., show a success message
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error, e.g., show an error message
    }
  }
}
