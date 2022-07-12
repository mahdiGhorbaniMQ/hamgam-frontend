import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AddSkillFormComponent } from 'src/app/core/components/add-skill-form/add-skill-form/add-skill-form.component';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';
import { SkillService } from 'src/app/core/services/skill.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-skills-step',
  templateUrl: './skills-step.component.html',
  styleUrls: ['./skills-step.component.scss']
})
export class SkillsStepComponent implements OnInit {

  @Input("formGroup") formGroup!:FormGroup

  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl('');
  filteredSkills!: Observable<SkillModel[]>;  
  @Input("skills") selectedSkills!: Set<SkillModel>

  @ViewChild('skillInput') skillInput!: ElementRef<HTMLInputElement>;


  constructor(
    public theme:ThemeService,
    private skillService:SkillService,
    private dialog: MatDialog) {
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skillName: string) => (skillName ? this._filter(skillName) : skillService.allSkills.filter(skill=>!this.selectedSkills.has(skill)).slice())),
    );
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = event.value;
    let skill = this.skillService.getByName(value)
    if(skill){
      this.selectedSkills.add(skill);
      event.chipInput!.clear();  
      this.skillCtrl.setValue(null);
    }
  }

  removeSkill(skill: SkillModel): void {
    this.selectedSkills.delete(skill)
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedSkills.add(event.option.value);
    this.skillInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
  }

  private _filter(value: string): SkillModel[] {
    if(typeof(value) != "string") return this.skillService.allSkills.filter(skill=>!this.selectedSkills.has(skill))
    return this.skillService.allSkills.filter(skill => {
      return skill.name.toLowerCase().includes(value.toLowerCase()) && !this.selectedSkills.has(skill)
    });
  }

  openDialog(): void {
    import("src/app/core/components/add-skill-form/add-skill-form.module").then(m => m.AddSkillFormModule)
    const dialogRef = this.dialog.open(AddSkillFormComponent, {
      width: '350px',
      height: '450px',
    });
  }
}
