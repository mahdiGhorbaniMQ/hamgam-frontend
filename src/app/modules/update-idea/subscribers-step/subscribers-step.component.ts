import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-subscribers-step',
  templateUrl: './subscribers-step.component.html',
  styleUrls: ['./subscribers-step.component.scss']
})
export class SubscribersStepComponent implements OnInit {


  @Input("formGroup") formGroup!:FormGroup

  separatorKeysCodes: number[] = [ENTER, COMMA];
  userCtrl = new FormControl('');
  filteredUsers!: Observable<UserModel[]>;
  @Input("users") selectedUsers!: Set<UserModel>;

  @ViewChild('userInput') userInput!: ElementRef<HTMLInputElement>;

  @Output() onSubmit = new EventEmitter<string>();


  constructor(private userService:UserService) {
    this.filteredUsers = this.userCtrl.valueChanges.pipe(
      startWith(null),
      map((user: string) => (user ? this._filterUser(user) : userService.allUsers.filter(user=>!this.selectedUsers.has(user)).slice())),
    );
  }

  ngOnInit(): void {
  }

  addUser(event: MatChipInputEvent): void {
    const value = event.value;
    let user = this.userService.getUserByName(value) || this.userService.getUserByemail(value)
    if(user){
      this.selectedUsers.add(user);
      event.chipInput!.clear();
      this.userCtrl.setValue(null);
    }
  }

  removeUser(user: UserModel): void {
    this.selectedUsers.delete(user)
  }

  selectedUser(event: MatAutocompleteSelectedEvent): void {
    
    this.selectedUsers.add(event.option.value);
    this.userInput.nativeElement.value = '';
    this.userCtrl.setValue(null);
  }

  private _filterUser(value: string):UserModel[]{
    if(typeof(value) != "string") return this.userService.allUsers.filter(user=>!this.selectedUsers.has(user))
    return this.userService.allUsers.filter(user => (
      (user.name.toLowerCase().includes(value.toLowerCase())
      || user.email.toLowerCase().includes(value.toLowerCase()))
      && !this.selectedUsers.has(user)
    ));
  }


  submit(){
    this.onSubmit.emit();
  }
}
