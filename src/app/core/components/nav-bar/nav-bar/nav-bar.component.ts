import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import { NavInformationService } from '../nav-information.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  constructor(
    public informations: NavInformationService,
    public theme:ThemeService,
  ) {

  }
  setTheme(){
    localStorage.setItem("dark",!this.theme.dark?'1':'0')
  }
  setSkin(e:any){
    this.theme.skin = e.checked?'moono-lisa':'kama'
  }
  

  ngOnInit():void{}

  ngAfterContentChecked(): void {
    this.checkSize()
  }

  @HostListener('window:resize')
  async checkSize(){
    this.informations.size = Number((((window.innerHeight-50)/60) - 3).toFixed())
    this.informations.moreCondition = false
    this.informations.informations.slice(this.informations.size).forEach(item=>{
      if(item.isSelected){
        this.informations.moreCondition = true
        return
      }
    })
  }


}
