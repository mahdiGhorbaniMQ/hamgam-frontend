import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map,startWith } from 'rxjs/operators'
import { AuthService } from 'src/app/core/services/auth.service';
import { ScreenService } from 'src/app/core/services/screen.service';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private search:SearchService,
    public auth:AuthService,
    public screen:ScreenService){}

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions!: Observable<string[]>;
  screenWidth!:number
  ngOnInit() {
    this.checkScreen()
    this.myControl.valueChanges.pipe(
      // delay(500),
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

}
