import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-part-form-component',
  templateUrl: './part-form.component.html',
  styleUrls: ['./part-form.component.scss']
})
export class PartFormComponent implements OnInit {

  partData: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.partData =  this.fb.group({
      partName: new FormControl('DefaultPart', [Validators.required]),
      partNumber: new FormControl('', [Validators.required]),
      partX: new FormControl(0, [Validators.required , Validators.pattern('/d*')]),
      partY: new FormControl(0, [Validators.required]),
      partZ: new FormControl(0, [Validators.required]),
      partWeight: new FormControl(0, [Validators.required]),
      });
  }



  printData(): void{
    console.log("CLick");
  }
}
