import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  messageForm = new FormGroup({
    name: new FormControl<string | null>("", Validators.required),
    message: new FormControl<string | null>("", Validators.required),
  });
  submitted = false;
  success = false;

  constructor() {}

  ngOnInit() {}

  // onSubmit method called when user submits the form
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    this.success = true;
    console.log("form submitted");
  }
}
