import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-content-step',
  templateUrl: './content-step.component.html',
  styleUrls: ['./content-step.component.scss']
})
export class ContentStepComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input("formGroup") formGroup!:FormGroup
}
