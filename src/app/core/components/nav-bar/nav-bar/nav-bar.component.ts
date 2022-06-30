import { Component, HostListener, OnInit } from '@angular/core';
import { NavInformationService } from '../nav-information.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  constructor(public informations: NavInformationService) {

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
