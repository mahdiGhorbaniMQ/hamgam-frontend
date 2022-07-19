import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AddSkillFormComponent } from 'src/app/core/components/add-skill-form/add-skill-form/add-skill-form.component';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';
import { InformationService } from 'src/app/core/services/information.service';
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
    private informations:InformationService,
    private skillService:SkillService,
    private dialog: MatDialog) {
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skillName: string) => (skillName ? this._filter(skillName) : this.asArr(informations.skills).filter(skill=>!this.selectedSkills.has(skill)).slice())),
    );
  }
  asArr(map:Map<any,any>){
    let arr:any[] = []
    map.forEach((item:any,key:any)=>{
      arr.push(item)
    })
    return arr
  }
  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = event.value;
    let skill = this.skillService.getByName(value)
    if(skill){
      this.selectedSkills.add(skill);
      event.chipInput!.clear();  
      this.skillCtrl.reset()
    }
  }

  removeSkill(skill: SkillModel): void {
    this.selectedSkills.delete(skill)
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.skillCtrl.reset();
    this.skillInput.nativeElement.value = '';
    this.selectedSkills.add(event.option.value);
  }

  private _filter(value: string): SkillModel[] {
    if(typeof(value) != "string") return this.asArr(this.informations.skills).filter(skill=>!this.selectedSkills.has(skill))
    return this.asArr(this.informations.skills).filter(skill => {
      return skill.name!.toLowerCase().includes(value.toLowerCase()) && !this.selectedSkills.has(skill)
    });
  }

  openDialog(): void {
    import("src/app/core/components/add-skill-form/add-skill-form.module").then(m => m.AddSkillFormModule)
    let options = {
      width: '350px',
      height: '450px',
      panelClass: ''
    }
    if(this.theme.dark) options.panelClass = 'dialog-dark'
    const dialogRef = this.dialog.open(AddSkillFormComponent,options);
  }

  selectSearch(){
    this.filteredSkills =new BehaviorSubject(this.skillCtrl.value ? this._filter(this.skillCtrl.value) : this.asArr(this.informations.skills).filter(skill=>!this.selectedSkills.has(skill)).slice())
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skillName: string) => (this.skillCtrl.value ? this._filter(this.skillCtrl.value) : this.asArr(this.informations.skills).filter(skill=>!this.selectedSkills.has(skill)).slice())),
    );
  }
}
