import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-content-step',
  templateUrl: './content-step.component.html',
  styleUrls: ['./content-step.component.scss']
})
export class ContentStepComponent implements OnInit {

  constructor(
    public theme:ThemeService,
  ) { }

  ngOnInit(): void {
  }

  @Input("formGroup") formGroup!:FormGroup
}
