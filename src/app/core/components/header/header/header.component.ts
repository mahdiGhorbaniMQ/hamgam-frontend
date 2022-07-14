import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map,startWith } from 'rxjs/operators'
import { UserModel } from 'src/app/core/models/user-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ScreenService } from 'src/app/core/services/screen.service';
import { SearchService } from 'src/app/core/services/search.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated!:boolean

  constructor(
    private search:SearchService,
    public theme:ThemeService,
    public auth:AuthService,
    private router:Router,
    public screen:ScreenService){}

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions!: Observable<UserModel[]>;
  screenWidth!:number
  ngOnInit() {
    this.auth.isAuthentication.subscribe(isAuthenticated=> this.isAuthenticated = isAuthenticated)
    this.checkScreen()
    this.myControl.valueChanges.pipe(
      startWith(''),
      map((value:any) => this.search.search(value)),
    ).subscribe(options=>{
      this.filteredOptions = options
    });
  }
  @HostListener('window:resize')
  checkScreen(){
    this.screenWidth = window.innerWidth
  }
  navigate(event:MatAutocompleteSelectedEvent){
    this.myControl.setValue('')
    this.router.navigate(["/profile/"+event.option.value.email])
  }
  setTheme(){
    localStorage.setItem("dark",!this.theme.dark?'1':'0')
  }
  selectSearch(){
    this.filteredOptions = this.search.search(this.myControl.value)
  }
}
