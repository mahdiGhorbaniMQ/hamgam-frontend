import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    // localStorage.setItem("dark",'1')
    this.dark = localStorage.getItem("dark")=='0'?false:true
    // this.skin = localStorage.getItem("dark")=='1'?'moono-lisa':'kama'
  }
  dark = true
  skin = 'kama'
}
