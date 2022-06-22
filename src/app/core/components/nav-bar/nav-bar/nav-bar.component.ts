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
  
  size!:number
  moreCondition!:boolean

  ngOnInit():void{}

  ngAfterContentChecked(): void {
    this.checkSize()
  }

  @HostListener('window:resize')
  async checkSize(){
    this.size = Number((((window.innerHeight-50)/60) - 3).toFixed())
    this.moreCondition = false
    this.informations.informations.slice(this.size).forEach(item=>{
      if(item.isSelected){
        this.moreCondition = true
        return
      }
    })
  }

  select(i:number){
    this.informations.informations.forEach((item,index)=>{
      if (index == i ) item.isSelected = true
      else item.isSelected = false
    })
    this.moreCondition = false
    this.informations.informations.slice(this.size).forEach(item=>{
      if(item.isSelected){
        this.moreCondition = true
        return
      }
    })
  }

}
