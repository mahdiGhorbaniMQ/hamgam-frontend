import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ThemeService } from 'src/app/core/services/theme.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent, CKEditor5 } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-content-step',
  templateUrl: './content-step.component.html',
  styleUrls: ['./content-step.component.scss']
})
export class ContentStepComponent implements OnInit {

  Editor = ClassicEditor;

  public onChange( { editor }: ChangeEvent ) {
    this.formGroup.get('content')?.setValue(editor.getData());    
  }

  constructor(
    public theme:ThemeService,
  ) {}

  ngOnInit(): void {
  }

  @Input("formGroup") formGroup!:FormGroup
}
