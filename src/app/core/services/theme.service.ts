import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    this.dark = localStorage.getItem("dark")=='1'?true:false
  }
  dark = true
}
