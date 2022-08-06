import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 1500);
    this.loaded.subscribe(data=>{
      this.loadedData.push(data)
      console.log(this.loadedData);
      
      if(data.length===3){
        this.isLoading = false
      }
    })
  }

  isLoading:boolean = false
  loadedData: string[] = []
  loaded = new Subject<string>()

}
