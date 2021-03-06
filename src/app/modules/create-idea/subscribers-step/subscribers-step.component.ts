import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { UserModel } from 'src/app/core/models/user-model';
import { InformationService } from 'src/app/core/services/information.service';
import { ThemeService } from 'src/app/core/services/theme.service';
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


  constructor(
    public theme:ThemeService,
    private informations:InformationService,
    private userService:UserService
) {
    this.filteredUsers = this.userCtrl.valueChanges.pipe(
      startWith(null),
      map((user: string) => (user ? this._filterUser(user) : this.asArr(this.informations.users).filter(user=>!this.selectedUsers.has(user)).slice())),
    )
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

  addUser(event: MatChipInputEvent): void {
    const value = event.value;
    let user = this.userService.getUserByName(value) || this.userService.getUserByEmail(value)
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
    if(typeof(value) != "string") return this.asArr(this.informations.users).filter(user=>!this.selectedUsers.has(user))
    return this.asArr(this.informations.users).filter(user => (
      ((user.firstName!.toLowerCase() + " " + user.lastName!.toLowerCase()).includes(value.toLowerCase())
      || user.email!.toLowerCase().includes(value.toLowerCase()))
      && !this.selectedUsers.has(user)
    ));
  }


  submit(){
    this.onSubmit.emit();
  }

  selectSearch(){
    this.filteredUsers = new BehaviorSubject(this.userCtrl.value ? this._filterUser(this.userCtrl.value) : this.asArr(this.informations.users).filter(user=>!this.selectedUsers.has(user)).slice())
    this.filteredUsers = this.userCtrl.valueChanges.pipe(
      startWith(null),
      map((userName: string) => (this.userCtrl.value ? this._filterUser(this.userCtrl.value) : this.asArr(this.informations.users).filter(user=>!this.selectedUsers.has(user)).slice())),
    );
  }
}
